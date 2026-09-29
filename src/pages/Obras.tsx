import Pagina from "@/components/Pagina";
import ObraCartao from "@/components/ObraCartao";
import SecaoContato from "@/components/SecaoContato";
import { aberturaDasObras, obras } from "@/data/obras";
import { useTituloDaPagina } from "@/hooks/useTituloDaPagina";

// Todas as obras, com os mesmos cartões da Home
const Obras = () => {
  useTituloDaPagina("Obras realizadas");

  return (
    <Pagina>
      <section className="pb-[72px] pt-10 lg:pb-[120px] lg:pt-[72px]">
        <div className="moldura">
          <div className="flex flex-col gap-3 lg:flex-row lg:items-end lg:justify-between lg:gap-16">
            <h1 className="font-display text-t1-m font-semibold lg:text-t1">Obras realizadas</h1>
            <p className="text-texto text-aco lg:max-w-[470px]">{aberturaDasObras()}</p>
          </div>
          <div className="mt-8 grid gap-9 md:grid-cols-2 md:gap-6 lg:mt-14 lg:grid-cols-3 lg:gap-y-14">
            {obras.map((obra) => (
              <ObraCartao key={obra.slug} obra={obra} />
            ))}
          </div>
        </div>
      </section>
      <SecaoContato idDoBotao="cta-merlin2" />
    </Pagina>
  );
};

export default Obras;
