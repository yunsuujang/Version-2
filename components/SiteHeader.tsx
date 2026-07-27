"use client";

import Link from "next/link";
import { useState } from "react";
import { siteConfig } from "@/data/site";
import { Close, Menu } from "@/components/Icons";

const navItems = [
  { label: "Work", href: "/#work" },
  { label: "About", href: "/#about" },
  { label: "Skills", href: "/#skills" },
  { label: "Resume", href: "/resume" },
  { label: "Contact", href: "/#contact" },
];

export default function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="site-header">
      <div className="container header-inner">
        <Link className="brand" href="/" onClick={() => setOpen(false)} aria-label={`${siteConfig.name} home`}>
          <span className="brand-mark" aria-hidden="true">{siteConfig.initials}</span>
          <span className="brand-copy">
            <strong>{siteConfig.name}</strong>
            <span>{siteConfig.title}</span>
          </span>
        </Link>

        <nav className="desktop-nav" aria-label="Main navigation">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href}>{item.label}</Link>
          ))}
        </nav>

        <button
          className="menu-button"
          type="button"
          onClick={() => setOpen((value) => !value)}
          aria-expanded={open}
          aria-controls="mobile-navigation"
          aria-label={open ? "Close navigation" : "Open navigation"}
        >
          {open ? <Close /> : <Menu />}
        </button>
      </div>

      <div id="mobile-navigation" className={`mobile-nav ${open ? "is-open" : ""}`}>
        <nav className="container" aria-label="Mobile navigation">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} onClick={() => setOpen(false)}>{item.label}</Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
