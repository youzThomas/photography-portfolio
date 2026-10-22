export default function Footer() {
  return <footer className="site-footer">
    <p>© {new Date().getFullYear()} Thomas You</p>
    <div className="social-links">
      <a href="https://www.instagram.com/halcyonyau/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
        <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.25" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r=".75" fill="currentColor" stroke="none"/></svg>
      </a>
      <a href="https://www.xiaohongshu.com/user/profile/5d1f642e0000000016013996" target="_blank" rel="noopener noreferrer" aria-label="Xiaohongshu">
        <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M12 6v14M3 4.5c3-1 6-.5 9 1.5 3-2 6-2.5 9-1.5v14c-3-1-6-.5-9 1.5-3-2-6-2.5-9-1.5Z"/></svg>
      </a>
    </div>
  </footer>;
}
