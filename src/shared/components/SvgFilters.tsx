/**
 * Reusable SVG filter definitions (noise/grain).
 * Render once at the app level; reference filters by ID in any component.
 *
 * Usage: <div style={{ filter: 'url(#grain)' }} />
 */
export function SvgFilters() {
  return (
    <svg
      aria-hidden="true"
      style={{
        position: 'absolute',
        width: 0,
        height: 0,
        overflow: 'hidden',
        pointerEvents: 'none',
      }}
    >
      <defs>
        {/* Fine grain / noise texture */}
        <filter id="grain" x="0%" y="0%" width="100%" height="100%">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.65"
            numOctaves="3"
            stitchTiles="stitch"
            result="noise"
          />
          <feColorMatrix
            type="saturate"
            values="0"
            in="noise"
            result="mono"
          />
          <feBlend in="SourceGraphic" in2="mono" mode="multiply" />
        </filter>

        {/* Lighter grain overlay — good for hero backgrounds */}
        <filter id="grain-light" x="0%" y="0%" width="100%" height="100%">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.8"
            numOctaves="4"
            stitchTiles="stitch"
            result="noise"
          />
          <feColorMatrix
            type="saturate"
            values="0"
            in="noise"
            result="mono"
          />
          <feBlend in="SourceGraphic" in2="mono" mode="soft-light" />
        </filter>
      </defs>
    </svg>
  )
}
