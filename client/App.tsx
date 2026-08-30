import "./global.css";

import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { HashRouter, Routes, Route, useLocation, useNavigationType } from "react-router-dom";
import { useEffect, useRef } from "react";
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

function ScrollRestoration() {
  const location = useLocation();
  const navigationType = useNavigationType();
  const positions = useRef(new Map<string, number>());

  useEffect(() => {
    window.history.scrollRestoration = "manual";
    return () => {
      window.history.scrollRestoration = "auto";
    };
  }, []);

  useEffect(() => {
    const savedPosition = positions.current.get(location.key);
    const frame = window.requestAnimationFrame(() => {
      if (location.state?.scrollTo) {
        document.getElementById(location.state.scrollTo)?.scrollIntoView();
      } else if (navigationType === "POP" && savedPosition !== undefined) {
        window.scrollTo(0, savedPosition);
      } else {
        window.scrollTo(0, 0);
      }
    });

    return () => {
      window.cancelAnimationFrame(frame);
      positions.current.set(location.key, window.scrollY);
    };
  }, [location.key, location.state, navigationType]);

  return null;
}

export const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <HashRouter>
        <ScrollRestoration />
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
      </HashRouter>
    </TooltipProvider>
  </QueryClientProvider>
);
