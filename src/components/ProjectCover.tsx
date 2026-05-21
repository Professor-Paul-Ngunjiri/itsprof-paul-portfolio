import {
  Palette, Shapes, Layout, Code2, MousePointer2, Camera, Video, Film,
  Megaphone, Hash, LineChart, Package, PenTool, Printer, Sparkles, FileText,
} from "lucide-react";

const map = {
  Palette, Shapes, Layout, Code2, MousePointer2, Camera, Video, Film,
  Megaphone, Hash, LineChart, Package, PenTool, Printer, Sparkles, FileText,
} as const;

const categoryHue: Record<string, number> = {
  Branding: 25,
  Creative: 35,
  Digital: 250,
  "Web Dev": 200,
  "UI/UX": 265,
  Photography: 80,
  Video: 290,
  Marketing: 145,
  Growth: 145,
  Media: 290,
  Editorial: 215,
  Print: 12,
  Packaging: 320,
  Social: 195,
};

type Props = {
  title: string;
  category: string;
  icon?: keyof typeof map;
  hue?: number;
  className?: string;
};

export function ProjectCover({ title, category, icon, hue, className = "" }: Props) {
  const Icon = icon ? map[icon] : Sparkles;
  const h = hue ?? categoryHue[category] ?? 220;
  const bg = `linear-gradient(135deg, oklch(0.42 0.18 ${h}), oklch(0.28 0.14 ${(h + 30) % 360}))`;
  const glow = `radial-gradient(ellipse at 30% 20%, oklch(0.7 0.22 ${(h + 40) % 360} / 0.55), transparent 60%)`;
  return (
    <div className={`relative overflow-hidden ${className}`} style={{ background: bg }}>
      <div className="absolute inset-0" style={{ background: glow }} />
      <div
        className="absolute inset-0 opacity-[0.08]"
        style={{
          backgroundImage:
            "linear-gradient(oklch(1 0 0 / 0.6) 1px, transparent 1px), linear-gradient(90deg, oklch(1 0 0 / 0.6) 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />
      <Icon className="absolute right-6 top-6 h-10 w-10 text-white/40" strokeWidth={1.5} />
      <div className="absolute -right-8 -bottom-10 opacity-[0.12]">
        <Icon className="h-56 w-56 text-white" strokeWidth={1} />
      </div>
      <div className="absolute inset-0 flex flex-col justify-end p-6">
        <div className="inline-flex w-fit rounded-full bg-white/15 backdrop-blur px-3 py-1 text-[10px] font-mono uppercase tracking-widest text-white">
          {category}
        </div>
        <h3 className="mt-3 font-display text-xl font-bold text-white leading-tight drop-shadow">{title}</h3>
      </div>
    </div>
  );
}
