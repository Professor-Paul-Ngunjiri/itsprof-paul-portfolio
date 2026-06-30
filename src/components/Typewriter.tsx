import { useEffect, useState } from "react";
import { site } from "@/lib/site";

export function Typewriter() {
  const words = site.titles;
  const [i, setI] = useState(0);
  const [text, setText] = useState("");
  const [del, setDel] = useState(false);

  useEffect(() => {
    const w = words[i % words.length];
    const speed = del ? 45 : 90;
    const t = setTimeout(() => {
      if (!del) {
        const next = w.slice(0, text.length + 1);
        setText(next);
        if (next === w) setTimeout(() => setDel(true), 1400);
      } else {
        const next = w.slice(0, text.length - 1);
        setText(next);
        if (next === "") {
          setDel(false);
          setI((p) => p + 1);
        }
      }
    }, speed);
    return () => clearTimeout(t);
  }, [text, del, i, words]);

  return (
    <span className="typewriter-stable text-gradient-gold">
      {text}
      <span className="cursor-blink" style={{ color: "oklch(0.85 0.18 80)" }}>|</span>
    </span>
  );
}
