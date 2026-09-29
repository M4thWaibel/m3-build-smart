import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import Home from "./pages/Home";
import PaginaServico from "./pages/PaginaServico";
import { servicos } from "./data/servicos";
import TrabalheConosco from "./pages/TrabalheConosco";
import Fornecedores from "./pages/Fornecedores";
import Obras from "./pages/Obras";
import Obra from "./pages/Obra";
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
          {Object.values(servicos).map((servico) => (
            <Route key={servico.caminho} path={servico.caminho} element={<PaginaServico servico={servico} />} />
          ))}
          <Route path="/trabalhe-conosco" element={<TrabalheConosco />} />
          <Route path="/seja-fornecedor" element={<Fornecedores />} />
          <Route path="/obras" element={<Obras />} />
          <Route path="/obras/:slug" element={<Obra />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
