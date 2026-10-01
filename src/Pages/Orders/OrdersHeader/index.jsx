import React from "react";
import { PackageOpen } from "lucide-react";

export default function OrdersHeader() {
  return (
    <section className="border-b border-raw-border bg-raw-bg px-6 py-12 md:px-8 md:py-16">
      <div className="mx-auto max-w-6xl">
        <p className="text-[10px] font-bold tracking-[0.2em] text-raw-muted">
          ACCOUNT / ORDERS
        </p>

        <div className="mt-6 flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h1 className="text-5xl font-black leading-[0.9] tracking-[-0.07em] sm:text-6xl">
              MY
              <br />
              <span className="text-raw-muted">ORDERS.</span>
            </h1>
          </div>

          <div className="flex items-center gap-3">
            <PackageOpen size={20} strokeWidth={1.6} />

            <p className="text-[9px] font-black tracking-[0.15em] text-raw-muted">
              4 ORDERS
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
