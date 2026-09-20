// Exporta os 10 slides como PNG: feed 4:5 (out/carrossel/) e TikTok 9:16 (out/tiktok/).
// Uso: node scripts/renderizar.mjs [feed|tiktok]  (sem argumento, renderiza os dois)
import { execFileSync } from "node:child_process";
import { mkdirSync } from "node:fs";

const TOTAL_SLIDES = 10;
const DESTINOS = {
  feed: { prefixo: "slide", pasta: "out/carrossel" },
  tiktok: { prefixo: "tiktok", pasta: "out/tiktok" },
};

const pedido = process.argv[2];
if (pedido && !(pedido in DESTINOS)) {
  console.error("Formato invalido: use feed ou tiktok.");
  process.exit(1);
}

for (const [formato, { prefixo, pasta }] of Object.entries(DESTINOS)) {
  if (pedido && pedido !== formato) continue;
  mkdirSync(pasta, { recursive: true });
  for (let n = 1; n <= TOTAL_SLIDES; n++) {
    const id = prefixo + "-" + String(n).padStart(2, "0");
    console.log("Renderizando " + id + "...");
    execFileSync("npx", ["remotion", "still", "src/index.ts", id, pasta + "/" + id + ".png"], {
      stdio: "inherit",
      shell: true,
    });
  }
}
