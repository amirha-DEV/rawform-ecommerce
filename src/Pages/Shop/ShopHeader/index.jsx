import React from "react";
import { ArrowDown, ArrowRight } from "lucide-react";

export default function ShopHeader() {
  return (
    <section className="border-b border-raw-border bg-raw-bg">
      <div className="mx-auto max-w-7xl px-6 pb-14 pt-10 md:px-8 md:pb-20 md:pt-14">
        {/* Breadcrumb */}
        <div className="mb-12 flex items-center gap-2 text-[10px] font-bold tracking-[0.15em] text-raw-muted">
          <span>HOME</span>
          <ArrowRight size={12} />
          <span className="text-raw-black">SHOP</span>
        </div>

        {/* Main Content */}
        <div className="flex flex-col justify-between gap-10 lg:flex-row lg:items-end">
          <div>
            {/* Label */}
            <div className="mb-5 flex items-center gap-2">
              <span className="h-2 w-2 bg-raw-accent" />

              <span className="text-[10px] font-bold tracking-[0.2em] text-raw-muted">
                RAWFORM COLLECTION
              </span>
            </div>

            {/* Heading */}
            <h1 className="max-w-4xl text-6xl font-black leading-[0.85] tracking-[-0.07em] sm:text-7xl md:text-8xl">
              SHOP
              <br />
              <span className="text-raw-muted">ALL.</span>
            </h1>
          </div>

          {/* Description */}
          <div className="max-w-sm lg:pb-2">
            <p className="text-sm leading-6 text-raw-muted md:text-base">
              Explore the complete RAWFORM collection. Clean silhouettes,
              everyday essentials and modern streetwear made for your form.
            </p>

            <div className="mt-6 flex items-center gap-2 text-[10px] font-bold tracking-[0.15em]">
              <span>48 PRODUCTS</span>
              <span className="h-1 w-1 rounded-full bg-raw-black" />
              <span>2026 COLLECTION</span>
            </div>
          </div>
        </div>

        {/* Bottom Meta */}
        <div className="mt-12 flex items-center justify-between border-t border-raw-border pt-5">
          <span className="text-[10px] font-bold tracking-[0.15em] text-raw-muted">
            CLEAN FORM. RAW ATTITUDE.
          </span>

          <button className="group flex items-center gap-2 text-[10px] font-bold tracking-[0.15em]">
            EXPLORE
            <ArrowDown
              size={14}
              className="transition-transform duration-300 group-hover:translate-y-1"
            />
          </button>
        </div>
      </div>
    </section>
  );
}