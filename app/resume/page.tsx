import type { Metadata } from "next";
import Link from "next/link";
import { Download, ArrowUpRight } from "@/components/Icons";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = {
  title: "Resume",
  description: `Resume of ${siteConfig.name}.`,
};

export default function ResumePage() {
  return (
    <main id="main-content" className="resume-page section-shell">
      <div className="container resume-toolbar">
        <Link className="back-link" href="/">← Back to portfolio</Link>
        <div className="resume-toolbar-actions">
          <a
            className="button button-secondary"
            href={siteConfig.resumeUrl}
            target="_blank"
            rel="noreferrer"
          >
            Open PDF <ArrowUpRight />
          </a>
          <a className="button button-primary" href={siteConfig.resumeUrl} download>
            Download PDF <Download />
          </a>
        </div>
      </div>

      <section className="container resume-document" aria-label={`${siteConfig.name} resume PDF`}>
        <object
          className="resume-pdf-viewer"
          data={`${siteConfig.resumeUrl}#view=FitH`}
          type="application/pdf"
          aria-label={`${siteConfig.name} resume`}
        >
          <div className="resume-pdf-fallback">
            <h1>Yunsu Jang — Resume</h1>
            <p>Your browser cannot display the PDF directly.</p>
            <a className="button button-primary" href={siteConfig.resumeUrl} target="_blank" rel="noreferrer">
              Open resume PDF <ArrowUpRight />
            </a>
          </div>
        </object>
      </section>
    </main>
  );
}
