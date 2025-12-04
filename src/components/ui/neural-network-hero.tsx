"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

// Register GSAP plugins
if (typeof window !== "undefined") {
  gsap.registerPlugin(useGSAP);
}

// ===================== HERO =====================
interface HeroProps {
  title: string;
  description: string;
  badgeText?: string;
  badgeLabel?: string;
  ctaButtons?: Array<{ text: string; href: string; primary?: boolean }>;
  microDetails?: Array<string>;
}

export default function Hero({
  title,
  description,
  badgeText = "Custom Development",
  badgeLabel = "New",
  ctaButtons = [
    { text: "Get started", href: "#contact", primary: true },
    { text: "View services", href: "#services" },
  ],
  microDetails = ["Verified Scenarios", "Instant Deployment", "Expert Support"],
}: HeroProps) {
  const sectionRef = useRef<HTMLElement | null>(null);
  const headerRef = useRef<HTMLHeadingElement | null>(null);
  const paraRef = useRef<HTMLParagraphElement | null>(null);
  const ctaRef = useRef<HTMLDivElement | null>(null);
  const badgeRef = useRef<HTMLDivElement | null>(null);
  const microRef = useRef<HTMLUListElement | null>(null);
  const microItemRefs = useRef<(HTMLLIElement | null)[]>([]);
  const accentLineRef = useRef<HTMLDivElement | null>(null);

  useGSAP(
    () => {
      if (!headerRef.current) return;

      // Initial states
      gsap.set(
        [headerRef.current, paraRef.current, ctaRef.current, badgeRef.current],
        {
          autoAlpha: 0,
          y: 40,
        },
      );

      if (accentLineRef.current) {
        gsap.set(accentLineRef.current, { scaleX: 0, transformOrigin: "left" });
      }

      const microItems = microItemRefs.current.filter(Boolean);
      if (microItems.length > 0) {
        gsap.set(microItems, { autoAlpha: 0, y: 16 });
      }

      // Animation timeline with dramatic easing
      const tl = gsap.timeline({
        defaults: { ease: "expo.out" },
      });

      if (badgeRef.current) {
        tl.to(badgeRef.current, { autoAlpha: 1, y: 0, duration: 0.8 }, 0.2);
      }

      tl.to(headerRef.current, { autoAlpha: 1, y: 0, duration: 1.2 }, 0.3);

      if (accentLineRef.current) {
        tl.to(
          accentLineRef.current,
          { scaleX: 1, duration: 0.8, ease: "power2.inOut" },
          0.6,
        );
      }

      if (paraRef.current) {
        tl.to(paraRef.current, { autoAlpha: 1, y: 0, duration: 1 }, 0.5);
      }

      if (ctaRef.current) {
        tl.to(ctaRef.current, { autoAlpha: 1, y: 0, duration: 0.8 }, 0.7);
      }

      if (microItems.length > 0) {
        tl.to(
          microItems,
          { autoAlpha: 1, y: 0, duration: 0.6, stagger: 0.08 },
          0.9,
        );
      }
    },
    { scope: sectionRef },
  );

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen w-full overflow-hidden text-foreground"
    >
      {/* Decorative gradient orb - hidden on mobile for performance */}
      <div
        className="hidden sm:block absolute top-1/4 -right-32 w-[500px] h-[500px] bg-gradient-to-br from-blue-400/20 via-cyan-300/10 to-transparent rounded-full blur-3xl pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="hidden sm:block absolute bottom-1/4 -left-32 w-[400px] h-[400px] bg-gradient-to-tr from-blue-500/15 via-indigo-400/10 to-transparent rounded-full blur-3xl pointer-events-none"
        aria-hidden="true"
      />

      <div className="relative z-10 mx-auto flex max-w-7xl flex-col items-start gap-6 px-5 pb-20 pt-28 sm:gap-8 sm:pt-40 sm:px-6 md:px-12 lg:px-20">
        {/* Badge */}
        <div
          ref={badgeRef}
          className="inline-flex items-center gap-2 rounded-full border border-primary/8 bg-white/60 px-3 py-1.5 backdrop-blur-md shadow-sm"
        >
          <span className="text-[9px] sm:text-[10px] font-semibold uppercase tracking-[0.1em] text-blue-600 bg-blue-500/10 px-2 py-0.5 rounded-full">
            {badgeLabel}
          </span>
          <span className="text-[11px] sm:text-xs font-medium tracking-tight text-muted-foreground">
            {badgeText}
          </span>
        </div>

        {/* Main headline with Satoshi font */}
        <div className="relative">
          <h1
            ref={headerRef}
            className="max-w-4xl text-left text-[2rem] font-bold leading-[1.1] tracking-[-0.02em] text-foreground sm:text-5xl md:text-6xl lg:text-7xl"
            style={{ fontFamily: "Satoshi, Inter, system-ui, sans-serif" }}
          >
            {title}
          </h1>
          {/* Accent underline */}
          <div
            ref={accentLineRef}
            className="absolute -bottom-2 sm:-bottom-3 left-0 h-0.5 sm:h-1 w-16 sm:w-24 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full"
            aria-hidden="true"
          />
        </div>

        {/* Description */}
        <p
          ref={paraRef}
          className="max-w-2xl text-left text-base font-normal leading-relaxed text-muted-foreground sm:text-lg md:text-xl"
        >
          {description}
        </p>

        {/* CTA Buttons */}
        <div
          ref={ctaRef}
          className="flex flex-col sm:flex-row w-full sm:w-auto gap-3 sm:gap-4 pt-2"
        >
          {ctaButtons.map((button, index) => (
            <a
              key={index}
              href={button.href}
              className={`group relative rounded-full px-6 py-3.5 sm:px-8 sm:py-4 text-sm font-semibold transition-all duration-300 text-center ${
                button.primary
                  ? "bg-gradient-to-r from-blue-600 to-blue-500 text-white shadow-lg shadow-blue-500/25 hover:shadow-xl hover:shadow-blue-500/30 hover:-translate-y-0.5 active:translate-y-0"
                  : "border border-primary/10 bg-white/70 text-foreground hover:bg-white hover:border-primary/20 backdrop-blur-sm shadow-sm hover:shadow-md"
              }`}
            >
              {button.primary && (
                <span className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-400 to-cyan-400 opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
              )}
              <span className="relative">{button.text}</span>
            </a>
          ))}
        </div>

        {/* Micro details */}
        <ul
          ref={microRef}
          className="mt-4 sm:mt-6 flex flex-wrap gap-x-6 sm:gap-x-10 gap-y-3 text-xs sm:text-sm font-medium text-muted-foreground"
        >
          {microDetails.map((detail, index) => (
            <li
              key={index}
              ref={(el) => {
                microItemRefs.current[index] = el;
              }}
              className="flex items-center gap-2 sm:gap-3 group cursor-default"
            >
              <span className="relative flex h-1.5 w-1.5 sm:h-2 sm:w-2">
                <span
                  className="absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75 animate-ping"
                  style={{ animationDuration: "2s" }}
                />
                <span className="relative inline-flex h-1.5 w-1.5 sm:h-2 sm:w-2 rounded-full bg-gradient-to-r from-blue-500 to-cyan-400" />
              </span>
              <span className="group-hover:text-foreground transition-colors duration-200">
                {detail}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
