import { loadFont as carregarKarla } from "@remotion/google-fonts/Karla";
import { loadFont as carregarNewsreader } from "@remotion/google-fonts/Newsreader";

export const { fontFamily: KARLA } = carregarKarla("normal", {
  weights: ["400", "700", "800"],
  subsets: ["latin", "latin-ext"],
});

export const { fontFamily: NEWSREADER } = carregarNewsreader("italic", {
  weights: ["500"],
  subsets: ["latin", "latin-ext"],
});
