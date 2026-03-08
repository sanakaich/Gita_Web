/**
 * Gita.tsx — redirect to the dynamic chapter page.
 * All rendering is handled by GitaChapterPage.
 */
import { Navigate } from "react-router-dom";
export default function GitaRedirect() {
  return <Navigate to="/gita/chapter/1" replace />;
}