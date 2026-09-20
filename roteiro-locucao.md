# Roteiro de locução: vídeo curto (21,5 s)

Cada fala foi escrita para caber no tempo da cena, a cerca de 2,5 palavras por segundo. Grave em ritmo natural e corte o silêncio da ponta de cada trecho. A música fica em volume baixo (30%), então a voz passa por cima sem precisar de ajuste.

| Cena | Tempo | Na tela | Locução |
|---|---|---|---|
| 1 | 0:00 a 0:03 | "Uma nota 640 na redação pode custar a sua vaga na federal" | "Uma nota 640 na redação pode custar a sua vaga." |
| 2 | 0:03 a 0:07 | Cursinho: espera de 15 a 21 dias e "melhore a coesão" | "O cursinho leva de 15 a 21 dias para devolver, e vem só um 'melhore a coesão'." |
| 3 | 0:07 a 0:10,5 | "< 10s", 5 competências do INEP | "O Nota 1000 AI corrige em menos de 10 segundos, pelas 5 competências do INEP." |
| 4 | 0:10,5 a 0:14,5 | Lista de benefícios | "Erros marcados linha por linha e uma versão nota 1000 do seu próprio texto." |
| 5 | 0:14,5 a 0:17,5 | Planos e garantia | "12x de 14,90, com 7 dias de garantia." |
| 6 | 0:17,5 a 0:21,5 | Botão e "Link na bio" | "Corrija a sua próxima redação agora. Link na bio." |

## Como montar

1. **Sem música (`nota-640-curto-sem-musica.mp4`)**: use no CapCut ou no editor de sua preferência, se quiser colocar sua própria trilha ou controlar o volume.
2. **Com música (`nota-640-curto.mp4`)**: já traz a trilha com fade de entrada e de saída. Basta colocar a locução em uma faixa acima.
3. Se a locução ficar mais longa que uma cena, alongue a cena em `CENAS_CURTAS` (`src/slides/lista.ts`, valores em quadros a 30 fps) e renderize de novo.
4. A trilha é original, gerada por síntese (`npm run gerar:musica`), então não há direitos de terceiros. Para usar outra música, substitua `public/musica-fundo.mp3`.
