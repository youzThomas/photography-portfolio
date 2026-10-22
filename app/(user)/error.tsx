'use client';
export default function Error({ reset }: { error: Error; reset: () => void }) {
  return <div className="page-message"><h1>Unable to load this page</h1><p>Please try again in a moment.</p><button onClick={reset}>Try again</button></div>;
}
