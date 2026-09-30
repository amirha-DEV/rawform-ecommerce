import React from "react";
import { ArrowUpRight, MoveDown } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-raw-bg">
      <div className="mx-auto grid min-h-[calc(100vh-80px)] max-w-7xl items-center gap-12 px-6 py-12 md:px-8 lg:grid-cols-2 lg:gap-16 lg:py-16">
        {/* Content */}
        <div className="relative z-10 flex flex-col items-start">
          {/* Badge */}
          <div className="mb-6 inline-flex items-center gap-2 border border-raw-border bg-white px-3 py-2">
            <span className="h-2 w-2 rounded-full bg-raw-accent" />

            <span className="text-[11px] font-bold tracking-[0.15em]">
              NEW COLLECTION — 2026
            </span>
          </div>

          {/* Heading */}
          <h1 className="max-w-2xl text-[clamp(3.5rem,8vw,7rem)] font-black leading-[0.86] tracking-[-0.07em]">
            CLEAN
            <br />
            FORM.
            <br />
            <span className="text-raw-muted">RAW</span> ATTITUDE.
          </h1>

          {/* Description */}
          <p className="mt-8 max-w-md text-sm leading-6 text-raw-muted md:text-base">
            Modern streetwear designed for everyday movement. Minimal
            essentials. Strong identity. No unnecessary noise.
          </p>

          {/* Actions */}
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <button className="group inline-flex items-center gap-3 bg-raw-black px-6 py-4 text-sm font-bold text-white transition hover:bg-[#222]">
              SHOP COLLECTION
              <ArrowUpRight
                size={17}
                className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
              />
            </button>

            <button className="border border-raw-border bg-white px-6 py-4 text-sm font-bold transition hover:border-raw-black">
              EXPLORE CATEGORIES
            </button>
          </div>

          {/* Scroll Indicator */}
          <div className="mt-14 hidden items-center gap-3 text-[10px] font-bold tracking-[0.2em] text-raw-muted sm:flex">
            <MoveDown size={15} strokeWidth={1.5} />
            SCROLL TO EXPLORE
          </div>
        </div>

        {/* Visual */}
        <div className="relative flex min-h-[460px] items-center justify-center md:min-h-[560px] lg:min-h-[650px]">
          {/* Accent Shape */}
          <div className="absolute right-[8%] top-[12%] h-32 w-32 rounded-full bg-raw-accent blur-[1px] md:h-44 md:w-44" />

          {/* Image Container */}
          <div className="relative z-10 h-[430px] w-full overflow-hidden rounded-[10px] bg-white md:h-[540px] lg:h-[620px]">
            <img
              src="/hero-streetwear.jpg"
              alt="RAWFORM streetwear collection"
              className="h-full w-full object-cover transition duration-700 hover:scale-[1.02]"
            />

            {/* Image Overlay */}
            <div className="absolute inset-x-0 bottom-0 flex items-end justify-between bg-gradient-to-t from-black/60 via-black/10 to-transparent p-6">
              <div>
                <p className="text-[10px] font-semibold tracking-[0.2em] text-white/70">
                  RAWFORM / 001
                </p>

                <p className="mt-1 text-lg font-bold text-white">
                  EVERYDAY UNIFORM
                </p>
              </div>

              <span className="rounded-full bg-raw-accent px-3 py-1 text-[10px] font-black text-raw-black">
                NEW
              </span>
            </div>
          </div>

          {/* Floating Label */}
          <div className="absolute -bottom-2 left-0 z-20 hidden border border-raw-border bg-white px-5 py-4 shadow-sm sm:block">
            <p className="text-[10px] font-bold tracking-[0.15em] text-raw-muted">
              CLEAN / MODERN / UNISEX
            </p>
          </div>
        </div>
      </div>

      {/* Bottom Line */}
      <div className="mx-auto max-w-7xl border-t border-raw-border px-6 md:px-8">
        <div className="flex items-center justify-between py-4">
          <span className="text-[10px] font-bold tracking-[0.18em] text-raw-muted">
            RAWFORM
          </span>

          <span className="text-[10px] font-medium tracking-[0.12em] text-raw-muted">
            CLEAN FORM. RAW ATTITUDE.
          </span>
        </div>
      </div>
    </section>
  );
}
