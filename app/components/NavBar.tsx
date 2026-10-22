'use client';
import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const links = [{ href: '/', label: 'Home' }, { href: '/works', label: 'Works' }, { href: '/about', label: 'About' }];
export default function NavBar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const button = useRef<HTMLButtonElement>(null);
  useEffect(() => setOpen(false), [pathname]);
  return <nav className="site-nav" aria-label="Main navigation" onKeyDown={event => {
    if (event.key === 'Escape' && open) { setOpen(false); button.current?.focus(); }
  }}>
    <Link className="site-brand" href="/" onClick={() => setOpen(false)}>Thomas You</Link>
    <button ref={button} className="menu-toggle" aria-expanded={open} aria-controls="navigation-links" aria-label={open ? 'Close menu' : 'Open menu'} onClick={() => setOpen(!open)}>
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.25" aria-hidden="true"><path d={open ? 'M6 6l12 12M6 18L18 6' : 'M4 8h16M4 16h16'}/></svg>
    </button>
    <ul id="navigation-links" className={`nav-links ${open ? 'is-open' : ''}`}>
      {links.map(({href, label}) => <li key={href}><Link href={href} aria-current={pathname === href ? 'page' : undefined} onClick={() => setOpen(false)}>{label}</Link></li>)}
    </ul>
  </nav>;
}
