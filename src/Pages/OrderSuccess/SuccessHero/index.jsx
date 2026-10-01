import React from "react";
import { ArrowRight, Check } from "lucide-react";

export default function SuccessHero() {
  return (
    <section className="px-6 py-16 md:px-8 md:py-24">
      <div className="mx-auto max-w-3xl text-center">
        {/* Success Icon */}
        <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-raw-accent">
          <div className="flex h-11 w-11 items-center justify-center rounded-full bg-raw-black text-white">
            <Check size={22} strokeWidth={2.5} />
          </div>
        </div>

        {/* Label */}
        <p className="mt-8 text-[10px] font-bold tracking-[0.2em] text-raw-muted">
          RAWFORM / ORDER CONFIRMED
        </p>

        {/* Heading */}
        <h1 className="mt-3 text-4xl font-black tracking-[-0.06em] sm:text-5xl md:text-6xl">
          ORDER CONFIRMED.
        </h1>

        {/* Description */}
        <p className="mx-auto mt-5 max-w-xl text-sm leading-6 text-raw-muted sm:text-base">
          Thanks for your order. We've received your purchase and will start
          preparing it for shipment.
        </p>

        {/* Order Number */}
        <div className="mx-auto mt-8 inline-flex items-center gap-3 rounded-[8px] border border-raw-border bg-white px-5 py-3">
          <span className="text-[9px] font-bold tracking-[0.12em] text-raw-muted">
            ORDER NUMBER
          </span>

          <span className="text-xs font-black tracking-[0.08em]">
            #RF-2026-0021
          </span>
        </div>

        {/* Actions */}
        <div className="mt-10 flex flex-col justify-center gap-3 sm:flex-row">
          <button className="group inline-flex items-center justify-center gap-2 bg-raw-black px-7 py-4 text-[10px] font-black tracking-[0.14em] text-white transition hover:bg-raw-accent hover:text-raw-black">
            CONTINUE SHOPPING
            <ArrowRight
              size={15}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </button>

          <button className="border border-raw-border bg-white px-7 py-4 text-[10px] font-black tracking-[0.14em] transition hover:border-raw-black">
            VIEW ORDER
          </button>
        </div>
      </div>
    </section>
  );
}
