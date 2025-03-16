
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import NotFound from "./pages/NotFound";
import Claims from "./pages/Claims";
import Policies from "./pages/Policies";
import Quotes from "./pages/Quotes";
import Transactions from "./pages/Transactions";
import Auth from "./pages/Auth";
import Dashboard from "./pages/Dashboard";
import CategoryDetail from "./pages/CategoryDetail";
import PolicyDetail from "./pages/PolicyDetail";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigate to="/auth" replace />} />
          <Route path="/auth" element={<Auth />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/category/:categoryId" element={<CategoryDetail />} />
          <Route path="/policy/:policyId" element={<PolicyDetail />} />
          <Route path="/claims" element={<Claims />} />
          <Route path="/policies" element={<Policies />} />
          <Route path="/quotes" element={<Quotes />} />
          <Route path="/transactions" element={<Transactions />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
