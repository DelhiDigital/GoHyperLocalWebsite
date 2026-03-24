"use client";

import { useReveal } from "@/hooks/useReveal";

type RevealProps = {
  children: React.ReactNode;
  className?: string;
  animation?: "up" | "left" | "right" | "scale" | "stagger";
  delay?: string;
};

export default function Reveal({
  children,
  className = "",
  animation = "up",
  delay,
}: RevealProps) {
  const { ref, visible } = useReveal(0.12);

  const animClass =
    animation === "left"
      ? "reveal-left"
      : animation === "right"
      ? "reveal-right"
      : animation === "scale"
      ? "reveal-scale"
      : animation === "stagger"
      ? "stagger-children"
      : "reveal";

  return (
    <div
      ref={ref}
      className={`${animClass} ${visible ? "visible" : ""} ${delay || ""} ${className}`}
    >
      {children}
    </div>
  );
}
