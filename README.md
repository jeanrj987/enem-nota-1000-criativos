# Carrossel Nota 1000 AI (Remotion)

Carrossel de vendas de 10 slides, com a copy em `src/conteudo.ts` e a identidade "V2 dark" do app.

```bash
npm install
npm run dev                          # Remotion Studio (slide-01..10 e tiktok-01..10)
npm run render:carrossel             # feed 4:5 em out/carrossel/ e TikTok 9:16 em out/tiktok/
npm run render:carrossel -- tiktok   # só um formato (feed | tiktok)
```

- **Instagram e Facebook**: `out/carrossel/` (1080×1350).
- **TikTok (modo foto)**: `out/tiktok/` (1080×1920), com margens seguras para legenda e botões da plataforma.
- **Legendas e hashtags por rede**: `legendas.md`.
- Preços e garantia espelham a landing do app; se mudarem lá, atualizar `src/conteudo.ts`.

## Vídeo vertical (Reels, TikTok e Shorts)

```bash
npm run render:video   # out/video/nota-640-vertical.mp4 (1080x1920, 30 fps, 40 s, sem áudio)
```

Uma cena por slide, com os elementos entrando em sequência e fade entre as cenas. Reaproveita os mesmos componentes dos PNGs (`src/Video.tsx`); a duração de cada cena fica em `src/slides/lista.ts`.

## Vídeo curto com música (21,5 s)

```bash
npm run render:video-curto              # out/video/nota-640-curto.mp4 (com música)
npm run render:video-curto-sem-musica   # out/video/nota-640-curto-sem-musica.mp4
npm run gerar:musica                    # regera public/musica-fundo.mp3 (trilha original por síntese)
```

Seis cenas (gancho, dor, solução, benefícios, oferta e CTA) pensadas para narração por cima. Roteiro de locução e tempos em `roteiro-locucao.md`. As cenas e suas durações ficam em `CENAS_CURTAS` (`src/slides/lista.ts`).
