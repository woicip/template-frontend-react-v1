import { useState, useCallback } from "react";

// ─── Types ────────────────────────────────────────────────────────────────────

type Placement = "top" | "bottom" | "left" | "right";

interface TooltipAnchor {
  x: number;
  y: number;
  placement?: Placement;
}

interface TooltipState {
  anchor: TooltipAnchor;
  text: string;
}

type ShapeType = "circle" | "rect" | "polygon";

interface BaseShape {
  id: number;
  type: ShapeType;
  fill: string;
  label: string;
  placement?: Placement;
}

interface CircleShape extends BaseShape {
  type: "circle";
  cx: number;
  cy: number;
  r: number;
}

interface RectShape extends BaseShape {
  type: "rect";
  x: number;
  y: number;
  w: number;
  h: number;
  rx?: number;
}

interface PolygonShape extends BaseShape {
  type: "polygon";
  points: string;
  anchorX: number;
  anchorY: number;
}

type Shape = CircleShape | RectShape | PolygonShape;

// ─── Constants ────────────────────────────────────────────────────────────────

const PADDING = 10;
const ARROW_SIZE = 8;
const FONT_SIZE = 12;
const APPROX_CHAR_WIDTH = 7;
const BOX_HEIGHT = FONT_SIZE + PADDING * 2;

// ─── Helpers ──────────────────────────────────────────────────────────────────

function estimateWidth(text: string): number {
  return text.length * APPROX_CHAR_WIDTH + PADDING * 2;
}

function getAnchor(shape: Shape): TooltipAnchor {
  const placement = shape.placement ?? "top";

  if (shape.type === "circle") {
    return {
      x: shape.cx,
      y: placement === "top" ? shape.cy - shape.r : shape.cy + shape.r,
      placement,
    };
  }
  if (shape.type === "rect") {
    return {
      x: shape.x + shape.w / 2,
      y: placement === "top" ? shape.y : shape.y + shape.h,
      placement,
    };
  }
  // polygon
  return { x: shape.anchorX, y: shape.anchorY, placement };
}

// ─── SVG Tooltip ─────────────────────────────────────────────────────────────

interface TooltipProps {
  anchor: TooltipAnchor;
  text: string;
}

function SVGTooltip({ anchor, text }: TooltipProps) {
  const { x, y, placement = "top" } = anchor;
  const bw = estimateWidth(text);
  const bh = BOX_HEIGHT;

  let boxX: number, boxY: number, arrowPoints: string;

  switch (placement) {
    case "bottom":
      boxX = x - bw / 2;
      boxY = y + ARROW_SIZE;
      arrowPoints = `${x},${y} ${x - ARROW_SIZE},${boxY} ${x + ARROW_SIZE},${boxY}`;
      break;
    case "left":
      boxX = x - bw - ARROW_SIZE;
      boxY = y - bh / 2;
      arrowPoints = `${x},${y} ${boxX + bw},${y - ARROW_SIZE} ${boxX + bw},${y + ARROW_SIZE}`;
      break;
    case "right":
      boxX = x + ARROW_SIZE;
      boxY = y - bh / 2;
      arrowPoints = `${x},${y} ${boxX},${y - ARROW_SIZE} ${boxX},${y + ARROW_SIZE}`;
      break;
    default: // top
      boxX = x - bw / 2;
      boxY = y - bh - ARROW_SIZE;
      arrowPoints = `${x},${y} ${x - ARROW_SIZE},${boxY + bh} ${x + ARROW_SIZE},${boxY + bh}`;
  }

  return (
    <g style={{ pointerEvents: "none" }}>
      {/* Drop shadow filter */}
      <defs>
        <filter id="shadow" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0" dy="2" stdDeviation="3" floodColor="#000" floodOpacity="0.35" />
        </filter>
      </defs>

      <rect
        x={boxX}
        y={boxY}
        width={bw}
        height={bh}
        rx={5}
        ry={5}
        fill="#0f172a"
        filter="url(#shadow)"
      />
      <rect
        x={boxX}
        y={boxY}
        width={bw}
        height={bh}
        rx={5}
        ry={5}
        fill="none"
        stroke="rgba(148,163,184,0.15)"
        strokeWidth={1}
      />
      <polygon points={arrowPoints} fill="#0f172a" />
      <text
        x={boxX + PADDING}
        y={boxY + bh / 2}
        fill="#e2e8f0"
        fontSize={FONT_SIZE}
        fontFamily="'IBM Plex Mono', monospace"
        dominantBaseline="middle"
        letterSpacing="0.4"
      >
        {text}
      </text>
    </g>
  );
}

// ─── Shape Renderer ───────────────────────────────────────────────────────────

interface ShapeRendererProps {
  shape: Shape;
  isHovered: boolean;
  onEnter: (shape: Shape) => void;
  onLeave: () => void;
}

function ShapeRenderer({ shape, isHovered, onEnter, onLeave }: ShapeRendererProps) {
  const handlers = {
    onMouseEnter: () => onEnter(shape),
    onMouseLeave: onLeave,
  };

  const opacity = isHovered ? 1 : 0.82;
  const scale = isHovered ? 1.06 : 1;

  const sharedStyle: React.CSSProperties = {
    cursor: "pointer",
    opacity,
    transform: `scale(${scale})`,
    transition: "opacity 0.15s ease, transform 0.15s ease",
    transformOrigin: "center",
  };

  if (shape.type === "circle") {
    return (
      <circle
        cx={shape.cx}
        cy={shape.cy}
        r={shape.r}
        fill={shape.fill}
        style={sharedStyle}
        {...handlers}
      />
    );
  }
  if (shape.type === "rect") {
    return (
      <rect
        x={shape.x}
        y={shape.y}
        width={shape.w}
        height={shape.h}
        rx={shape.rx ?? 4}
        fill={shape.fill}
        style={sharedStyle}
        {...handlers}
      />
    );
  }
  // polygon
  return (
    <polygon
      points={shape.points}
      fill={shape.fill}
      style={sharedStyle}
      {...handlers}
    />
  );
}

// ─── Demo Shapes ─────────────────────────────────────────────────────────────

const SHAPES: Shape[] = [
  { id: 1, type: "circle", cx: 90,  cy: 145, r: 38, fill: "#818cf8", label: "Indigo Circle",   placement: "top"    },
  { id: 2, type: "rect",   x: 168,  y: 107,  w: 76, h: 76, rx: 8, fill: "#fb923c", label: "Orange Square",  placement: "top"    },
  { id: 3, type: "polygon",points: "370,100 338,168 402,168", anchorX: 370, anchorY: 168, fill: "#34d399", label: "Emerald Triangle", placement: "bottom" },
  { id: 4, type: "circle", cx: 480, cy: 145, r: 30, fill: "#f472b6", label: "Pink Circle",     placement: "right"  },
  { id: 5, type: "rect",   x: 530,  y: 107,  w: 32, h: 76, rx: 16, fill: "#38bdf8", label: "Sky Pill",      placement: "top"    },
];

// ─── Main Component ───────────────────────────────────────────────────────────

export default function SVGTooltipDemo() {
  const [tooltip, setTooltip] = useState<TooltipState | null>(null);
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  const handleEnter = useCallback((shape: Shape) => {
    setHoveredId(shape.id);
    setTooltip({ anchor: getAnchor(shape), text: shape.label });
  }, []);

  const handleLeave = useCallback(() => {
    setHoveredId(null);
    setTooltip(null);
  }, []);

  return (
    <div className="min-h-screen bg-slate-950 flex flex-col items-center justify-center px-6 py-16 font-mono">
      {/* Header */}
      <div className="mb-10 text-center">
        <p className="text-xs tracking-[0.25em] text-slate-500 uppercase mb-3">
          Component
        </p>
        <h1 className="text-2xl font-semibold text-slate-100 tracking-tight">
          SVG Anchored Tooltip
        </h1>
        <p className="text-slate-500 text-sm mt-2">
          Hover any shape — tooltip snaps to its anchor edge
        </p>
      </div>

      {/* SVG Card */}
      <div className="rounded-2xl border border-slate-800 bg-slate-900/60 backdrop-blur-sm p-6 shadow-2xl shadow-black/40">
        <svg
          width={620}
          height={290}
          style={{ overflow: "visible", display: "block" }}
        >
          {/* Subtle dot grid */}
          <defs>
            <pattern id="dots" width="24" height="24" patternUnits="userSpaceOnUse">
              <circle cx="1" cy="1" r="1" fill="rgba(148,163,184,0.07)" />
            </pattern>
          </defs>
          <rect width={620} height={290} fill="url(#dots)" rx={10} />

          {/* Connector line */}
          <line
            x1={90} y1={145} x2={530} y2={145}
            stroke="rgba(148,163,184,0.07)"
            strokeWidth={1}
            strokeDasharray="5 5"
          />

          {/* Shapes */}
          {SHAPES.map((shape) => (
            <ShapeRenderer
              key={shape.id}
              shape={shape}
              isHovered={hoveredId === shape.id}
              onEnter={handleEnter}
              onLeave={handleLeave}
            />
          ))}

          {/* Active tooltip rendered last (on top) */}
          {tooltip && (
            <SVGTooltip anchor={tooltip.anchor} text={tooltip.text} />
          )}
        </svg>
      </div>

      {/* Placement badges */}
      <div className="flex gap-3 mt-8 flex-wrap justify-center">
        {(["top", "bottom", "left", "right"] as Placement[]).map((p) => (
          <span
            key={p}
            className="px-3 py-1 rounded-full text-xs border border-slate-700 text-slate-400 tracking-widest uppercase"
          >
            {p}
          </span>
        ))}
      </div>

      <p className="text-slate-700 text-xs mt-8 tracking-[0.2em] uppercase">
        React · TypeScript · SVG · Tailwind
      </p>
    </div>
  );
}
