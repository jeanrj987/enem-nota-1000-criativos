import "./index.css";
import React from "react";
import { Composition, Still } from "remotion";
import { ALTURA, ALTURA_TIKTOK, LARGURA } from "./tokens";
import { CarrosselVideo, PROPS_VIDEO_COMPLETO } from "./Video";
import { CENAS_CURTAS, DURACAO_TOTAL_FRAMES, SLIDES, somarFrames } from "./slides/lista";

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
      defaultProps={PROPS_VIDEO_COMPLETO}
      width={LARGURA}
      height={ALTURA_TIKTOK}
      fps={FPS}
      durationInFrames={DURACAO_TOTAL_FRAMES}
    />
    <Composition
      id="video-curto"
      component={CarrosselVideo}
      defaultProps={{ cenas: CENAS_CURTAS, comMusica: true }}
      width={LARGURA}
      height={ALTURA_TIKTOK}
      fps={FPS}
      durationInFrames={somarFrames(CENAS_CURTAS)}
    />
    <Composition
      id="video-curto-sem-musica"
      component={CarrosselVideo}
      defaultProps={{ cenas: CENAS_CURTAS, comMusica: false }}
      width={LARGURA}
      height={ALTURA_TIKTOK}
      fps={FPS}
      durationInFrames={somarFrames(CENAS_CURTAS)}
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
