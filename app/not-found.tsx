import Link from "next/link";

export default function NotFound() {
  return (
    <main id="main-content" className="not-found section-shell">
      <div className="container">
        <p className="eyebrow">404</p>
        <h1>Page not found.</h1>
        <p>The page may have moved or the link may be incomplete.</p>
        <Link className="button button-primary" href="/">Return home</Link>
      </div>
    </main>
  );
}
