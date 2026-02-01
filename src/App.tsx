import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import Home from "./pages/Home";
import ConstrucoesIndustriais from "./pages/ConstrucoesIndustriais";
import GalpaoIndustrial from "./pages/GalpaoIndustrial";
import PreMoldados from "./pages/PreMoldados";
import EstruturasMetalicas from "./pages/EstruturasMetalicas";
import TrabalheConosco from "./pages/TrabalheConosco";
import Fornecedores from "./pages/Fornecedores";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/construcoes-industriais" element={<ConstrucoesIndustriais />} />
          <Route path="/galpoes-industriais" element={<GalpaoIndustrial />} />
          <Route path="/pre-moldados" element={<PreMoldados />} />
          <Route path="/estruturas-metalicas" element={<EstruturasMetalicas />} />
          <Route path="/trabalhe-conosco" element={<TrabalheConosco />} />
          <Route path="/seja-fornecedor" element={<Fornecedores />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
