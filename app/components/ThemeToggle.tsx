export default function ThemeToggle() {
  return <button className="theme-toggle" data-theme-toggle aria-label="Switch to dark mode" title="Switch to dark mode">
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M20.5 13A8.5 8.5 0 0 1 11 3.5 8.5 8.5 0 1 0 20.5 13Z"/>
    </svg>
  </button>;
}
