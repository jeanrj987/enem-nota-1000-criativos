// Exporta os 10 slides como PNG em out/carrossel/ (1080x1350).
import { execFileSync } from "node:child_process";
import { mkdirSync } from "node:fs";

const TOTAL_SLIDES = 10;
mkdirSync("out/carrossel", { recursive: true });

for (let n = 1; n <= TOTAL_SLIDES; n++) {
  const id = `slide-${String(n).padStart(2, "0")}`;
  console.log(`Renderizando ${id}...`);
  execFileSync(
    "npx",
    ["remotion", "still", "src/index.ts", id, `out/carrossel/${id}.png`],
    { stdio: "inherit", shell: true },
  );
}
