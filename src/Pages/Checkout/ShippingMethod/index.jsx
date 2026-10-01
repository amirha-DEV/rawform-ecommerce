import React from "react";
import { Check, Clock3, Truck } from "lucide-react";

export default function ShippingMethod() {
  return (
    <section className="rounded-[10px] border border-raw-border bg-white p-6 sm:p-8">
      <div className="mb-8">
        <p className="text-[9px] font-bold tracking-[0.16em] text-raw-muted">
          STEP 03
        </p>

        <h2 className="mt-2 text-xl font-black tracking-[-0.03em]">
          SHIPPING METHOD
        </h2>

        <p className="mt-2 text-xs leading-5 text-raw-muted">
          Choose how you want your order to be delivered.
        </p>
      </div>

      <div className="space-y-4">
        {/* Standard */}
        <button
          type="button"
          className="group flex w-full items-center gap-4 rounded-[8px] border border-raw-black bg-raw-bg p-4 text-left transition hover:bg-white"
        >
          <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-[8px] bg-white">
            <Truck size={20} strokeWidth={1.7} />
          </div>

          <div className="min-w-0 flex-1">
            <div className="flex flex-wrap items-center gap-2">
              <h3 className="text-sm font-bold">Standard Shipping</h3>

              <span className="bg-raw-accent px-2 py-1 text-[8px] font-black tracking-[0.08em]">
                FREE
              </span>
            </div>

            <div className="mt-1 flex items-center gap-1.5 text-[10px] text-raw-muted">
              <Clock3 size={12} />
              <span>5–7 business days</span>
            </div>
          </div>

          <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-raw-black text-white">
            <Check size={12} strokeWidth={2.5} />
          </div>
        </button>

        {/* Express */}
        <button
          type="button"
          className="group flex w-full items-center gap-4 rounded-[8px] border border-raw-border bg-white p-4 text-left transition hover:border-raw-black"
        >
          <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-[8px] bg-raw-bg">
            <Truck size={20} strokeWidth={1.7} />
          </div>

          <div className="min-w-0 flex-1">
            <div className="flex flex-wrap items-center gap-2">
              <h3 className="text-sm font-bold">Express Shipping</h3>
            </div>

            <div className="mt-1 flex items-center gap-1.5 text-[10px] text-raw-muted">
              <Clock3 size={12} />
              <span>2–3 business days</span>
            </div>
          </div>

          <span className="shrink-0 text-sm font-bold">$12.00</span>
        </button>
      </div>

      {/* Shipping Notice */}
      <div className="mt-6 flex items-start gap-3 border-t border-raw-border pt-6">
        <div className="mt-0.5 h-1.5 w-1.5 shrink-0 rounded-full bg-raw-accent" />

        <p className="text-[11px] leading-5 text-raw-muted">
          Standard shipping is free on all orders. Express delivery is
          available for an additional charge.
        </p>
      </div>
    </section>
  );
}