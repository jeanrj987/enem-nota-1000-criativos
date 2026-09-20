import React, { useContext } from "react";
import { AbsoluteFill, useVideoConfig } from "remotion";
import { KARLA } from "../fonts";
import { AnimarContext, Revela } from "./Animacao";
import { ALTURA, COR, MARGEM, TOTAL_SLIDES } from "../tokens";

type Props = {
  numero: number;
  children: React.ReactNode;
};

// Áreas livres de cada formato. No TikTok a legenda e os botões cobrem a base
// e o lado direito, então o conteúdo sobe e ganha uma margem direita maior.
const ZONA_FEED = { topo: 160, base: 150, direita: MARGEM, dica: 60 };
const ZONA_TIKTOK = { topo: 240, base: 460, direita: 150, dica: 400 };

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
export const Moldura: React.FC<Props> = ({ numero, children }) => {
  const { width, height } = useVideoConfig();
  const animar = useContext(AnimarContext);
  const zona = height > ALTURA ? ZONA_TIKTOK : ZONA_FEED;
  const topoMarca = height > ALTURA ? 150 : 64;

  return (
    <AbsoluteFill
      style={{
        background: `radial-gradient(900px 600px at 100% 0%, #10244a 0%, ${COR.papel} 60%)`,
        fontFamily: KARLA,
        color: COR.tinta,
        width,
        height,
      }}
    >
      <div
        style={{
          position: "absolute",
          top: topoMarca,
          left: MARGEM,
          right: zona.direita,
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
          top: zona.topo,
          bottom: zona.base,
          left: MARGEM,
          right: zona.direita,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        {animar
          ? React.Children.map(children, (filho, i) => <Revela indice={i}>{filho}</Revela>)
          : children}
      </div>
      <div
        style={{
          position: "absolute",
          bottom: zona.dica,
          right: zona.direita,
          fontSize: 32,
          fontWeight: 700,
          color: COR.fraca,
        }}
      >
        {numero < TOTAL_SLIDES && !animar ? "Arraste →" : ""}
      </div>
    </AbsoluteFill>
  );
};
