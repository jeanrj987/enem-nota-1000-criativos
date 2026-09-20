import "./index.css";
import React from "react";
import { Still } from "remotion";
import { ALTURA, ALTURA_TIKTOK, LARGURA } from "./tokens";
import { Slide01Capa, Slide02Peso, Slide03Cursinho, Slide04Competencia5 } from "./slides/parte1";
import {
  Slide05Identificacao,
  Slide06Solucao,
  Slide07Beneficios,
  Slide08Comparacao,
  Slide09Oferta,
  Slide10Cta,
} from "./slides/parte2";

// Cada slide é um <Still>: `remotion still slide-01` exporta um PNG.
const SLIDES: ReadonlyArray<{ id: string; componente: React.FC }> = [
  { id: "slide-01", componente: Slide01Capa },
  { id: "slide-02", componente: Slide02Peso },
  { id: "slide-03", componente: Slide03Cursinho },
  { id: "slide-04", componente: Slide04Competencia5 },
  { id: "slide-05", componente: Slide05Identificacao },
  { id: "slide-06", componente: Slide06Solucao },
  { id: "slide-07", componente: Slide07Beneficios },
  { id: "slide-08", componente: Slide08Comparacao },
  { id: "slide-09", componente: Slide09Oferta },
  { id: "slide-10", componente: Slide10Cta },
];

// Feed (Instagram/Facebook) em 4:5 e TikTok em 9:16, com o mesmo conteúdo.
const FORMATOS: ReadonlyArray<{ prefixo: string; altura: number }> = [
  { prefixo: "slide", altura: ALTURA },
  { prefixo: "tiktok", altura: ALTURA_TIKTOK },
];

export const RemotionRoot: React.FC = () => (
  <>
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
