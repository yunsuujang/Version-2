import Link from "next/link";
import { Download, Linkedin, Mail, Phone } from "@/components/Icons";
import { siteConfig } from "@/data/site";

export default function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div>
          <div className="brand footer-brand">
            <span className="brand-mark" aria-hidden="true">{siteConfig.initials}</span>
            <span className="brand-copy">
              <strong>{siteConfig.name}</strong>
              <span>{siteConfig.location}</span>
            </span>
          </div>
          <p className="footer-note">Urban planning, building energy and sustainability.</p>
        </div>

        <div className="footer-links">
          <Link href="/#work">Selected projects</Link>
          <Link href="/resume">Web resume</Link>
          <a href={siteConfig.resumeUrl} download><Download /> Resume PDF</a>
          <a href={`mailto:${siteConfig.email}`}><Mail /> Email</a>
          <a href={siteConfig.phones[0].href}><Phone /> {siteConfig.phones[0].label}</a>
          <a href={siteConfig.linkedin} target="_blank" rel="noreferrer"><Linkedin /> LinkedIn</a>
        </div>
      </div>
      <div className="container footer-bottom">
        <span>© {new Date().getFullYear()} {siteConfig.name}</span>
        <span>Built with Next.js · Deployed on Vercel</span>
      </div>
    </footer>
  );
}
