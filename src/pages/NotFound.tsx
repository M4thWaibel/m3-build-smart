import { Link } from "react-router-dom";
import Pagina from "@/components/Pagina";
import { Button } from "@/components/ui/button";
import { useTituloDaPagina } from "@/hooks/useTituloDaPagina";

const NotFound = () => {
  useTituloDaPagina("Página não encontrada");

  return (
    <Pagina>
      <section className="moldura py-24 lg:py-40">
        <p className="font-display text-numero-m font-medium text-primary lg:text-numero">404</p>
        <h1 className="mt-4 font-display text-t1-m font-semibold lg:text-t1">Esta página não existe</h1>
        <p className="mt-4 max-w-[560px] text-texto text-aco lg:text-grande">
          O endereço pode ter mudado ou foi digitado com algum erro. As obras e os serviços da M3 continuam no site.
        </p>
        <div className="mt-8 flex flex-col gap-4 sm:flex-row">
          <Button asChild size="m3">
            <Link to="/">Ir para o início</Link>
          </Button>
          <Button asChild variant="contorno" size="m3">
            <Link to="/obras">Ver as obras</Link>
          </Button>
        </div>
      </section>
    </Pagina>
  );
};

export default NotFound;
