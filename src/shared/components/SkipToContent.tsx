const skipLinkStyles: React.CSSProperties = {
  position: 'absolute',
  top: '-100%',
  left: '16px',
  zIndex: 9999,
  padding: '12px 24px',
  background: '#000',
  color: '#fff',
  fontSize: '0.875rem',
  fontWeight: 600,
  letterSpacing: '0.02em',
  textDecoration: 'none',
  borderRadius: '0 0 6px 6px',
  transition: 'top 0.15s ease',
  outline: 'none',
}

const skipLinkFocusStyles: React.CSSProperties = {
  top: '0',
}

export function SkipToContent() {
  return (
    <a
      href="#main-content"
      style={skipLinkStyles}
      onFocus={(e) => {
        Object.assign(e.currentTarget.style, skipLinkFocusStyles)
      }}
      onBlur={(e) => {
        e.currentTarget.style.top = '-100%'
      }}
    >
      Skip to content
    </a>
  )
}
