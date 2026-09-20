// Gera uma trilha instrumental original (sem direitos de terceiros) em
// public/musica-fundo.wav: pad + baixo + arpejo suave + batida leve, 96 bpm,
// progressão Am - F - C - G. Para trocar por outra música, basta substituir
// public/musica-fundo.mp3 (e ajustar MUSICA em src/Video.tsx, se mudar o nome).
import { mkdirSync, writeFileSync } from "node:fs";

const TAXA = 44100;
const BPM = 96;
const DURACAO_S = 30;
const BATIDA_S = 60 / BPM;
const COMPASSO_S = BATIDA_S * 4;
const PICO_MAXIMO = 0.89;

// Frequência de uma nota a partir do número MIDI.
const hz = (midi) => 440 * 2 ** ((midi - 69) / 12);

// Acordes por compasso: [baixo, ...tríade]. Am, F, C, G.
const ACORDES = [
  [45, 57, 60, 64],
  [41, 53, 57, 60],
  [48, 60, 64, 67],
  [43, 55, 59, 62],
];

const total = TAXA * DURACAO_S;
const esq = new Float32Array(total);
const dir = new Float32Array(total);

function somar(inicioS, amostras, ganhoEsq, ganhoDir) {
  const i0 = Math.floor(inicioS * TAXA);
  for (let i = 0; i < amostras.length && i0 + i < total; i++) {
    esq[i0 + i] += amostras[i] * ganhoEsq;
    dir[i0 + i] += amostras[i] * ganhoDir;
  }
}

// Tom com harmônicos, ataque linear e decaimento exponencial ou sustentado.
function tom(freq, duracaoS, { ataque = 0.01, decai = 4, harmonicos = [1, 0.3, 0.1] }) {
  const n = Math.floor(duracaoS * TAXA);
  const saida = new Float32Array(n);
  for (let i = 0; i < n; i++) {
    const t = i / TAXA;
    const env = Math.min(1, t / ataque) * Math.exp(-decai * t) * Math.min(1, (n - i) / (0.05 * TAXA));
    let v = 0;
    harmonicos.forEach((g, h) => {
      v += g * Math.sin(2 * Math.PI * freq * (h + 1) * t);
    });
    saida[i] = v * env;
  }
  return saida;
}

function pad(acorde, inicioS) {
  // Duas vozes levemente desafinadas por nota, abertas no estéreo.
  acorde.slice(1).forEach((nota, k) => {
    const f = hz(nota);
    const s1 = tom(f * 0.997, COMPASSO_S + 0.6, { ataque: 0.5, decai: 0.15, harmonicos: [1, 0.35, 0.12] });
    const s2 = tom(f * 1.003, COMPASSO_S + 0.6, { ataque: 0.5, decai: 0.15, harmonicos: [1, 0.35, 0.12] });
    somar(inicioS, s1, 0.075 + k * 0.01, 0.045);
    somar(inicioS, s2, 0.045, 0.075 + k * 0.01);
  });
}

function baixo(acorde, inicioS) {
  const f = hz(acorde[0]);
  [0, 2, 2.5].forEach((b) => {
    const s = tom(f, BATIDA_S * 1.5, { ataque: 0.008, decai: 3.5, harmonicos: [1, 0.5, 0.15] });
    somar(inicioS + b * BATIDA_S, s, 0.32, 0.32);
  });
}

function arpejo(acorde, inicioS) {
  const notas = acorde.slice(1).map((n) => n + 12);
  const ordem = [0, 1, 2, 1, 0, 1, 2, 1];
  ordem.forEach((idx, passo) => {
    const s = tom(hz(notas[idx]), BATIDA_S, { ataque: 0.004, decai: 7, harmonicos: [1, 0.2] });
    const lado = passo % 2 === 0 ? [0.11, 0.05] : [0.05, 0.11];
    somar(inicioS + passo * (BATIDA_S / 2), s, lado[0], lado[1]);
  });
}

function bumbo(inicioS) {
  const n = Math.floor(0.28 * TAXA);
  const s = new Float32Array(n);
  let fase = 0;
  for (let i = 0; i < n; i++) {
    const t = i / TAXA;
    fase += (2 * Math.PI * (45 + 90 * Math.exp(-t * 28))) / TAXA;
    s[i] = Math.sin(fase) * Math.exp(-t * 9);
  }
  somar(inicioS, s, 0.42, 0.42);
}

function chimbau(inicioS) {
  const n = Math.floor(0.05 * TAXA);
  const s = new Float32Array(n);
  let anterior = 0;
  for (let i = 0; i < n; i++) {
    const ruido = Math.random() * 2 - 1;
    s[i] = (ruido - anterior) * Math.exp((-i / n) * 6);
    anterior = ruido;
  }
  somar(inicioS, s, 0.05, 0.05);
}

const compassos = Math.floor(DURACAO_S / COMPASSO_S);
for (let c = 0; c < compassos; c++) {
  const acorde = ACORDES[c % ACORDES.length];
  const t0 = c * COMPASSO_S;
  pad(acorde, t0);
  baixo(acorde, t0);
  arpejo(acorde, t0);
  // A batida só entra a partir do 2º compasso, para o começo respirar.
  if (c >= 1) {
    [0, 2].forEach((b) => bumbo(t0 + b * BATIDA_S));
    [0.5, 1.5, 2.5, 3.5].forEach((b) => chimbau(t0 + b * BATIDA_S));
  }
}

// Eco curto para dar espaço, fade de entrada/saída e normalização.
const ATRASO = Math.floor(BATIDA_S * 0.75 * TAXA);
for (let i = ATRASO; i < total; i++) {
  esq[i] += dir[i - ATRASO] * 0.28;
  dir[i] += esq[i - ATRASO] * 0.28;
}
let pico = 0;
for (let i = 0; i < total; i++) {
  const t = i / TAXA;
  const fade = Math.min(1, t / 1.0) * Math.min(1, (DURACAO_S - t) / 2.0);
  esq[i] *= fade;
  dir[i] *= fade;
  pico = Math.max(pico, Math.abs(esq[i]), Math.abs(dir[i]));
}
const ganho = PICO_MAXIMO / pico;

const dados = Buffer.alloc(total * 4);
for (let i = 0; i < total; i++) {
  dados.writeInt16LE(Math.round(esq[i] * ganho * 32767), i * 4);
  dados.writeInt16LE(Math.round(dir[i] * ganho * 32767), i * 4 + 2);
}

const cabecalho = Buffer.alloc(44);
cabecalho.write("RIFF", 0);
cabecalho.writeUInt32LE(36 + dados.length, 4);
cabecalho.write("WAVEfmt ", 8);
cabecalho.writeUInt32LE(16, 16);
cabecalho.writeUInt16LE(1, 20);
cabecalho.writeUInt16LE(2, 22);
cabecalho.writeUInt32LE(TAXA, 24);
cabecalho.writeUInt32LE(TAXA * 4, 28);
cabecalho.writeUInt16LE(4, 32);
cabecalho.writeUInt16LE(16, 34);
cabecalho.write("data", 36);
cabecalho.writeUInt32LE(dados.length, 40);

mkdirSync("public", { recursive: true });
writeFileSync("public/musica-fundo.wav", Buffer.concat([cabecalho, dados]));
console.log(`Trilha gerada: ${DURACAO_S}s, ${BPM} bpm, public/musica-fundo.wav`);
