"use client";

import { Print } from "@/components/Icons";

export default function PrintButton() {
  return (
    <button className="button button-secondary print-button" type="button" onClick={() => window.print()}>
      <Print /> Print / Save as PDF
    </button>
  );
}
