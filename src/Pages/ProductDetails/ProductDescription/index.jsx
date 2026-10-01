import React from "react";
import {
  ChevronDown,
  Droplets,
  Package,
  Ruler,
  Shirt,
  Sparkles,
} from "lucide-react";

const details = [
  {
    label: "MATERIAL",
    value: "100% Premium Cotton",
  },
  {
    label: "FIT",
    value: "Oversized / Relaxed Fit",
  },
  {
    label: "WEIGHT",
    value: "280 GSM",
  },
  {
    label: "ORIGIN",
    value: "Made in Portugal",
  },
];

const careInstructions = [
  "Machine wash cold with similar colors",
  "Do not bleach",
  "Tumble dry low",
  "Iron inside out on low heat",
];

export default function ProductDescription() {
  return (
    <section className="border-t border-raw-border bg-raw-bg px-6 py-16 md:px-8 md:py-20">
      <div className="mx-auto max-w-7xl">
        {/* Description Header */}
        <div className="grid gap-10 lg:grid-cols-[0.7fr_1.3fr]">
          <div>
            <p className="text-[10px] font-bold tracking-[0.18em] text-raw-muted">
              PRODUCT / 001
            </p>

            <h2 className="mt-3 text-3xl font-black tracking-[-0.04em] sm:text-4xl">
              BUILT FOR EVERYDAY.
            </h2>
          </div>

          <div className="max-w-2xl">
            <p className="text-sm leading-7 text-raw-muted md:text-base md:leading-8">
              The Essential Oversized Tee is designed around a relaxed, everyday
              silhouette. Made from heavyweight premium cotton, it delivers a
              structured feel without sacrificing comfort.
            </p>

            <p className="mt-5 text-sm leading-7 text-raw-muted md:text-base md:leading-8">
              Minimal branding, clean construction and an oversized fit make it
              an easy foundation for any RAWFORM outfit.
            </p>
          </div>
        </div>

        {/* Product Details */}
        <div className="mt-16 border-y border-raw-border">
          <div className="grid lg:grid-cols-[0.7fr_1.3fr]">
            <div className="border-b border-raw-border p-6 lg:border-b-0 lg:border-r lg:p-8">
              <div className="flex items-center gap-3">
                <Ruler size={18} strokeWidth={1.6} />

                <h3 className="text-xs font-black tracking-[0.12em]">
                  PRODUCT DETAILS
                </h3>
              </div>
            </div>

            <div className="grid sm:grid-cols-2">
              {details.map((item, index) => (
                <div
                  key={item.label}
                  className={`p-6 lg:p-8 ${
                    index < 2 ? "border-b border-raw-border" : ""
                  } ${
                    index % 2 === 0 ? "sm:border-r sm:border-raw-border" : ""
                  }`}
                >
                  <p className="text-[9px] font-bold tracking-[0.15em] text-raw-muted">
                    {item.label}
                  </p>

                  <p className="mt-2 text-sm font-semibold">{item.value}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Care + Shipping */}
        <div className="grid border-b border-raw-border lg:grid-cols-2">
          {/* Care */}
          <div className="border-b border-raw-border p-6 lg:border-b-0 lg:border-r lg:p-8">
            <div className="flex items-center gap-3">
              <Droplets size={18} strokeWidth={1.6} />

              <h3 className="text-xs font-black tracking-[0.12em]">
                CARE INSTRUCTIONS
              </h3>
            </div>

            <ul className="mt-6 space-y-3">
              {careInstructions.map((instruction, index) => (
                <li
                  key={instruction}
                  className="flex items-start gap-3 text-sm text-raw-muted"
                >
                  <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-raw-black" />

                  <span>{instruction}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Shipping */}
          <div className="p-6 lg:p-8">
            <div className="flex items-center gap-3">
              <Package size={18} strokeWidth={1.6} />

              <h3 className="text-xs font-black tracking-[0.12em]">
                SHIPPING & RETURNS
              </h3>
            </div>

            <div className="mt-6 space-y-5">
              <div>
                <p className="text-sm font-semibold">Standard Shipping</p>

                <p className="mt-1 text-xs leading-6 text-raw-muted">
                  Delivered within 3–5 business days.
                </p>
              </div>

              <div>
                <p className="text-sm font-semibold">Easy Returns</p>

                <p className="mt-1 text-xs leading-6 text-raw-muted">
                  Return your item within 30 days of delivery.
                </p>
              </div>

              <div>
                <p className="text-sm font-semibold">Free Shipping</p>

                <p className="mt-1 text-xs leading-6 text-raw-muted">
                  Complimentary shipping on orders over $100.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Accordion Preview */}
        <div className="mt-8 divide-y divide-raw-border border-y border-raw-border">
          {[
            {
              title: "FIT & SIZING",
              icon: Ruler,
            },
            {
              title: "MATERIAL & CONSTRUCTION",
              icon: Shirt,
            },
            {
              title: "RAWFORM QUALITY",
              icon: Sparkles,
            },
          ].map(({ title, icon: Icon }) => (
            <button
              key={title}
              className="flex w-full items-center justify-between py-5 text-left transition hover:text-raw-muted"
            >
              <span className="flex items-center gap-3 text-xs font-bold tracking-[0.1em]">
                <Icon size={16} strokeWidth={1.6} />
                {title}
              </span>

              <ChevronDown size={17} strokeWidth={1.6} />
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
