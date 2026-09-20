import "./index.css";
import React from "react";
import { Composition, Still } from "remotion";
import { ALTURA, ALTURA_TIKTOK, LARGURA } from "./tokens";
import { CarrosselVideo } from "./Video";
import { DURACAO_TOTAL_FRAMES, SLIDES } from "./slides/lista";

// Feed (Instagram/Facebook) em 4:5 e TikTok em 9:16, com o mesmo conteúdo.
const FPS = 30;

const FORMATOS: ReadonlyArray<{ prefixo: string; altura: number }> = [
  { prefixo: "slide", altura: ALTURA },
  { prefixo: "tiktok", altura: ALTURA_TIKTOK },
];

export const RemotionRoot: React.FC = () => (
  <>
    <Composition
      id="video-tiktok"
      component={CarrosselVideo}
      width={LARGURA}
      height={ALTURA_TIKTOK}
      fps={FPS}
      durationInFrames={DURACAO_TOTAL_FRAMES}
    />
    {FORMATOS.flatMap(({ prefixo, altura }) =>
      SLIDES.map(({ id, componente }) => (
        <Still
          key={prefixo + id}
          id={id.replace("slide", prefixo)}
          component={componente}
          width={LARGURA}
          height={altura}
        />
      )),
    )}
  </>
);
