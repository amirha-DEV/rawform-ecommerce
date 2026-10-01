import React from "react";

import CustomerInfo from "./CustomerInfo";
import ShippingAddress from "./ShippingAddress";
import ShippingMethod from "./ShippingMethod";
import OrderSummary from "./OrderSummary";

export default function Checkout() {
  return (
    <main className="min-h-screen bg-raw-bg">
      {/* Header */}
      <section className="border-b border-raw-border px-6 py-12 md:px-8 md:py-16">
        <div className="mx-auto max-w-7xl">
          <div className="flex items-center gap-2 text-[9px] font-bold tracking-[0.14em] text-raw-muted">
            <span>CART</span>
            <span>/</span>
            <span className="text-raw-black">CHECKOUT</span>
          </div>

          <div className="mt-4 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
            <div>
              <p className="text-[10px] font-bold tracking-[0.18em] text-raw-muted">
                RAWFORM / SECURE CHECKOUT
              </p>

              <h1 className="mt-2 text-4xl font-black tracking-[-0.05em] sm:text-5xl lg:text-6xl">
                CHECKOUT.
              </h1>
            </div>

            <div className="flex items-center gap-2 text-[10px] font-bold tracking-[0.12em] text-raw-muted">
              <span className="flex h-7 w-7 items-center justify-center rounded-full bg-raw-black text-white">
                1
              </span>

              <span>DETAILS</span>

              <span className="mx-1 h-px w-6 bg-raw-border" />

              <span className="flex h-7 w-7 items-center justify-center rounded-full border border-raw-border">
                2
              </span>

              <span>REVIEW</span>
            </div>
          </div>
        </div>
      </section>

      {/* Checkout Content */}
      <section className="px-6 py-10 md:px-8 md:py-14">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1fr_380px] lg:gap-14">
          {/* Left */}
          <div className="space-y-8">
            <CustomerInfo />

            <ShippingAddress />

            <ShippingMethod />
          </div>

          {/* Right */}
          <OrderSummary />
        </div>
      </section>
    </main>
  );
}
