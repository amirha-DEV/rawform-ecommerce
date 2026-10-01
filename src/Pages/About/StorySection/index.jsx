import React from "react";

export default function StorySection() {
  return (
    <section className="bg-white px-6 py-16 md:px-8 md:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          <div>
            <p className="text-[10px] font-bold tracking-[0.2em] text-raw-muted">
              OUR STORY
            </p>

            <h2 className="mt-4 text-4xl font-black leading-[0.95] tracking-[-0.06em] sm:text-5xl">
              NO NOISE.
              <br />
              JUST FORM.
            </h2>
          </div>

          <div className="max-w-2xl">
            <p className="text-lg font-medium leading-8 sm:text-xl">
              RAWFORM started with a simple idea: everyday clothing should feel
              intentional.
            </p>

            <p className="mt-7 text-sm leading-7 text-raw-muted">
              We create modern streetwear designed around clean silhouettes,
              practical details and pieces that work together without trying too
              hard.
            </p>

            <p className="mt-5 text-sm leading-7 text-raw-muted">
              From heavyweight essentials to everyday outerwear, every RAWFORM
              piece is designed to become part of your daily uniform.
            </p>

            <div className="mt-10 grid grid-cols-3 border-y border-raw-border py-7">
              <div>
                <p className="text-2xl font-black">2026</p>
                <p className="mt-1 text-[9px] font-bold tracking-[0.12em] text-raw-muted">
                  ESTABLISHED
                </p>
              </div>

              <div className="border-l border-raw-border pl-5">
                <p className="text-2xl font-black">100%</p>
                <p className="mt-1 text-[9px] font-bold tracking-[0.12em] text-raw-muted">
                  UNISEX
                </p>
              </div>

              <div className="border-l border-raw-border pl-5">
                <p className="text-2xl font-black">∞</p>
                <p className="mt-1 text-[9px] font-bold tracking-[0.12em] text-raw-muted">
                  KEEP MOVING
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
