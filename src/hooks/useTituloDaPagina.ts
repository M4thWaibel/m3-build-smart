import { useEffect } from "react";

const TITULO_PADRAO = "M3 Engenharia e Construções - Soluções em Construções Industriais";

/** Troca o título da aba enquanto a página estiver aberta e devolve o padrão ao sair. */
export const useTituloDaPagina = (titulo?: string) => {
  useEffect(() => {
    document.title = titulo ? `${titulo} | M3 Engenharia e Construções` : TITULO_PADRAO;
    return () => {
      document.title = TITULO_PADRAO;
    };
  }, [titulo]);
};
