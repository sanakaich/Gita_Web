import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Blog from "./pages/Blog";
import Stories from "./pages/Stories";
import Sanskrit from "./pages/Sanskrit";
import NotFound from "./pages/NotFound";

import GitaChapter1Page from "./pages/Gita";
import SanskritCourse1 from "./pages/Sanskrit_Page";
import StoryPage from "./pages/Narshimha";


const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/stories" element={<Stories />} />
          <Route path="/sanskrit" element={<Sanskrit />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="/gita/:chapter" element={<GitaChapter1Page />} />
          <Route path="/sanskrit/:Course" element={<SanskritCourse1 />} />
          <Route path="/stories/:name" element={<StoryPage />} />

          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
