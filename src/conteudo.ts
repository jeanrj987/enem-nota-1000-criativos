// Toda a copy do carrossel. Fontes: Vault/01 (persona, oferta, preços) e
// frameworks da pasta Copy (headline de perda/dor, especificidade, comparação,
// garantia, prova por mecanismo). Preços e prazos espelham a landing `/`.

export const CAPA = {
  etiqueta: "ENEM · Redação",
  titulo: "Uma nota **640** na redação pode custar a sua **vaga na federal.**",
  apoio: "Você estudou o ano inteiro. Não deixe a redação decidir o resultado.",
};

export const PESO = {
  etiqueta: "O peso da redação",
  numero: "3 · 4 · 5",
  texto: "é o peso da redação em quase todas as federais.",
  de: "780",
  para: "710",
  legenda: "Só **120 pontos** a menos na redação podem derrubar a sua média ponderada.",
};

export const CURSINHO = {
  titulo: "Feedback que chega **tarde** não ensina.",
  passos: [
    { rotulo: "1", texto: "Você entrega a redação", cor: "tinta" },
    { rotulo: "2", texto: "Espera **15 a 21 dias**", cor: "vermelho" },
    { rotulo: "3", texto: "Recebe: “melhore a coesão”", cor: "fraca" },
  ],
  fecho: "Sem dizer **onde** nem **como** reescrever. E com limite de 2 a 4 redações por mês.",
};

export const COMPETENCIA5 = {
  titulo: "Cada elemento esquecido custa **40 pontos.**",
  apoio: "A Competência 5 vale 200 pontos e exige os 5 elementos:",
  elementos: [
    { nome: "Agente", dica: "Quem fará?" },
    { nome: "Ação", dica: "O que será feito?" },
    { nome: "Meio", dica: "Como será feito?" },
    { nome: "Efeito", dica: "Para que servirá?" },
    { nome: "Detalhamento", dica: "Aprofunda um dos quatro" },
  ],
  fecho: "5 elementos = **200** · 4 = **160** · 3 = **120**",
};

export const IDENTIFICACAO = {
  titulo: "Travado entre **600 e 760?** O problema não é esforço.",
  texto: "Sem feedback rápido e específico, você repete os mesmos desvios sem perceber.",
  antes: "Os candidatos ",
  erro: "tem",
  depois: " direito à vaga.",
  correcao: "têm",
  legenda: "Um acento que a banca não perdoa, e que ninguém te mostrou.",
};

export const SOLUCAO = {
  etiqueta: "A solução",
  numero: "< 10s",
  titulo: "Correção completa pelas **5 competências do INEP.**",
  texto: "Envie a redação e receba nota de 0 a 200 em cada competência, ainda com o texto fresco na cabeça.",
  competencias: ["C1", "C2", "C3", "C4", "C5"],
};

export const BENEFICIOS = {
  titulo: "O que você recebe em **cada correção:**",
  itens: [
    "Nota de 0 a 200 em **cada competência**",
    "Erros marcados **linha por linha**, com o porquê",
    "Auditoria dos **5 elementos** da Competência 5",
    "Versão **nota 1000** reescrita a partir das suas ideias",
    "Treino **ilimitado** e evolução em gráficos",
  ],
};

export const COMPARACAO = {
  titulo: "Cursinho **×** Nota 1000 AI",
  colunas: ["Cursinho", "Nota 1000 AI"],
  linhas: [
    { item: "Retorno", a: "15 a 21 dias", b: "Menos de 10 s" },
    { item: "Volume", a: "2 a 4 por mês", b: "Ilimitado" },
    { item: "Feedback", a: "“Melhore a coesão”", b: "Linha por linha" },
    { item: "Reescrita", a: "Não tem", b: "Versão nota 1000" },
  ],
};

export const OFERTA = {
  titulo: "Uma **fração** do preço de um cursinho.",
  planos: [
    { nome: "Anual · até o ENEM", preco: "12x R$ 14,90", nota: "ou R$ 147 à vista", destaque: true },
    { nome: "Semestral", preco: "R$ 89", nota: "à vista · 6 meses", destaque: false },
    { nome: "Mensal", preco: "R$ 29,90", nota: "por mês · cancele quando quiser", destaque: false },
  ],
  selo: "Melhor valor por mês",
  garantia: "**Garantia de 7 dias:** não gostou, devolvemos 100% do valor.",
};

export const CTA = {
  titulo: "Corrija a sua próxima redação em **10 segundos.**",
  texto: "O ENEM não adia. Cada semana sem feedback é uma redação a menos treinada.",
  botao: "Garantir Acesso ao Avaliador",
  local: "Link na bio",
  garantia: "Teste por 7 dias. Se não gostar, 100% de reembolso.",
};
