// onMouseEnter="showTooltip(150, 135, 'I am a circle!')" onmouseleave="hideTooltip()"

export const TooltipSvg = () => (
  <svg width="400" height="100" xmlns="http://www.w3.org/2000/svg" className="absolute top-[30px]">
    <g id="tooltip" visibility="hidden">
      <rect id="tooltip-bg" rx="4" ry="4" fill="#222" />
      <polygon id="tooltip-arrow" fill="#222" />
      <text id="tooltip-text" fill="white" font-size="13" font-family="sans-serif" dominant-baseline="middle" />
    </g>
  </svg>
)