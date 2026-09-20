import React from "react";
import { COR } from "../tokens";

type Props = {
  texto: string;
  // Cor aplicada aos trechos entre **duplo asterisco**.
  destaque?: string;
};

// Permite destacar palavras dentro de uma frase sem quebrar em vários <span>.
export const Rico: React.FC<Props> = ({ texto, destaque = COR.azulClaro }) => (
  <>
    {texto.split("**").map((trecho, i) =>
      i % 2 === 1 ? (
        <span key={i} style={{ color: destaque, fontWeight: 800 }}>
          {trecho}
        </span>
      ) : (
        <React.Fragment key={i}>{trecho}</React.Fragment>
      ),
    )}
  </>
);
