import '../../styles/globals.css';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import ThemeToggle from '../components/ThemeToggle';
import PageTransition from '../components/PageTransition';

export const metadata = {
  title: 'Halcyon | Thomas You Photography',
  icons: { icon: [{ url: '/favicon.svg', type: 'image/svg+xml' }] },
  description: 'Landscape, lifestyle, and sport photography by Thomas You (Halcyon), based between Chapel Hill and Guangzhou.',
};

const themeScript = `(function(){try{var t=localStorage.getItem('halcyon-theme');document.documentElement.dataset.theme=t==='dark'?'dark':'light'}catch(e){document.documentElement.dataset.theme='light'}document.addEventListener('click',function(e){var b=e.target.closest('[data-theme-toggle]');if(!b)return;var d=document.documentElement.dataset.theme!=='dark';document.documentElement.dataset.theme=d?'dark':'light';try{localStorage.setItem('halcyon-theme',d?'dark':'light')}catch(e){}var l=d?'Switch to light mode':'Switch to dark mode';b.setAttribute('aria-label',l);b.setAttribute('title',l)})})()`;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" data-theme="light" suppressHydrationWarning>
      <head><script dangerouslySetInnerHTML={{ __html: themeScript }} /></head>
      <body className="portfolio">
        <a className="skip-link" href="#main">Skip to content</a>
        <NavBar />
        <div className="site-content">
          <main id="main" tabIndex={-1}><PageTransition>{children}</PageTransition></main>
          <Footer />
        </div>
        <ThemeToggle />
      </body>
    </html>
  );
}
