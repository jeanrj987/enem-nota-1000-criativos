import React, { createContext } from "react";
import { interpolate, spring, useCurrentFrame, useVideoConfig } from "remotion";

// Falso nos <Still> (PNG); verdadeiro só dentro do vídeo, onde os elementos
// de cada cena entram em sequência em vez de aparecerem já prontos.
export const AnimarContext = createContext(false);

const ATRASO_INICIAL = 6;
const ATRASO_ENTRE_ELEMENTOS = 9;
const DURACAO_ENTRADA = 22;
const DESLOCAMENTO_PX = 46;
const DURACAO_SAIDA = 10;

// Entrada de um elemento: sobe e aparece, escalonado pela posição (`indice`).
export const Revela: React.FC<{ indice: number; children: React.ReactNode }> = ({
  indice,
  children,
}) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const progresso = spring({
    frame: frame - ATRASO_INICIAL - indice * ATRASO_ENTRE_ELEMENTOS,
    fps,
    durationInFrames: DURACAO_ENTRADA,
    config: { damping: 200 },
  });
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        opacity: progresso,
        transform: `translateY(${(1 - progresso) * DESLOCAMENTO_PX}px)`,
      }}
    >
      {children}
    </div>
  );
};

// Fade-out no fim de cada cena, para a troca não ser um corte seco.
export const SaidaEmFade: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const frame = useCurrentFrame();
  const { durationInFrames } = useVideoConfig();
  const opacidade = interpolate(
    frame,
    [durationInFrames - DURACAO_SAIDA, durationInFrames],
    [1, 0],
    { extrapolateLeft: "clamp", extrapolateRight: "clamp" },
  );
  return <div style={{ opacity: opacidade, width: "100%", height: "100%" }}>{children}</div>;
};
