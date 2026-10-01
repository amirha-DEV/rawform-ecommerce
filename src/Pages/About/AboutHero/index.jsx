import React from "react";
import { ArrowRight } from "lucide-react";

export default function AboutHero() {
  return (
    <section className="border-b border-raw-border bg-raw-bg px-6 py-16 md:px-8 md:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="grid items-end gap-10 lg:grid-cols-[1fr_0.7fr]">
          <div>
            <p className="text-[10px] font-bold tracking-[0.2em] text-raw-muted">
              RAWFORM / ABOUT
            </p>

            <h1 className="mt-5 max-w-4xl text-5xl font-black leading-[0.9] tracking-[-0.07em] sm:text-6xl md:text-7xl lg:text-8xl">
              BUILT
              <br />
              TO BE
              <br />
              <span className="text-raw-muted">DIFFERENT.</span>
            </h1>
          </div>

          <div className="lg:pb-2">
            <p className="max-w-md text-sm leading-7 text-raw-muted md:text-base">
              RAWFORM is an independent streetwear brand built around
              simplicity, movement and individual expression.
            </p>

            <div className="mt-8 flex items-center gap-3 text-[10px] font-black tracking-[0.14em]">
              <span className="h-px w-10 bg-raw-black" />
              CLEAN FORM. RAW ATTITUDE.
            </div>
          </div>
        </div>

        <div className="mt-14 overflow-hidden rounded-[10px] bg-raw-black md:mt-20">
          <div className="relative aspect-[16/7]">
            <img
              src="/about/about-hero.jpg"
              alt="RAWFORM streetwear"
              className="h-full w-full object-cover opacity-80"
            />

            <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/20 to-transparent" />

            <div className="absolute bottom-6 left-6 max-w-sm text-white sm:bottom-10 sm:left-10">
              <p className="text-[9px] font-bold tracking-[0.18em] text-white/50">
                EST. 2026
              </p>

              <p className="mt-2 text-xl font-black tracking-[-0.03em] sm:text-2xl">
                FORM FOLLOWS ATTITUDE.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-6 flex items-center justify-between text-[9px] font-bold tracking-[0.15em] text-raw-muted">
          <span>RAWFORM / 001</span>

          <span className="flex items-center gap-2">
            SCROLL TO EXPLORE
            <ArrowRight size={13} />
          </span>
        </div>
      </div>
    </section>
  );
}
