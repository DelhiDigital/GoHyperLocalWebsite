"use client";

import { useEffect } from "react";

export default function SmoothScroll() {
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (!target) return;
      const link = target.closest("a") as HTMLAnchorElement | null;
      if (!link) return;

      const rawHref = link.getAttribute("href");
      if (!rawHref || !rawHref.startsWith("#") || rawHref === "#") return;

      const id = rawHref.slice(1);
      const el = document.getElementById(id);
      if (!el) return;

      e.preventDefault();
      el.scrollIntoView({ behavior: "smooth", block: "start" });
      history.replaceState(null, "", rawHref);
    };

    document.addEventListener("click", handler);
    return () => document.removeEventListener("click", handler);
  }, []);

  return null;
}
