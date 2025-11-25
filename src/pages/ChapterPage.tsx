import React from "react";
import { Link, useParams } from "react-router-dom";

/**
 * Dynamic Chapter page
 * - Works for any number of chapters
 * - Derives a story link and PPT URL from the chapter id
 * - Falls back to a sensible default if no explicit mapping is provided
 *
 * Usage:
 *  <Route path="/chapter/:id" element={<ChapterPage />} />
 */

// Optional explicit mapping for chapters you want to override
const CHAPTER_CONTENT: Record<
  string,
  { title?: string; storyPath?: string; pptPublicUrl?: string }
> = {
  // Example override for chapter 1
  // "1": { title: "Narasimha — Chapter 1", storyPath: "/stories/narasimha", pptPublicUrl: "https://.../chapter-1.pptx" },
};

export default function ChapterPage() {
  const { id } = useParams();
  const chapterId = id || "1";

  // If you provided an explicit entry in CHAPTER_CONTENT, use it
  const explicit = CHAPTER_CONTENT[chapterId];

  // Derived defaults when explicit content is not present
  const title = explicit?.title ?? `Chapter ${chapterId}`;

  // By convention this component assumes your story route follows `/stories/<slug>`
  // If you have a different pattern, update the derived value or add an entry
  // to CHAPTER_CONTENT for that chapter.
  const storyPath = explicit?.storyPath ?? `/stories/chapter-${chapterId}`;

  // By convention the PPT file is expected at `/ppts/chapter-<id>.pptx` (publicly accessible)
  // You can change this to any public URL (Google Drive/OneDrive direct link, S3, etc.)
  const pptPublicUrl = explicit?.pptPublicUrl ?? `${window.location.origin}/ppts/chapter-${chapterId}.pptx`;

  // Office viewer embed URL (works with a public URL to a .ppt or .pptx)
  // If your PPT is hosted on Google Drive, you must use a direct-download or Office viewer compatible link.
  const officeEmbed = `https://view.officeapps.live.com/op/embed.aspx?src=${encodeURIComponent(pptPublicUrl)}`;

  return (
    <div className="max-w-4xl mx-auto px-6 py-10">
      <h1 className="text-4xl font-heading font-bold mb-4 text-primary">{title}</h1>

      <div className="mb-6">
        <Link to={storyPath} className="text-xl underline hover:text-primary">
          Open story for {title}
        </Link>
      </div>

      <div className="mb-2 text-sm text-muted-foreground">Presentation</div>

      <div className="w-full h-[640px] border rounded-lg shadow-soft overflow-hidden">
        {/* Try to embed with Office viewer. If the file is not public or Office viewer can't render it,
            the iframe will be blank or show an error. In that case host a public copy or provide a
            direct-download link and add it to CHAPTER_CONTENT. */}
        <iframe
          title={`Chapter ${chapterId} PPT`}
          src={officeEmbed}
          width="100%"
          height="100%"
          frameBorder="0"
        />
      </div>

      <div className="mt-4 text-sm">
        If the presentation does not load, make sure the PPTX is publicly accessible at:
        <div className="break-all mt-1 font-mono text-xs">{pptPublicUrl}</div>
      </div>
    </div>
  );
}
