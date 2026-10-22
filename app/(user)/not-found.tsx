import Link from 'next/link';
export default function NotFound() {
  return <div className="page-message"><h1>Page not found</h1><p>This page is no longer available.</p><Link href="/">Return home</Link></div>;
}
