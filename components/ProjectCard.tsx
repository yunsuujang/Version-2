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
          width={1200}
          height={800}
          sizes={featured ? "(max-width: 900px) 100vw, 100vw" : "(max-width: 900px) 100vw, 50vw"}
        />
      </Link>
      <div className="project-card-content">
        <div className="project-card-meta">
          <span>{project.eyebrow}</span>
          <span>{project.year}</span>
        </div>
        <h3><Link href={`/projects/${project.slug}`}>{project.shortTitle}</Link></h3>
        <p>{project.summary}</p>
        <div className="tag-list" aria-label="Project tools">
          {project.tools.slice(0, featured ? 6 : 5).map((tool) => <span key={tool}>{tool}</span>)}
        </div>
        <div className="project-card-actions">
          <Link className="text-link" href={`/projects/${project.slug}`}>
            View case study <ArrowUpRight />
          </Link>
          {project.report?.href ? (
            <a className="text-link text-link-muted" href={project.report.href} download>
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
