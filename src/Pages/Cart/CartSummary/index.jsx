import React from "react";
import { ArrowRight, LockKeyhole, Tag, Truck } from "lucide-react";

export default function CartSummary() {
  return (
    <section className="h-fit rounded-[10px] border border-raw-border bg-white p-6 md:p-7 lg:sticky lg:top-28">
      {/* Header */}
      <div className="border-b border-raw-border pb-5">
        <p className="text-[9px] font-bold tracking-[0.16em] text-raw-muted">
          RAWFORM / CART
        </p>

        <h2 className="mt-2 text-2xl font-black tracking-[-0.04em]">
          ORDER SUMMARY.
        </h2>
      </div>

      {/* Price Breakdown */}
      <div className="space-y-4 border-b border-raw-border py-6">
        <div className="flex items-center justify-between text-sm">
          <span className="text-raw-muted">Subtotal</span>
          <span className="font-semibold">$191.00</span>
        </div>

        <div className="flex items-center justify-between text-sm">
          <span className="text-raw-muted">Shipping</span>
          <span className="font-semibold">FREE</span>
        </div>

        <div className="flex items-center justify-between text-sm">
          <span className="text-raw-muted">Discount</span>
          <span className="font-semibold text-raw-success">-$10.00</span>
        </div>
      </div>

      {/* Coupon */}
      <div className="border-b border-raw-border py-6">
        <div className="mb-3 flex items-center gap-2">
          <Tag size={15} strokeWidth={1.7} />

          <span className="text-[10px] font-bold tracking-[0.12em]">
            HAVE A PROMO CODE?
          </span>
        </div>

        <div className="flex">
          <input
            type="text"
            placeholder="ENTER CODE"
            className="min-w-0 flex-1 border border-raw-border bg-raw-bg px-4 py-3 text-[10px] font-semibold tracking-[0.08em] outline-none placeholder:text-raw-muted/60 focus:border-raw-black"
          />

          <button className="bg-raw-black px-5 text-[10px] font-black tracking-[0.08em] text-white transition hover:bg-raw-accent hover:text-raw-black">
            APPLY
          </button>
        </div>
      </div>

      {/* Total */}
      <div className="flex items-end justify-between py-6">
        <div>
          <p className="text-[9px] font-bold tracking-[0.14em] text-raw-muted">
            TOTAL
          </p>

          <p className="mt-1 text-xs text-raw-muted">Taxes included</p>
        </div>

        <span className="text-2xl font-black tracking-[-0.03em]">$181.00</span>
      </div>

      {/* Checkout */}
      <button className="group flex h-14 w-full items-center justify-center gap-3 bg-raw-black text-xs font-black tracking-[0.1em] text-white transition hover:bg-raw-accent hover:text-raw-black">
        PROCEED TO CHECKOUT
        <ArrowRight
          size={17}
          className="transition-transform duration-300 group-hover:translate-x-1"
        />
      </button>

      {/* Benefits */}
      <div className="mt-6 space-y-4">
        <div className="flex items-start gap-3">
          <Truck size={17} strokeWidth={1.6} className="mt-0.5 shrink-0" />

          <div>
            <p className="text-xs font-semibold">FREE SHIPPING</p>

            <p className="mt-1 text-[10px] leading-5 text-raw-muted">
              Free standard shipping on orders over $100.
            </p>
          </div>
        </div>

        <div className="flex items-start gap-3">
          <LockKeyhole
            size={17}
            strokeWidth={1.6}
            className="mt-0.5 shrink-0"
          />

          <div>
            <p className="text-xs font-semibold">SECURE CHECKOUT</p>

            <p className="mt-1 text-[10px] leading-5 text-raw-muted">
              Your payment information is encrypted and secure.
            </p>
          </div>
        </div>
      </div>

      {/* Delivery Note */}
      <div className="mt-6 bg-raw-bg p-4">
        <p className="text-[9px] font-bold tracking-[0.12em]">
          ESTIMATED DELIVERY
        </p>

        <p className="mt-1 text-xs text-raw-muted">
          3–5 business days after your order is confirmed.
        </p>
      </div>
    </section>
  );
}
