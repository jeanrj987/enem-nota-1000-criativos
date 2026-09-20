import React from "react";
import { Slide01Capa, Slide02Peso, Slide03Cursinho, Slide04Competencia5 } from "./parte1";
import {
  Slide05Identificacao,
  Slide06Solucao,
  Slide07Beneficios,
  Slide08Comparacao,
  Slide09Oferta,
  Slide10Cta,
} from "./parte2";

// Duração de cada cena no vídeo (30 fps): slides mais densos ficam mais tempo.
export const SLIDES: ReadonlyArray<{ id: string; componente: React.FC; frames: number }> = [
  { id: "slide-01", componente: Slide01Capa, frames: 90 },
  { id: "slide-02", componente: Slide02Peso, frames: 105 },
  { id: "slide-03", componente: Slide03Cursinho, frames: 120 },
  { id: "slide-04", componente: Slide04Competencia5, frames: 135 },
  { id: "slide-05", componente: Slide05Identificacao, frames: 120 },
  { id: "slide-06", componente: Slide06Solucao, frames: 105 },
  { id: "slide-07", componente: Slide07Beneficios, frames: 135 },
  { id: "slide-08", componente: Slide08Comparacao, frames: 120 },
  { id: "slide-09", componente: Slide09Oferta, frames: 120 },
  { id: "slide-10", componente: Slide10Cta, frames: 150 },
];

export const DURACAO_TOTAL_FRAMES = SLIDES.reduce((soma, s) => soma + s.frames, 0);
