import React from "react";
import CartItems from "./CartItems";
import CartSummary from "./CartSummary";

export default function Cart() {
  return (
    <main className="bg-raw-bg">
      {/* Header */}
      <section className="border-b border-raw-border px-6 py-12 md:px-8 md:py-16">
        <div className="mx-auto max-w-7xl">
          <p className="text-[10px] font-bold tracking-[0.18em] text-raw-muted">
            RAWFORM / SHOPPING BAG
          </p>

          <div className="mt-3 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
            <h1 className="text-4xl font-black tracking-[-0.05em] sm:text-5xl lg:text-6xl">
              YOUR CART.
            </h1>

            <p className="text-xs text-raw-muted">2 ITEMS</p>
          </div>
        </div>
      </section>

      {/* Cart Content */}
      <section className="px-6 py-10 md:px-8 md:py-14">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1fr_380px] lg:gap-14">
          <CartItems />
          <CartSummary />
        </div>
      </section>
    </main>
  );
}
