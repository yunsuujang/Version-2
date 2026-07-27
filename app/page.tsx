import Image from "next/image";
import Link from "next/link";
import ProjectCard from "@/components/ProjectCard";
import SectionHeading from "@/components/SectionHeading";
import { ArrowRight, ArrowUpRight, Download, Linkedin, Mail, Phone } from "@/components/Icons";
import { projects } from "@/data/projects";
import { activities, education, experience, profileStats, siteConfig, skillGroups } from "@/data/site";

export default function Home() {
  return (
    <main id="main-content">
      <section className="hero section-shell">
        <div className="container hero-grid">
          <div className="hero-copy">
            <p className="eyebrow">{siteConfig.heroEyebrow}</p>
            <h1><span>{siteConfig.heroTitle}</span></h1>
            <p className="hero-description">{siteConfig.heroDescription}</p>
            <div className="hero-actions">
              <Link className="button button-primary" href="#work">View selected work <ArrowRight /></Link>
              <a className="button button-secondary" href={siteConfig.resumeUrl} download>Download resume <Download /></a>
            </div>
            <div className="hero-links" aria-label="Contact links">
              <a href={`mailto:${siteConfig.email}`}><Mail /> {siteConfig.email}</a>
              {siteConfig.phones.map((phone) => (
                <a href={phone.href} key={phone.href}><Phone /> {phone.label}</a>
              ))}
              <a href={siteConfig.linkedin} target="_blank" rel="noreferrer"><Linkedin /> LinkedIn</a>
            </div>
          </div>

          <figure className="hero-portrait">
            <Image
              src="/images/yunsu-jang.jpg"
              alt="Professional portrait of Yunsu Jang"
              width={600}
              height={750}
              priority
              sizes="(max-width: 980px) 70vw, 420px"
            />
            <figcaption>
              <span>Based in</span>
              <strong>{siteConfig.location}</strong>
            </figcaption>
          </figure>
        </div>

        <div className="container hero-stats">
          {profileStats.map((stat) => (
            <div key={stat.label} className="hero-stat">
              <strong>{stat.value}</strong>
              <span>{stat.label}</span>
            </div>
          ))}
        </div>
      </section>

      <section id="work" className="section-shell work-section">
        <div className="container">
          <SectionHeading
            eyebrow="Selected projects"
            title="Planning, energy and sustainability across urban and building scales."
            description="Each case study summarises the research question, methods, evidence and practical implications. Public reports can be downloaded directly from the project cards or detail pages."
          />
          <div className="project-list">
            {projects.map((project, index) => (
              <ProjectCard project={project} featured={index === 0} key={project.slug} />
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="section-shell about-section">
        <div className="container about-grid">
          <div>
            <p className="eyebrow">About</p>
            <h2>Connecting urban systems with building performance.</h2>
          </div>
          <div className="about-copy">
            <p>{siteConfig.about}</p>
            <blockquote>“{siteConfig.aboutQuote}”</blockquote>
          </div>
        </div>
      </section>

      <section id="skills" className="section-shell skills-section">
        <div className="container">
          <SectionHeading
            eyebrow="Capabilities"
            title="A cross-scale technical and research toolkit."
            description="My skills combine spatial planning, building-energy simulation, engineering analysis and stakeholder-based research."
          />
          <div className="skills-grid">
            {skillGroups.map((group, index) => (
              <article className="skill-card" key={group.title}>
                <span className="skill-number">0{index + 1}</span>
                <h3>{group.title}</h3>
                <ul>
                  {group.skills.map((skill) => <li key={skill}>{skill}</li>)}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-shell timeline-section">
        <div className="container timeline-grid">
          <div>
            <p className="eyebrow">Education</p>
            <div className="timeline-list">
              {education.map((item) => (
                <article className="timeline-item" key={`${item.period}-${item.title}`}>
                  <span>{item.period}</span>
                  <div>
                    <h3>{item.title}</h3>
                    <p className="timeline-org">{item.organization}</p>
                    <p>{item.description}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>

          <div>
            <p className="eyebrow">Work experience</p>
            <div className="timeline-list">
              {experience.map((item) => (
                <article className="timeline-item" key={`${item.period}-${item.title}`}>
                  <span>{item.period}</span>
                  <div>
                    <h3>{item.title}</h3>
                    <p className="timeline-org">{item.organization} · {item.location}</p>
                    <p>{item.description}</p>
                    {item.referenceLetter ? (
                      <a className="text-link compact-link" href={item.referenceLetter.href} download>
                        {item.referenceLetter.label} <Download />
                      </a>
                    ) : null}
                  </div>
                </article>
              ))}
              {activities.map((item) => (
                <article className="timeline-item" key={`${item.period}-${item.title}`}>
                  <span>{item.period}</span>
                  <div>
                    <h3>{item.title}</h3>
                    <p className="timeline-org">{item.organization}</p>
                    <p>{item.description}</p>
                  </div>
                </article>
              ))}
            </div>
            <Link className="text-link timeline-link" href="/resume">Open web resume <ArrowUpRight /></Link>
          </div>
        </div>
      </section>

      <section id="contact" className="section-shell contact-section">
        <div className="container contact-panel">
          <div>
            <p className="eyebrow">Contact</p>
            <h2>Let&apos;s discuss urban planning, building energy or sustainable transformation.</h2>
          </div>
          <div className="contact-actions">
            <a className="button button-light" href={`mailto:${siteConfig.email}`}>Send an email <Mail /></a>
            <a className="button button-ghost-light" href={siteConfig.linkedin} target="_blank" rel="noreferrer">LinkedIn <Linkedin /></a>
            <a className="button button-ghost-light" href={siteConfig.phones[0].href}>Call in the Netherlands <Phone /></a>
          </div>
        </div>
      </section>
    </main>
  );
}
