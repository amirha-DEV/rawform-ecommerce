import React from "react";
import { LockKeyhole, ShieldCheck, Tag } from "lucide-react";

export default function OrderSummary() {
  return (
    <aside className="lg:sticky lg:top-24 lg:self-start">
      <section className="rounded-[10px] border border-raw-border bg-white p-6 sm:p-8">
        {/* Header */}
        <div className="border-b border-raw-border pb-6">
          <div className="flex items-center justify-between">
            <p className="text-[9px] font-bold tracking-[0.16em] text-raw-muted">
              ORDER / 002
            </p>

            <span className="flex items-center gap-1.5 text-[9px] font-bold tracking-[0.1em] text-raw-success">
              <ShieldCheck size={13} />
              SECURE
            </span>
          </div>

          <h2 className="mt-2 text-2xl font-black tracking-[-0.04em]">
            ORDER SUMMARY
          </h2>
        </div>

        {/* Products */}
        <div className="space-y-5 border-b border-raw-border py-6">
          {/* Product 1 */}
          <div className="flex gap-4">
            <div className="relative h-20 w-16 shrink-0 overflow-hidden rounded-[8px] bg-raw-bg">
              <img
                src="/products/tee.jpg"
                alt="Essential Oversized Tee"
                className="h-full w-full object-cover"
              />

              <span className="absolute right-1 top-1 flex h-5 min-w-5 items-center justify-center rounded-full bg-raw-black px-1 text-[8px] font-bold text-white">
                1
              </span>
            </div>

            <div className="min-w-0 flex-1">
              <p className="text-[9px] font-bold tracking-[0.12em] text-raw-muted">
                T-SHIRTS
              </p>

              <h3 className="mt-1 text-sm font-bold">
                Essential Oversized Tee
              </h3>

              <p className="mt-1 text-[10px] text-raw-muted">
                M · Washed Black
              </p>
            </div>

            <span className="shrink-0 text-sm font-bold">$35.00</span>
          </div>

          {/* Product 2 */}
          <div className="flex gap-4">
            <div className="relative h-20 w-16 shrink-0 overflow-hidden rounded-[8px] bg-raw-bg">
              <img
                src="/products/hoodie.jpg"
                alt="Heavyweight Hoodie"
                className="h-full w-full object-cover"
              />

              <span className="absolute right-1 top-1 flex h-5 min-w-5 items-center justify-center rounded-full bg-raw-black px-1 text-[8px] font-bold text-white">
                2
              </span>
            </div>

            <div className="min-w-0 flex-1">
              <p className="text-[9px] font-bold tracking-[0.12em] text-raw-muted">
                HOODIES
              </p>

              <h3 className="mt-1 text-sm font-bold">Heavyweight Hoodie</h3>

              <p className="mt-1 text-[10px] text-raw-muted">L · Off White</p>
            </div>

            <span className="shrink-0 text-sm font-bold">$156.00</span>
          </div>
        </div>

        {/* Promo */}
        <div className="border-b border-raw-border py-6">
          <label className="mb-2 block text-[9px] font-bold tracking-[0.12em] text-raw-muted">
            PROMO CODE
          </label>

          <div className="flex gap-2">
            <div className="relative min-w-0 flex-1">
              <Tag
                size={15}
                strokeWidth={1.7}
                className="absolute left-3.5 top-1/2 -translate-y-1/2 text-raw-muted"
              />

              <input
                type="text"
                placeholder="Enter promo code"
                className="w-full rounded-[8px] border border-raw-border bg-raw-bg py-3 pl-10 pr-3 text-xs outline-none transition placeholder:text-raw-muted/60 focus:border-raw-black focus:bg-white"
              />
            </div>

            <button className="shrink-0 rounded-[8px] border border-raw-black px-4 text-[9px] font-black tracking-[0.08em] transition hover:bg-raw-black hover:text-white">
              APPLY
            </button>
          </div>
        </div>

        {/* Prices */}
        <div className="space-y-3 border-b border-raw-border py-6 text-sm">
          <div className="flex items-center justify-between">
            <span className="text-raw-muted">Subtotal</span>
            <span className="font-semibold">$191.00</span>
          </div>

          <div className="flex items-center justify-between">
            <span className="text-raw-muted">Shipping</span>
            <span className="font-semibold text-raw-success">FREE</span>
          </div>

          <div className="flex items-center justify-between">
            <span className="text-raw-muted">Discount</span>
            <span className="font-semibold text-raw-danger">-$10.00</span>
          </div>
        </div>

        {/* Total */}
        <div className="flex items-end justify-between py-6">
          <div>
            <p className="text-[9px] font-bold tracking-[0.14em] text-raw-muted">
              TOTAL
            </p>

            <p className="mt-1 text-3xl font-black tracking-[-0.04em]">
              $181.00
            </p>
          </div>

          <span className="text-[9px] font-bold tracking-[0.12em] text-raw-muted">
            USD
          </span>
        </div>

        {/* Place Order */}
        <button className="flex w-full items-center justify-center gap-2 bg-raw-black px-5 py-4 text-[10px] font-black tracking-[0.14em] text-white transition hover:bg-raw-accent hover:text-raw-black">
          <LockKeyhole size={14} strokeWidth={1.8} />
          PLACE ORDER
        </button>

        <p className="mt-4 text-center text-[10px] leading-5 text-raw-muted">
          Your payment and personal information are protected with secure
          checkout technology.
        </p>
      </section>
    </aside>
  );
}
