import React from "react";
import { CAPA, COMPETENCIA5, CURSINHO, PESO } from "../conteudo";
import { COR } from "../tokens";
import { Moldura } from "../ui/Moldura";
import { Cartao, Espaco, Etiqueta, Texto, Titulo } from "../ui/blocos";
import { Rico } from "../ui/Rico";

const Medidor: React.FC = () => (
  <div style={{ width: "100%" }}>
    <div style={{ display: "flex", justifyContent: "space-between", fontSize: 34, fontWeight: 800 }}>
      <span style={{ color: COR.vermelho }}>Redação 640</span>
      <span style={{ color: COR.fraca }}>1000</span>
    </div>
    <div style={{ marginTop: 14, height: 26, borderRadius: 13, background: COR.regua, position: "relative" }}>
      <div style={{ width: "64%", height: "100%", borderRadius: 13, background: COR.vermelho }} />
      <div style={{ position: "absolute", left: "90%", top: -10, width: 6, height: 46, background: COR.verde }} />
    </div>
    <div style={{ marginTop: 14, textAlign: "right", fontSize: 30, color: COR.verde, fontWeight: 700 }}>
      meta 900+
    </div>
  </div>
);

export const Slide01Capa: React.FC = () => (
  <Moldura numero={1}>
    <Etiqueta texto={CAPA.etiqueta} />
    <Espaco h={40} />
    <Titulo texto={CAPA.titulo} tamanho={108} destaque={COR.vermelho} />
    <Espaco h={44} />
    <Texto texto={CAPA.apoio} />
    <Espaco h={70} />
    <Medidor />
  </Moldura>
);

const Nota: React.FC<{ valor: string; cor: string; rotulo: string }> = ({ valor, cor, rotulo }) => (
  <div style={{ flex: 1, textAlign: "center" }}>
    <div style={{ fontSize: 120, fontWeight: 800, color: cor, lineHeight: 1 }}>{valor}</div>
    <div style={{ fontSize: 30, color: COR.fraca, marginTop: 8 }}>{rotulo}</div>
  </div>
);

export const Slide02Peso: React.FC = () => (
  <Moldura numero={2}>
    <Etiqueta texto={PESO.etiqueta} />
    <div style={{ fontSize: 210, fontWeight: 800, color: COR.azul, lineHeight: 1.1, letterSpacing: -6 }}>
      {PESO.numero}
    </div>
    <Texto texto={PESO.texto} tamanho={52} cor={COR.tinta} />
    <Espaco h={50} />
    <Cartao>
      <div style={{ display: "flex", alignItems: "center" }}>
        <Nota valor={PESO.de} cor={COR.verde} rotulo="média com redação forte" />
        <div style={{ fontSize: 70, color: COR.fraca }}>→</div>
        <Nota valor={PESO.para} cor={COR.vermelho} rotulo="com 120 pts a menos" />
      </div>
    </Cartao>
    <Espaco h={36} />
    <Texto texto={PESO.legenda} />
  </Moldura>
);

const COR_PASSO: Record<string, string> = {
  tinta: COR.tinta,
  vermelho: COR.vermelho,
  fraca: COR.fraca,
};

export const Slide03Cursinho: React.FC = () => (
  <Moldura numero={3}>
    <Titulo texto={CURSINHO.titulo} tamanho={100} destaque={COR.vermelho} />
    <Espaco h={50} />
    {CURSINHO.passos.map((p) => (
      <div key={p.rotulo} style={{ marginBottom: 24 }}>
        <Cartao borda={p.cor === "vermelho" ? COR.vermelho : COR.regua}>
          <div style={{ display: "flex", alignItems: "center", gap: 30, fontSize: 46, fontWeight: 700, color: COR_PASSO[p.cor] }}>
            <span style={{ color: COR.azul, fontSize: 60, fontWeight: 800 }}>{p.rotulo}</span>
            <span><Rico texto={p.texto} destaque={COR.vermelho} /></span>
          </div>
        </Cartao>
      </div>
    ))}
    <Espaco h={16} />
    <Texto texto={CURSINHO.fecho} />
  </Moldura>
);

export const Slide04Competencia5: React.FC = () => (
  <Moldura numero={4}>
    <Titulo texto={COMPETENCIA5.titulo} tamanho={90} destaque={COR.ambar} />
    <Espaco h={26} />
    <Texto texto={COMPETENCIA5.apoio} tamanho={38} />
    <Espaco h={30} />
    {COMPETENCIA5.elementos.map((e) => (
      <div key={e.nome} style={{ display: "flex", alignItems: "center", gap: 26, marginBottom: 16 }}>
        <div style={{ width: 54, height: 54, borderRadius: 27, background: COR.verde, color: COR.papel, fontSize: 36, fontWeight: 800, display: "flex", alignItems: "center", justifyContent: "center" }}>
          ✓
        </div>
        <span style={{ fontSize: 46, fontWeight: 800 }}>{e.nome}</span>
        <span style={{ fontSize: 32, color: COR.fraca }}>{e.dica}</span>
      </div>
    ))}
    <Espaco h={20} />
    <Cartao borda={COR.ambar} fundo="#362a10">
      <Texto texto={COMPETENCIA5.fecho} cor={COR.tinta} tamanho={40} />
    </Cartao>
  </Moldura>
);
