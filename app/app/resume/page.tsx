import type { Metadata } from "next";
import Link from "next/link";
import PrintButton from "@/components/PrintButton";
import { Download, Linkedin, Mail, Phone } from "@/components/Icons";
import { projects } from "@/data/projects";
import { activities, education, experience, siteConfig, skillGroups } from "@/data/site";

export const metadata: Metadata = {
  title: "Resume",
  description: `Resume of ${siteConfig.name}, focused on urban planning, building energy and sustainability.`,
};

export default function ResumePage() {
  return (
    <main id="main-content" className="resume-page section-shell">
      <div className="container resume-toolbar">
        <Link className="back-link" href="/">← Back to portfolio</Link>
        <div className="resume-toolbar-actions">
          <a className="button button-secondary" href={siteConfig.resumeUrl} download>
            Download PDF <Download />
          </a>
          <PrintButton />
        </div>
      </div>

      <article className="container resume-sheet">
        <header className="resume-header">
          <div>
            <p className="eyebrow">Resume</p>
            <h1>{siteConfig.name}</h1>
            <p className="resume-title">{siteConfig.title}</p>
          </div>
          <div className="resume-contact">
            <span>{siteConfig.location}</span>
            <a href={`mailto:${siteConfig.email}`}><Mail /> {siteConfig.email}</a>
            {siteConfig.phones.map((phone) => (
              <a href={phone.href} key={phone.href}><Phone /> {phone.label}</a>
            ))}
            <a href={siteConfig.linkedin} target="_blank" rel="noreferrer"><Linkedin /> {siteConfig.linkedinLabel}</a>
          </div>
        </header>

        <section className="resume-summary">
          <h2>Profile</h2>
          <p>{siteConfig.about}</p>
        </section>

        <div className="resume-columns">
          <div>
            <section className="resume-section">
              <h2>Work experience</h2>
              {experience.map((item) => (
                <article className="resume-item" key={`${item.period}-${item.title}`}>
                  <div className="resume-item-heading">
                    <h3>{item.title}</h3>
                    <span>{item.period}</span>
                  </div>
                  <p className="timeline-org">{item.organization} · {item.location}</p>
                  <p>{item.description}</p>
                  <ul className="resume-bullets">
                    {item.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}
                  </ul>
                  {item.referenceLetter ? (
                    <a className="text-link compact-link" href={item.referenceLetter.href} download>
                      {item.referenceLetter.label} <Download />
                    </a>
                  ) : null}
                </article>
              ))}
            </section>

            <section className="resume-section">
              <h2>Selected projects</h2>
              {projects.slice(0, 4).map((project) => (
                <article className="resume-item" key={project.slug}>
                  <div className="resume-item-heading">
                    <h3><Link href={`/projects/${project.slug}`}>{project.shortTitle}</Link></h3>
                    <span>{project.year}</span>
                  </div>
                  <p>{project.summary}</p>
                </article>
              ))}
            </section>
          </div>

          <aside>
            <section className="resume-section">
              <h2>Education</h2>
              {education.map((item) => (
                <article className="resume-item" key={`${item.period}-${item.title}`}>
                  <div className="resume-item-heading">
                    <h3>{item.title}</h3>
                    <span>{item.period}</span>
                  </div>
                  <p className="timeline-org">{item.organization}</p>
                  <p>{item.description}</p>
                </article>
              ))}
            </section>

            <section className="resume-section">
              <h2>Skills</h2>
              {skillGroups.map((group) => (
                <div className="resume-skill-group" key={group.title}>
                  <h3>{group.title}</h3>
                  <p>{group.skills.join(" · ")}</p>
                </div>
              ))}
            </section>

            <section className="resume-section">
              <h2>Activities</h2>
              {activities.map((item) => (
                <article className="resume-item" key={item.title}>
                  <div className="resume-item-heading">
                    <h3>{item.title}</h3>
                    <span>{item.period}</span>
                  </div>
                  <p className="timeline-org">{item.organization}</p>
                  <p>{item.description}</p>
                </article>
              ))}
            </section>
          </aside>
        </div>
      </article>
    </main>
  );
}
