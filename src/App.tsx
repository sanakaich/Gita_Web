import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Index from "./pages/Index";
import GitaRedirect from "./pages/Gita";
import GitaChapterPage from "./pages/GitaChapterPage";
import SanskritLanding from "./pages/SanskritLanding";
import SanskritModulePage from "./pages/SanskritModulePage";
import StoriesLanding from "./pages/StoriesLanding";
import StoryDetailPage from "./pages/StoryDetailPage";
import BlogPage from "./pages/Blog";
import BlogPostPage from "./pages/BlogPost";
import NotFound from "./pages/NotFound";
import ScrollToTop from "./components/ScrollToTop";
import ChatBot from "./components/ChatBot";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />

      <BrowserRouter>
        <ScrollToTop />
        <ChatBot />
        <Routes>

          {/* Homepage */}
          <Route path="/" element={<Index />} />

          {/* Gita — /gita redirects to chapter 1; /gita/chapter/:id is the dynamic page */}
          <Route path="/gita" element={<GitaRedirect />} />
          <Route path="/gita/chapter/:id" element={<GitaChapterPage />} />

          {/* Sanskrit Learning */}
          <Route path="/sanskrit" element={<SanskritLanding />} />
          <Route path="/sanskrit/module/:id" element={<SanskritModulePage />} />

          {/* Mythological Stories */}
          <Route path="/stories" element={<StoriesLanding />} />
          <Route path="/stories/:slug" element={<StoryDetailPage />} />

          {/* Blog */}
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/blog/:slug" element={<BlogPostPage />} />

          {/* Catch All */}
          <Route path="*" element={<NotFound />} />

        </Routes>
      </BrowserRouter>

    </TooltipProvider>
  </QueryClientProvider>
);

export default App;