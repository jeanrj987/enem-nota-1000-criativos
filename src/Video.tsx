import React from "react";
import { Audio } from "@remotion/media";
import { interpolate, Sequence, staticFile, useVideoConfig } from "remotion";
import { CENAS_COMPLETAS, SLIDES, type Cena } from "./slides/lista";
import { AnimarContext, SaidaEmFade } from "./ui/Animacao";

const MUSICA = "musica-fundo.mp3";
// Volume baixo: a trilha é cama para a locução, que entra por cima na edição.
const VOLUME_MUSICA = 0.3;
const ENTRADA_MUSICA_S = 0.5;
const SAIDA_MUSICA_S = 1.2;

export type PropsVideo = {
  cenas: ReadonlyArray<Cena>;
  comMusica: boolean;
};

export const PROPS_VIDEO_COMPLETO: PropsVideo = { cenas: CENAS_COMPLETAS, comMusica: false };

const Musica: React.FC<{ totalFrames: number }> = ({ totalFrames }) => {
  const { fps } = useVideoConfig();
  return (
    <Audio
      src={staticFile(MUSICA)}
      volume={(f) =>
        interpolate(
          f,
          [0, ENTRADA_MUSICA_S * fps, totalFrames - SAIDA_MUSICA_S * fps, totalFrames],
          [0, VOLUME_MUSICA, VOLUME_MUSICA, 0],
          { extrapolateLeft: "clamp", extrapolateRight: "clamp" },
        )
      }
    />
  );
};

// Uma cena por slide, em sequência, reaproveitando os mesmos componentes dos PNGs.
export const CarrosselVideo: React.FC<PropsVideo> = ({ cenas, comMusica }) => {
  let inicio = 0;
  const total = cenas.reduce((soma, c) => soma + c.frames, 0);
  return (
    <AnimarContext.Provider value={true}>
      {cenas.map(({ id, frames }) => {
        const Cena = SLIDES.find((s) => s.id === id)?.componente;
        if (!Cena) throw new Error(`Cena desconhecida: ${id}`);
        const de = inicio;
        inicio += frames;
        return (
          <Sequence key={id} from={de} durationInFrames={frames} premountFor={15}>
            <SaidaEmFade>
              <Cena />
            </SaidaEmFade>
          </Sequence>
        );
      })}
      {comMusica ? <Musica totalFrames={total} /> : null}
    </AnimarContext.Provider>
  );
};
