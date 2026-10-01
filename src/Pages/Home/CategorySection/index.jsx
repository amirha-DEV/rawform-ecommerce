import React from "react";
import { ArrowUpRight } from "lucide-react";

const categories = [
  {
    id: 1,
    name: "T-SHIRTS",
    subtitle: "EVERYDAY ESSENTIALS",
    count: "12 PRODUCTS",
    image: "/categories/tshirts.jpg",
    size: "lg:col-span-2",
  },
  {
    id: 2,
    name: "HOODIES",
    subtitle: "BUILT FOR COMFORT",
    count: "08 PRODUCTS",
    image: "/categories/hoodies.jpg",
    size: "",
  },
  {
    id: 3,
    name: "BOTTOMS",
    subtitle: "MOVE DIFFERENT",
    count: "10 PRODUCTS",
    image: "/categories/bottoms.jpg",
    size: "",
  },
  {
    id: 4,
    name: "OUTERWEAR",
    subtitle: "LAYER WITH INTENT",
    count: "06 PRODUCTS",
    image: "/categories/outerwear.jpg",
    size: "lg:col-span-2",
  },
];

export default function CategorySection() {
  return (
    <section className="bg-white px-6 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-7xl">

        {/* Header */}
        <div className="mb-10 flex flex-col justify-between gap-5 sm:flex-row sm:items-end md:mb-12">
          <div>
            <div className="mb-4 flex items-center gap-2">
              <span className="h-2 w-2 bg-raw-accent" />
              <span className="text-[10px] font-bold tracking-[0.2em] text-raw-muted">
                FIND YOUR FORM
              </span>
            </div>

            <h2 className="text-4xl font-black tracking-[-0.06em] sm:text-5xl md:text-6xl">
              SHOP BY CATEGORY<span className="text-raw-muted">.</span>
            </h2>

            <p className="mt-4 max-w-md text-sm leading-6 text-raw-muted">
              Explore the essentials. Find your fit.
              Build your everyday uniform.
            </p>
          </div>

          <span className="text-xs font-semibold tracking-wide text-raw-muted">
            04 COLLECTIONS
          </span>
        </div>

        {/* Category Grid */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">

          {categories.map((category, index) => (
            <a
              key={category.id}
              href="#"
              className={`group relative block aspect-[4/5] overflow-hidden rounded-[10px] bg-[#EAEAE8] ${category.size} ${
                index === 0 || index === 3
                  ? "lg:aspect-[2/1]"
                  : "lg:aspect-[4/5]"
              }`}
            >
              {/* Image */}
              <img
                src={category.image}
                alt={category.name}
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent transition-opacity duration-300 group-hover:from-black/85" />

              {/* Content */}
              <div className="absolute inset-x-0 bottom-0 p-5 text-white sm:p-7">

                <p className="mb-2 text-[9px] font-semibold tracking-[0.2em] text-white/70">
                  {category.subtitle}
                </p>

                <div className="flex items-end justify-between gap-3">
                  <div>
                    <h3 className="text-3xl font-black tracking-[-0.05em] sm:text-4xl">
                      {category.name}
                    </h3>

                    <p className="mt-2 text-[10px] font-medium tracking-[0.12em] text-white/60">
                      {category.count}
                    </p>
                  </div>

                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white text-raw-black transition-all duration-300 group-hover:bg-raw-accent group-hover:-translate-y-1 group-hover:translate-x-1">
                    <ArrowUpRight size={19} />
                  </span>
                </div>
              </div>

              {/* Index */}
              <span className="absolute right-5 top-5 text-xs font-semibold tracking-widest text-white/70">
                0{category.id}
              </span>
            </a>
          ))}

        </div>

        {/* Bottom Note */}
        <div className="mt-8 flex items-center justify-between border-t border-raw-border pt-5">
          <p className="text-[10px] font-medium tracking-[0.12em] text-raw-muted">
            DESIGNED FOR EVERYDAY MOVEMENT.
          </p>

          <span className="hidden text-[10px] font-bold tracking-[0.12em] sm:block">
            RAWFORM / 2026
          </span>
        </div>

      </div>
    </section>
  );
}
