import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, Download, FileText } from "@/components/Icons";
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
      <section className="project-detail-hero section-shell">
        <div className="container">
          <Link className="back-link" href="/#work">← Back to projects</Link>

          <div className="project-detail-heading">
            <div>
              <p className="eyebrow">{project.eyebrow} · {project.year}</p>
              <h1>{project.title}</h1>
            </div>
            <div className="project-detail-summary">
              <p>{project.summary}</p>
              {project.report?.href ? (
                <a className="button button-primary" href={project.report.href} download>
                  {project.report.label} <Download />
                </a>
              ) : project.report?.restricted ? (
                <span className="report-restricted"><FileText /> {project.report.label}</span>
              ) : null}
            </div>
          </div>

          <div className="project-detail-image">
            <Image src={project.image} alt={project.imageAlt} width={1600} height={1000} priority />
          </div>
        </div>
      </section>

      <section className="project-detail-body section-shell">
        <div className="container project-detail-grid">
          <div className="project-detail-overview">
            <p className="eyebrow">Project overview</p>
            <p className="lead-paragraph">{project.overview}</p>
          </div>

          <div className="project-detail-evidence">
            <section>
              <p className="project-information-label">Key results</p>
              <div className="project-detail-results">
                {project.stats.map((stat) => (
                  <div key={stat.label}>
                    <strong>{stat.value}</strong>
                    <span>{stat.label}</span>
                  </div>
                ))}
              </div>
            </section>

            <section>
              <p className="project-information-label">Tech stack</p>
              <div className="tag-list detail-tags">
                {project.tools.map((tool) => <span key={tool}>{tool}</span>)}
              </div>
            </section>
          </div>
        </div>
      </section>

      <section className="next-project section-shell">
        <div className="container next-project-panel">
          <div>
            <p className="eyebrow">Next project</p>
            <h2>{nextProject.shortTitle}</h2>
          </div>
          <Link className="button button-primary" href={`/projects/${nextProject.slug}`}>
            View project <ArrowRight />
          </Link>
        </div>
      </section>
    </main>
  );
}
