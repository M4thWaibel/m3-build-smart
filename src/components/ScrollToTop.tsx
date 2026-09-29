import { useEffect } from "react";
import { useLocation, useNavigationType } from "react-router-dom";

// Seções da Home antiga que ainda podem chegar por link externo (Instagram, anúncios)
const SECOES_ANTIGAS: Record<string, string> = {
    portfolio: "obras",
    sobre: "fabrica",
    diferenciais: "fabrica",
};

// Posição de rolagem de cada entrada do histórico, para o Voltar devolver a pessoa onde ela estava
const posicoes = new Map<string, number>();

// Sem animação: o html tem scroll-behavior: smooth, e trocar de página não deve deslizar.
// Não usa behavior: "instant", que navegadores mais antigos rejeitam com erro.
const pularPara = (top: number) => {
    const html = document.documentElement;
    html.style.scrollBehavior = "auto";
    window.scrollTo(0, top);
    html.style.scrollBehavior = "";
};

const secaoDoHash = (hash: string) => {
    if (!hash) return null;
    let id = hash.slice(1);
    try {
        id = decodeURIComponent(id);
    } catch {
        // hash malformado (ex.: /#100%): segue com o texto cru
    }
    return document.getElementById(SECOES_ANTIGAS[id] ?? id);
};

// Ao trocar de página, volta ao topo; se o link aponta para uma seção (/#obras), vai até ela;
// no Voltar/Avançar, restaura a posição guardada.
const ScrollToTop = () => {
    const { pathname, hash, key } = useLocation();
    const tipo = useNavigationType();

    useEffect(() => {
        if ("scrollRestoration" in window.history) window.history.scrollRestoration = "manual";
    }, []);

    useEffect(() => {
        const guardar = () => posicoes.set(key, window.scrollY);
        window.addEventListener("scroll", guardar, { passive: true });
        return () => window.removeEventListener("scroll", guardar);
    }, [key]);

    // A chave da navegação entra nas dependências para o mesmo link funcionar de novo depois de rolar
    useEffect(() => {
        const guardada = posicoes.get(key);
        if (tipo === "POP" && guardada !== undefined) {
            pularPara(guardada);
            return;
        }
        const secao = secaoDoHash(hash);
        if (secao) {
            secao.scrollIntoView();
            return;
        }
        pularPara(0);
    }, [pathname, hash, key, tipo]);

    return null;
};

export default ScrollToTop;
