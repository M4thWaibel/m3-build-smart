import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import GalpaoIndustrial from "./pages/GalpaoIndustrial";
import PreMoldados from "./pages/PreMoldados";
import EstruturasMetalicas from "./pages/EstruturasMetalicas";
import Sobre from "./pages/Sobre";
import Fornecedores from "./pages/Fornecedores";
import TrabalheConosco from "./pages/TrabalheConosco";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/galpao-industrial" element={<GalpaoIndustrial />} />
          <Route path="/pre-moldados" element={<PreMoldados />} />
          <Route path="/estruturas-metalicas" element={<EstruturasMetalicas />} />
          <Route path="/sobre" element={<Sobre />} />
          <Route path="/fornecedores" element={<Fornecedores />} />
          <Route path="/trabalhe-conosco" element={<TrabalheConosco />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
