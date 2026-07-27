import Image from "next/image";
import Link from "next/link";
import type { Project } from "@/data/projects";
import { ArrowUpRight, Download, FileText } from "@/components/Icons";

export default function ProjectCard({ project, featured = false }: { project: Project; featured?: boolean }) {
  return (
    <article className={`project-card ${featured ? "featured" : ""}`}>
      <Link href={`/projects/${project.slug}`} className="project-image-link" aria-label={`View ${project.shortTitle}`}>
        <Image
          className="project-image"
          src={project.image}
          alt={project.imageAlt}
          width={1600}
          height={1000}
          sizes={featured ? "(max-width: 1000px) 100vw, 58vw" : "(max-width: 1000px) 100vw, 44vw"}
        />
      </Link>

      <div className="project-card-content">
        <div className="project-card-meta">
          <span>{project.eyebrow}</span>
          <span>{project.year}</span>
        </div>

        <h3><Link href={`/projects/${project.slug}`}>{project.shortTitle}</Link></h3>
        <p className="project-summary">{project.summary}</p>

        <div className="project-information-grid">
          <section className="project-information-block" aria-labelledby={`${project.slug}-results`}>
            <p className="project-information-label" id={`${project.slug}-results`}>Key results</p>
            <div className="project-result-list">
              {project.stats.map((stat) => (
                <div className="project-result" key={stat.label}>
                  <strong>{stat.value}</strong>
                  <span>{stat.label}</span>
                </div>
              ))}
            </div>
          </section>

          <section className="project-information-block" aria-labelledby={`${project.slug}-tools`}>
            <p className="project-information-label" id={`${project.slug}-tools`}>Tech stack</p>
            <div className="tag-list">
              {project.tools.map((tool) => <span key={tool}>{tool}</span>)}
            </div>
          </section>
        </div>

        <div className="project-card-actions">
          <Link className="button button-secondary button-small" href={`/projects/${project.slug}`}>
            Project overview <ArrowUpRight />
          </Link>
          {project.report?.href ? (
            <a className="button button-primary button-small" href={project.report.href} download>
              {project.report.label} <Download />
            </a>
          ) : project.report?.restricted ? (
            <span className="report-restricted"><FileText /> {project.report.label}</span>
          ) : null}
        </div>
      </div>
    </article>
  );
}
