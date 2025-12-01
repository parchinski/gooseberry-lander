'use client';

import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

// Register GSAP plugins
if (typeof window !== 'undefined') {
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
    { text: "View services", href: "#services" }
  ],
  microDetails = ["Verified Scenarios", "Instant Deployment", "Expert Support"]
}: HeroProps) {
  const sectionRef = useRef<HTMLElement | null>(null);
  const headerRef = useRef<HTMLHeadingElement | null>(null);
  const paraRef = useRef<HTMLParagraphElement | null>(null);
  const ctaRef = useRef<HTMLDivElement | null>(null);
  const badgeRef = useRef<HTMLDivElement | null>(null);
  const microRef = useRef<HTMLUListElement | null>(null);
  const microItem1Ref = useRef<HTMLLIElement | null>(null);
  const microItem2Ref = useRef<HTMLLIElement | null>(null);
  const microItem3Ref = useRef<HTMLLIElement | null>(null);

  useGSAP(
    () => {
      if (!headerRef.current) return;

        gsap.set([headerRef.current, paraRef.current, ctaRef.current, badgeRef.current], {
          autoAlpha: 0,
          y: 20
        });

        const microItems = [microItem1Ref.current, microItem2Ref.current, microItem3Ref.current].filter(Boolean);
        if (microItems.length > 0) {
          gsap.set(microItems, { autoAlpha: 0, y: 10 });
        }

        const tl = gsap.timeline({
          defaults: { ease: 'power3.out' },
        });

        if (badgeRef.current) {
          tl.to(badgeRef.current, { autoAlpha: 1, y: 0, duration: 0.6 }, 0.1);
        }
        
        tl.to(headerRef.current, { autoAlpha: 1, y: 0, duration: 0.8 }, 0.2);
        
        if (paraRef.current) {
          tl.to(paraRef.current, { autoAlpha: 1, y: 0, duration: 0.8 }, 0.3);
        }
        
        if (ctaRef.current) {
          tl.to(ctaRef.current, { autoAlpha: 1, y: 0, duration: 0.6 }, 0.4);
        }
        
        if (microItems.length > 0) {
          tl.to(microItems, { autoAlpha: 1, y: 0, duration: 0.5, stagger: 0.1 }, 0.5);
        }
    },
    { scope: sectionRef },
  );

  return (
    <section ref={sectionRef} className="relative h-screen w-full overflow-hidden text-foreground">
      {/* Removed local ShaderBackground as it's now global in Layout */}

      <div className="relative z-10 mx-auto flex max-w-7xl flex-col items-start gap-6 px-6 pb-24 pt-36 sm:gap-8 sm:pt-44 md:px-10 lg:px-16">
        <div ref={badgeRef} className="inline-flex items-center gap-2 rounded-full border border-primary/10 bg-primary/5 px-3 py-1.5 backdrop-blur-sm">
          <span className="text-[10px] font-light uppercase tracking-[0.08em] text-accent bg-accent/10 px-1.5 py-0.5 rounded border border-accent/20">{badgeLabel}</span>
          <span className="text-xs font-light tracking-tight text-muted-foreground">{badgeText}</span>
        </div>

        <h1 ref={headerRef} className="max-w-3xl text-left text-5xl font-extralight leading-[1.1] tracking-tight text-foreground sm:text-6xl md:text-7xl">
          {title}
        </h1>

        <p ref={paraRef} className="max-w-xl text-left text-lg font-light leading-relaxed tracking-tight text-muted-foreground sm:text-xl">
          {description}
        </p>

        <div ref={ctaRef} className="flex flex-wrap items-center gap-4 pt-4">
          {ctaButtons.map((button, index) => (
            <a
              key={index}
              href={button.href}
              className={`rounded-full px-8 py-4 text-sm font-medium transition-all duration-300 ${
                button.primary
                  ? "bg-accent text-white hover:bg-accent/90 hover:shadow-[0_0_20px_rgba(37,99,235,0.3)]"
                  : "border border-primary/10 bg-white/50 text-foreground hover:bg-white/80 backdrop-blur-sm shadow-sm"
              }`}
            >
              {button.text}
            </a>
          ))}
        </div>

        <ul ref={microRef} className="mt-8 flex flex-wrap gap-8 text-sm font-light tracking-tight text-muted-foreground">
          {microDetails.map((detail, index) => {
            const refMap = [microItem1Ref, microItem2Ref, microItem3Ref];
            return (
              <li key={index} ref={refMap[index]} className="flex items-center gap-2.5">
                <div className="h-1.5 w-1.5 rounded-full bg-accent shadow-[0_0_8px_rgba(37,99,235,0.6)]" /> {detail}
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
