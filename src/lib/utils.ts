import { clsx, type ClassValue } from "clsx";
import { extendTailwindMerge } from "tailwind-merge";

// Sem isto o twMerge lê os tamanhos de texto do tailwind.config (text-t1, text-botao...)
// como cor e descarta um deles quando a mesma classe também traz text-primary, text-white...
const twMerge = extendTailwindMerge({
  extend: {
    classGroups: {
      "font-size": [
        {
          text: [
            "display", "display-m", "t1", "t1-m", "t2", "t2-m", "t3",
            "numero", "numero-m", "grande", "texto", "pequeno", "rotulo", "botao", "cota",
          ],
        },
      ],
    },
  },
});

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
