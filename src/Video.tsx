import React from "react";
import { Sequence } from "remotion";
import { SLIDES } from "./slides/lista";
import { AnimarContext, SaidaEmFade } from "./ui/Animacao";

// Uma cena por slide, em sequência, reaproveitando os mesmos componentes dos PNGs.
export const CarrosselVideo: React.FC = () => {
  let inicio = 0;
  return (
    <AnimarContext.Provider value={true}>
      {SLIDES.map(({ id, componente: Cena, frames }) => {
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
    </AnimarContext.Provider>
  );
};
