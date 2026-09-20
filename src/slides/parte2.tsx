import React from "react";
import { BENEFICIOS, COMPARACAO, CTA, IDENTIFICACAO, OFERTA, SOLUCAO } from "../conteudo";
import { NEWSREADER } from "../fonts";
import { COR } from "../tokens";
import { Moldura } from "../ui/Moldura";
import { Cartao, Espaco, Etiqueta, Texto, Titulo } from "../ui/blocos";
import { Rico } from "../ui/Rico";

const Marca: React.FC<{ cor: string; children: React.ReactNode }> = ({ cor, children }) => (
  <span style={{ borderBottom: `6px solid ${cor}`, background: `${cor}24`, color: COR.tinta }}>
    {children}
  </span>
);

export const Slide05Identificacao: React.FC = () => (
  <Moldura numero={5}>
    <Titulo texto={IDENTIFICACAO.titulo} tamanho={92} />
    <Espaco h={40} />
    <Texto texto={IDENTIFICACAO.texto} />
    <Espaco h={44} />
    <Cartao>
      <div style={{ fontSize: 50, lineHeight: 1.4, fontFamily: NEWSREADER, fontStyle: "italic" }}>
        {IDENTIFICACAO.antes}
        <Marca cor={COR.vermelho}>{IDENTIFICACAO.erro}</Marca>
        {IDENTIFICACAO.depois}
      </div>
      <div style={{ marginTop: 20, fontSize: 40, color: COR.verde, fontWeight: 800 }}>
        ✓ {IDENTIFICACAO.correcao}
      </div>
    </Cartao>
    <Espaco h={30} />
    <Texto texto={IDENTIFICACAO.legenda} tamanho={36} cor={COR.fraca} />
  </Moldura>
);

export const Slide06Solucao: React.FC = () => (
  <Moldura numero={6}>
    <Etiqueta texto={SOLUCAO.etiqueta} cor={COR.verde} />
    <div style={{ fontSize: 250, fontWeight: 800, color: COR.verde, lineHeight: 1.1, letterSpacing: -8 }}>
      {SOLUCAO.numero}
    </div>
    <Titulo texto={SOLUCAO.titulo} tamanho={76} destaque={COR.azulClaro} />
    <Espaco h={34} />
    <Texto texto={SOLUCAO.texto} tamanho={40} />
    <Espaco h={40} />
    <div style={{ display: "flex", gap: 16 }}>
      {SOLUCAO.competencias.map((c) => (
        <div key={c} style={{ flex: 1, padding: "20px 0", textAlign: "center", borderRadius: 20, background: COR.folha, border: `2px solid ${COR.azul}`, fontSize: 42, fontWeight: 800, color: COR.azulClaro }}>
          {c}
        </div>
      ))}
    </div>
  </Moldura>
);

export const Slide07Beneficios: React.FC = () => (
  <Moldura numero={7}>
    <Titulo texto={BENEFICIOS.titulo} tamanho={84} />
    <Espaco h={44} />
    {BENEFICIOS.itens.map((item) => (
      <div key={item} style={{ display: "flex", gap: 24, alignItems: "flex-start", marginBottom: 30 }}>
        <span style={{ color: COR.verde, fontSize: 52, fontWeight: 800, lineHeight: 1.1 }}>✓</span>
        <span style={{ fontSize: 46, lineHeight: 1.25, color: COR.suave }}>
          <Rico texto={item} destaque={COR.tinta} />
        </span>
      </div>
    ))}
  </Moldura>
);

const Celula: React.FC<{ texto: string; cor: string; negrito?: boolean }> = ({ texto, cor, negrito }) => (
  <div style={{ flex: 1, fontSize: 38, fontWeight: negrito ? 800 : 400, color: cor }}>{texto}</div>
);

export const Slide08Comparacao: React.FC = () => (
  <Moldura numero={8}>
    <Titulo texto={COMPARACAO.titulo} tamanho={76} />
    <Espaco h={40} />
    <div style={{ display: "flex", gap: 20, fontSize: 30, letterSpacing: 2, textTransform: "uppercase", marginBottom: 16 }}>
      <div style={{ flex: 0.6 }} />
      <Celula texto={COMPARACAO.colunas[0]} cor={COR.vermelho} negrito />
      <Celula texto={COMPARACAO.colunas[1]} cor={COR.verde} negrito />
    </div>
    {COMPARACAO.linhas.map((l) => (
      <div key={l.item} style={{ marginBottom: 16 }}>
        <Cartao>
          <div style={{ display: "flex", gap: 20, alignItems: "center" }}>
            <div style={{ flex: 0.6, fontSize: 30, color: COR.fraca, fontWeight: 700 }}>{l.item}</div>
            <Celula texto={l.a} cor={COR.suave} />
            <Celula texto={l.b} cor={COR.tinta} negrito />
          </div>
        </Cartao>
      </div>
    ))}
  </Moldura>
);

const Selo: React.FC<{ texto: string }> = ({ texto }) => (
  <div style={{ position: "absolute", top: -18, right: 30, padding: "8px 22px", borderRadius: 999, background: COR.azul, color: COR.papel, fontSize: 26, fontWeight: 800 }}>
    {texto}
  </div>
);

export const Slide09Oferta: React.FC = () => (
  <Moldura numero={9}>
    <Titulo texto={OFERTA.titulo} tamanho={84} />
    <Espaco h={34} />
    {OFERTA.planos.map((p) => (
      <div key={p.nome} style={{ marginBottom: 20, position: "relative" }}>
        <Cartao borda={p.destaque ? COR.azul : COR.regua} fundo={p.destaque ? "#122a52" : COR.folha}>
          <div style={{ fontSize: 30, color: COR.fraca, fontWeight: 700 }}>{p.nome}</div>
          <div style={{ fontSize: p.destaque ? 72 : 56, fontWeight: 800 }}>{p.preco}</div>
          <div style={{ fontSize: 30, color: COR.suave }}>{p.nota}</div>
        </Cartao>
        {p.destaque ? <Selo texto={OFERTA.selo} /> : null}
      </div>
    ))}
    <Espaco h={10} />
    <Texto texto={OFERTA.garantia} tamanho={36} />
  </Moldura>
);

export const Slide10Cta: React.FC = () => (
  <Moldura numero={10}>
    <Titulo texto={CTA.titulo} tamanho={96} />
    <Espaco h={36} />
    <Texto texto={CTA.texto} />
    <Espaco h={56} />
    <div style={{ padding: "36px 40px", borderRadius: 28, background: COR.azul, color: COR.papel, fontSize: 50, fontWeight: 800, textAlign: "center" }}>
      {CTA.botao}
    </div>
    <div style={{ marginTop: 26, textAlign: "center", fontSize: 44, fontWeight: 800, color: COR.azulClaro }}>
      ↑ {CTA.local}
    </div>
    <Espaco h={30} />
    <Texto texto={CTA.garantia} tamanho={34} cor={COR.fraca} />
  </Moldura>
);
