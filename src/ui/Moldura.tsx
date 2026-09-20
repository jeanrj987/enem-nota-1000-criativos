import React from "react";
import { AbsoluteFill } from "remotion";
import { KARLA } from "../fonts";
import { ALTURA, COR, LARGURA, MARGEM, TOTAL_SLIDES } from "../tokens";

type Props = {
  numero: number;
  children: React.ReactNode;
};

const Progresso: React.FC<{ numero: number }> = ({ numero }) => (
  <div style={{ display: "flex", gap: 8, width: 300 }}>
    {Array.from({ length: TOTAL_SLIDES }, (_, i) => (
      <div
        key={i}
        style={{
          flex: 1,
          height: 6,
          borderRadius: 3,
          background: i < numero ? COR.azul : COR.regua,
        }}
      />
    ))}
  </div>
);

// Fundo, marca, progresso e dica de "arraste" comuns a todos os slides.
export const Moldura: React.FC<Props> = ({ numero, children }) => (
  <AbsoluteFill
    style={{
      background: `radial-gradient(900px 600px at 100% 0%, #10244a 0%, ${COR.papel} 60%)`,
      fontFamily: KARLA,
      color: COR.tinta,
      width: LARGURA,
      height: ALTURA,
    }}
  >
    <div
      style={{
        position: "absolute",
        top: 64,
        left: MARGEM,
        right: MARGEM,
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        fontSize: 30,
        fontWeight: 800,
      }}
    >
      <span>
        Nota 1000 <span style={{ color: COR.azul }}>AI</span>
      </span>
      <Progresso numero={numero} />
    </div>
    <div
      style={{
        position: "absolute",
        top: 160,
        bottom: 150,
        left: MARGEM,
        right: MARGEM,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      {children}
    </div>
    <div
      style={{
        position: "absolute",
        bottom: 60,
        right: MARGEM,
        fontSize: 32,
        fontWeight: 700,
        color: COR.fraca,
      }}
    >
      {numero < TOTAL_SLIDES ? "Arraste →" : ""}
    </div>
  </AbsoluteFill>
);
