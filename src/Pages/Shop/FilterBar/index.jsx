import React from "react";
import { ChevronDown, Filter, SlidersHorizontal, X } from "lucide-react";

const filters = [
  {
    id: "category",
    label: "CATEGORY",
    options: ["All", "T-Shirts", "Hoodies", "Sweatshirts", "Cargo Pants"],
  },
  {
    id: "size",
    label: "SIZE",
    options: ["XS", "S", "M", "L", "XL"],
  },
  {
    id: "color",
    label: "COLOR",
    options: ["Black", "White", "Grey", "Green"],
  },
  {
    id: "price",
    label: "PRICE",
    options: ["Under $50", "$50 - $100", "$100 - $150", "$150+"],
  },
];

export default function FilterBar() {
  return (
    <section className="border-b border-raw-border bg-raw-bg">
      <div className="mx-auto max-w-7xl px-6 py-5 md:px-8">
        {/* Desktop */}
        <div className="hidden items-center justify-between gap-6 lg:flex">
          <div className="flex items-center gap-3">
            <SlidersHorizontal size={17} strokeWidth={1.7} />

            <span className="text-[10px] font-black tracking-[0.18em]">
              FILTER BY
            </span>

            <div className="ml-3 h-5 w-px bg-raw-border" />

            <div className="flex items-center gap-2">
              {filters.map((filter) => (
                <button
                  key={filter.id}
                  className="group flex items-center gap-3 border border-raw-border bg-white px-4 py-3 text-[10px] font-bold tracking-[0.1em] transition hover:border-raw-black"
                >
                  {filter.label}

                  <ChevronDown
                    size={13}
                    strokeWidth={1.8}
                    className="transition-transform duration-300 group-hover:translate-y-0.5"
                  />
                </button>
              ))}
            </div>
          </div>

          <div className="flex items-center gap-5">
            <span className="text-[10px] font-semibold tracking-[0.12em] text-raw-muted">
              48 PRODUCTS
            </span>

            <div className="h-5 w-px bg-raw-border" />

            <button className="flex items-center gap-2 border border-raw-black bg-raw-black px-4 py-3 text-[10px] font-bold tracking-[0.1em] text-white transition hover:bg-white hover:text-raw-black">
              SORT BY
              <ChevronDown size={13} />
            </button>

            <button className="text-[10px] font-bold tracking-[0.1em] text-raw-muted transition hover:text-raw-black">
              CLEAR ALL
            </button>
          </div>
        </div>

        {/* Mobile */}
        <div className="flex items-center justify-between lg:hidden">
          <div className="flex items-center gap-3">
            <button className="flex items-center gap-2 border border-raw-border bg-white px-4 py-3 text-[10px] font-bold tracking-[0.1em]">
              <Filter size={15} strokeWidth={1.8} />
              FILTER
            </button>

            <button className="flex items-center gap-2 border border-raw-border bg-white px-4 py-3 text-[10px] font-bold tracking-[0.1em]">
              <SlidersHorizontal size={15} strokeWidth={1.8} />
              SORT
            </button>
          </div>

          <span className="text-[10px] font-semibold tracking-[0.12em] text-raw-muted">
            48 PRODUCTS
          </span>
        </div>

        {/* Active Filters Preview */}
        <div className="mt-4 hidden items-center gap-2 border-t border-raw-border pt-4 lg:flex">
          <span className="mr-2 text-[9px] font-bold tracking-[0.15em] text-raw-muted">
            ACTIVE:
          </span>

          <span className="inline-flex items-center gap-2 bg-raw-black px-3 py-1.5 text-[9px] font-bold text-white">
            ALL PRODUCTS
            <X size={11} />
          </span>
        </div>
      </div>
    </section>
  );
}