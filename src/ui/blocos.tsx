import React from "react";
import { COR } from "../tokens";
import { Rico } from "./Rico";

export const Titulo: React.FC<{ texto: string; tamanho?: number; destaque?: string }> = ({
  texto,
  tamanho = 96,
  destaque,
}) => (
  <h1
    style={{
      margin: 0,
      fontSize: tamanho,
      lineHeight: 1.05,
      fontWeight: 800,
      letterSpacing: -2,
    }}
  >
    <Rico texto={texto} destaque={destaque} />
  </h1>
);

export const Texto: React.FC<{ texto: string; cor?: string; tamanho?: number }> = ({
  texto,
  cor = COR.suave,
  tamanho = 46,
}) => (
  <p style={{ margin: 0, fontSize: tamanho, lineHeight: 1.3, color: cor }}>
    <Rico texto={texto} destaque={COR.tinta} />
  </p>
);

export const Etiqueta: React.FC<{ texto: string; cor?: string }> = ({
  texto,
  cor = COR.azul,
}) => (
  <div
    style={{
      alignSelf: "flex-start",
      padding: "10px 22px",
      borderRadius: 999,
      border: `2px solid ${cor}`,
      color: cor,
      fontSize: 28,
      fontWeight: 800,
      letterSpacing: 2,
      textTransform: "uppercase",
    }}
  >
    {texto}
  </div>
);

export const Cartao: React.FC<{
  children: React.ReactNode;
  borda?: string;
  fundo?: string;
}> = ({ children, borda = COR.regua, fundo = COR.folha }) => (
  <div
    style={{
      background: fundo,
      border: `2px solid ${borda}`,
      borderRadius: 28,
      padding: "34px 40px",
    }}
  >
    {children}
  </div>
);

export const Espaco: React.FC<{ h: number }> = ({ h }) => <div style={{ height: h }} />;
