import React from "react";

export default function OrderSummary() {
  return (
    <section className="border-t border-raw-border bg-raw-bg px-6 py-12 md:px-8 md:py-16">
      <div className="mx-auto max-w-6xl">
        <div className="ml-auto max-w-md border border-raw-border bg-white p-6 sm:p-8">
          <p className="text-[10px] font-black tracking-[0.18em]">
            ORDER SUMMARY
          </p>

          <div className="mt-7 space-y-4 text-sm">
            <div className="flex items-center justify-between">
              <span className="text-raw-muted">Subtotal</span>

              <span className="font-bold">$184.00</span>
            </div>

            <div className="flex items-center justify-between">
              <span className="text-raw-muted">Shipping</span>

              <span className="font-bold">FREE</span>
            </div>

            <div className="flex items-center justify-between">
              <span className="text-raw-muted">Discount</span>

              <span className="font-bold">-$0.00</span>
            </div>
          </div>

          <div className="my-6 border-t border-raw-border" />

          <div className="flex items-center justify-between">
            <span className="text-xs font-black tracking-[0.08em]">TOTAL</span>

            <span className="text-2xl font-black tracking-[-0.04em]">
              $184.00
            </span>
          </div>

          <p className="mt-4 text-[9px] leading-5 text-raw-muted">
            Taxes and shipping fees are included where applicable.
          </p>
        </div>
      </div>
    </section>
  );
}
