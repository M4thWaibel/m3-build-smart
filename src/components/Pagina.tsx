import type { ReactNode } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

/** Casca das páginas novas: cabeçalho fixo, conteúdo abaixo dele e rodapé. */
const Pagina = ({ children }: { children: ReactNode }) => (
  <div className="flex min-h-screen flex-col">
    <a
      href="#conteudo"
      className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded focus:bg-white focus:px-4 focus:py-3 focus:text-rotulo focus:font-medium focus:text-primary focus:shadow"
    >
      Pular para o conteúdo
    </a>
    <Header />
    <main id="conteudo" className="flex-1 pt-16 lg:pt-[84px]">
      {children}
    </main>
    <Footer />
  </div>
);

export default Pagina;
