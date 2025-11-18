import { useEffect, useState } from "react";
import {  useNavigate } from "react-router-dom";

const HeroSection = () => {
  const navigate = useNavigate();

  const shlokLines = [
    "कर्मण्येवाधिकारस्ते मा फलेषु कदाचन।",
    "मा कर्मफलहेतुर्भूर्मा ते सङ्गोऽस्त्वकर्मणि॥",
  ];

  // typed text for each line
  const [displayedLines, setDisplayedLines] = useState(["", ""]);
  const [lineIndex, setLineIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);

  // finished typing flag
  const [done, setDone] = useState(false);

  // typing speed controls (ms)
  const charDelay = 50; // time between chars
  const linePause = 500; // pause after each line
  const finalPause = 600; // pause before showing translation

  useEffect(() => {
    if (lineIndex >= shlokLines.length) {
      // all lines typed
      const t = setTimeout(() => setDone(true), finalPause);
      return () => clearTimeout(t);
    }

    const currentLine = shlokLines[lineIndex];

    if (charIndex < currentLine.length) {
      const t = setTimeout(() => {
        setDisplayedLines(prev => {
          const copy = [...prev];
          copy[lineIndex] = currentLine.slice(0, charIndex + 1);
          return copy;
        });
        setCharIndex(prev => prev + 1);
      }, charDelay);

      return () => clearTimeout(t);
    } else {
      // finished current line, move to next after pause
      const t = setTimeout(() => {
        setLineIndex(prev => prev + 1);
        setCharIndex(0);
      }, linePause);

      return () => clearTimeout(t);
    }
  }, [charIndex, lineIndex]);

  // determine whether cursor should show (cursor after last typed char in current active line)
  const showCursor =
    !done &&
    (lineIndex < shlokLines.length) &&
    // show cursor if still typing this line OR if finished typing this line but next line not started yet
    (charIndex < shlokLines[lineIndex] || charIndex === shlokLines[lineIndex]?.length);

  return (
    <section className="w-full max-w-7xl mx-auto px-6 py-3">
      <div className="flex justify-center">
          {/* Changed pb-20 to pb-8 here to decrease bottom padding */}
          <div className="rounded-lg pt-10 px-20 pb-8 min-h-[400px] max-w-2xl w-full bg-transparent">
          <div className="text-center space-y-6">
            {/* Line 1 */}
            <p className="text-5xl font-sanskrit font-semibold leading-relaxed inline-block "
            style={{ color: "#F6DCA9" }}
            >
              {displayedLines[0]}
              {/* cursor placed right after line 0 while it's the active line */}
              {showCursor && lineIndex === 0 && (
                <span className="ml-1 inline-block animate-blink">|</span>
              )}
            </p>

            {/* Line 2 */}
            <p className="text-4xl font-sanskrit font-semibold text-primary leading-relaxed inline-block">
              {displayedLines[1]}
              {/* cursor placed for line 1 */}
              {showCursor && lineIndex === 1 && (
                <span className="ml-1 inline-block animate-blink">|</span>
              )}
            </p>

            {/* Reference */}
            <p className="text-sm font-heading text-muted-foreground italic pt-4 border-t border-border mt-6">
              Chapter 2, Verse 47
            </p>

            {/* Meaning fades in after typing is done */}
            <p
              className={`text-base font-heading text-white leading-relaxed transition-opacity duration-700 ${
                done ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-2"
              }`}
              style={{ transitionProperty: "opacity, transform" }}
            >
              You have the right to perform your duty, but not to the fruits thereof.
              Never consider yourself to be the cause of the results, nor be attached to inaction.
            </p>
            <button
            className="px-6 py-3 rounded-lg text-lg font-heading font-semibold 
            bg-primary text-background 
            hover:bg-accent transition-smooth shadow-soft"
            onClick={() => navigate("/gita/1")}
            >
            Start Now
            </button>

          </div>
        </div>
      </div>

      {/* local styles for the blinking cursor */}
      <style jsx>{`
        .animate-blink {
          animation: blink 1s step-end infinite;
        }
        @keyframes blink {
          50% {
            opacity: 0;
          }
        }
      `}</style>
    </section>
  );
};

export default HeroSection;