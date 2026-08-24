import "./global.css";

import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "@/components/Layout";
import Index from "./pages/Index";
import EmanuelVigelandMuseum from "./pages/EmanuelVigelandMuseum";
import PayoutPartner from "./pages/PayoutPartner";
import SIMInnlandet from "./pages/SIMInnlandet";
import TjonnasOgNorvald from "./pages/TjonnasOgNorvald";
import FeaturedProjects from "./components/FeaturedProjects";
import OmMeg from "./pages/OmMeg";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

export const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/prosjekter" element={<FeaturedProjects />} />
            <Route
              path="/prosjekter/emanuel-vigeland-museum"
              element={<EmanuelVigelandMuseum />}
            />
            <Route path="/prosjekter/payoutpartner" element={<PayoutPartner />} />
            <Route path="/prosjekter/siminnlandet" element={<SIMInnlandet />} />
            <Route
              path="/prosjekter/tjonnas-og-norvald"
              element={<TjonnasOgNorvald />}
            />
            <Route path="/om-meg" element={<OmMeg />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);
