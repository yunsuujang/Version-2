import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, ArrowUpRight, Download, FileText } from "@/components/Icons";
import { getProject, projects } from "@/data/projects";

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);

  if (!project) return {};

  return {
    title: project.shortTitle,
    description: project.summary,
  };
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = getProject(slug);

  if (!project) notFound();

  const currentIndex = projects.findIndex((item) => item.slug === project.slug);
  const nextProject = projects[(currentIndex + 1) % projects.length];

  return (
    <main id="main-content" className="project-page">
      <section className="project-hero section-shell">
        <div className="container">
          <Link className="back-link" href="/#work">← Back to selected projects</Link>
          <div className="project-title-grid">
            <div>
              <p className="eyebrow">{project.eyebrow}</p>
              <h1>{project.title}</h1>
            </div>
            <div className="project-intro">
              <p>{project.summary}</p>
              <div className="project-year">{project.year}</div>
            </div>
          </div>
          <div className="project-hero-image">
            <Image src={project.image} alt={project.imageAlt} width={1600} height={1000} priority />
          </div>
        </div>
      </section>

      <section className="project-content section-shell">
        <div className="container project-content-grid">
          <aside className="project-sidebar">
            <p className="eyebrow">Methods & tools</p>
            <div className="tag-list vertical-tags">
              {project.tools.map((tool) => <span key={tool}>{tool}</span>)}
            </div>

            {project.report?.href ? (
              <a className="button button-primary sidebar-download" href={project.report.href} download>
                {project.report.label} <Download />
              </a>
            ) : project.report?.restricted ? (
              <div className="restricted-report-box">
                <FileText />
                <div>
                  <strong>{project.report.label}</strong>
                  <p>This document is not published because it contains confidential original material.</p>
                </div>
              </div>
            ) : null}

            {project.externalLinks?.map((link) => (
              <a className="text-link" key={link.href} href={link.href} target="_blank" rel="noreferrer">
                {link.label} <ArrowUpRight />
              </a>
            ))}
          </aside>

          <div className="project-article">
            <section>
              <p className="eyebrow">Overview</p>
              <p className="lead-paragraph">{project.overview}</p>
            </section>

            <div className="case-stats">
              {project.stats.map((stat) => (
                <div key={stat.label}>
                  <strong>{stat.value}</strong>
                  <span>{stat.label}</span>
                </div>
              ))}
            </div>

            <section>
              <p className="eyebrow">The challenge</p>
              <h2>Defining the decision before selecting the method.</h2>
              <p>{project.challenge}</p>
            </section>

            <section>
              <p className="eyebrow">Approach</p>
              <h2>A transparent, staged workflow.</h2>
              <ol className="numbered-list">
                {project.approach.map((item, index) => (
                  <li key={item}>
                    <span>{String(index + 1).padStart(2, "0")}</span>
                    <p>{item}</p>
                  </li>
                ))}
              </ol>
            </section>

            <section>
              <p className="eyebrow">Outcomes</p>
              <h2>Results translated into practical next steps.</h2>
              <ul className="outcome-list">
                {project.outcomes.map((item) => <li key={item}>{item}</li>)}
              </ul>
            </section>

            <section className="reflection-box">
              <p className="eyebrow">Reflection</p>
              <p>{project.reflection}</p>
            </section>
          </div>
        </div>
      </section>

      <section className="next-project section-shell">
        <div className="container next-project-panel">
          <div>
            <p className="eyebrow">Next case study</p>
            <h2>{nextProject.shortTitle}</h2>
          </div>
          <Link className="button button-primary" href={`/projects/${nextProject.slug}`}>View project <ArrowRight /></Link>
        </div>
      </section>
    </main>
  );
}
