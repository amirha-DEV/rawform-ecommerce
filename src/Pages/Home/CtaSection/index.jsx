import React from "react";
import { ArrowUpRight, MoveRight } from "lucide-react";

export default function CtaSection() {
  return (
    <section className="bg-raw-black px-6 py-20 text-white md:px-8 md:py-28">
      <div className="mx-auto max-w-7xl">
        {/* Main CTA */}
        <div className="relative overflow-hidden border border-white/10 px-6 py-14 sm:px-10 md:px-16 md:py-20">
          {/* Decorative Accent */}
          <div className="absolute -right-20 -top-20 h-56 w-56 rounded-full bg-raw-accent blur-[1px] opacity-90 md:h-72 md:w-72" />

          <div className="relative z-10 max-w-5xl">
            {/* Label */}
            <div className="mb-7 flex items-center gap-3">
              <span className="h-2 w-2 bg-raw-accent" />

              <span className="text-[10px] font-bold tracking-[0.2em] text-white/50">
                YOUR EVERYDAY UNIFORM
              </span>
            </div>

            {/* Heading */}
            <h2 className="max-w-4xl text-5xl font-black leading-[0.9] tracking-[-0.07em] sm:text-6xl md:text-7xl lg:text-[6.5rem]">
              READY TO
              <br />
              DEFINE YOUR{" "}
              <span className="text-raw-accent">FORM?</span>
            </h2>

            {/* Description */}
            <p className="mt-8 max-w-lg text-sm leading-6 text-white/50 md:text-base">
              Discover clean silhouettes, everyday essentials and modern
              streetwear built around your style.
            </p>

            {/* Action */}
            <div className="mt-9">
              <button className="group inline-flex items-center gap-4 bg-white px-6 py-4 text-xs font-black text-raw-black transition-colors duration-300 hover:bg-raw-accent">
                SHOP ALL PRODUCTS

                <span className="flex h-7 w-7 items-center justify-center bg-raw-black text-white transition-transform duration-300 group-hover:translate-x-1">
                  <ArrowUpRight size={15} />
                </span>
              </button>
            </div>
          </div>

          {/* Bottom Brand Line */}
          <div className="relative z-10 mt-14 flex items-center justify-between border-t border-white/10 pt-5">
            <span className="text-[10px] font-bold tracking-[0.2em] text-white/40">
              RAWFORM
            </span>

            <div className="flex items-center gap-2 text-[10px] font-bold tracking-[0.15em] text-white/40">
              <span>EST. 2026</span>
              <MoveRight size={14} />
              <span>STAY RAW</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}