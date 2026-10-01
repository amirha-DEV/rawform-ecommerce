import React from "react";
import {
  Minus,
  Plus,
  Star,
  Truck,
  RotateCcw,
  ShieldCheck,
  Ruler,
} from "lucide-react";

export default function ProductInfo() {
  return (
    <section className="bg-raw-bg">
      <div className="flex h-full flex-col">
        {/* Category */}
        <p className="text-[10px] font-bold tracking-[0.18em] text-raw-muted">
          T-SHIRTS / RAWFORM ESSENTIALS
        </p>

        {/* Product Name */}
        <h1 className="mt-3 max-w-xl text-3xl font-black tracking-[-0.04em] sm:text-4xl lg:text-5xl">
          Essential Oversized Tee
        </h1>

        {/* Rating */}
        <div className="mt-5 flex items-center gap-3">
          <div className="flex items-center gap-1">
            {[1, 2, 3, 4, 5].map((star) => (
              <Star
                key={star}
                size={14}
                fill="currentColor"
                strokeWidth={1.5}
              />
            ))}
          </div>

          <span className="text-xs font-semibold">4.8</span>

          <span className="text-xs text-raw-muted">
            124 Reviews
          </span>
        </div>

        {/* Price */}
        <div className="mt-6 flex items-center gap-3 border-b border-raw-border pb-7">
          <span className="text-2xl font-bold">$35.00</span>

          <span className="text-sm text-raw-muted line-through">
            $42.00
          </span>

          <span className="bg-raw-accent px-2 py-1 text-[9px] font-black tracking-[0.08em]">
            17% OFF
          </span>
        </div>

        {/* Description */}
        <p className="mt-7 max-w-xl text-sm leading-7 text-raw-muted">
          A clean oversized silhouette designed for everyday wear.
          Heavyweight cotton construction with a relaxed fit and
          minimal RAWFORM branding.
        </p>

        {/* Color */}
        <div className="mt-8">
          <div className="flex items-center justify-between">
            <div>
              <span className="text-[10px] font-bold tracking-[0.14em]">
                COLOR
              </span>

              <span className="ml-2 text-xs text-raw-muted">
                Washed Black
              </span>
            </div>
          </div>

          <div className="mt-4 flex gap-3">
            <button
              aria-label="Washed Black"
              className="flex h-9 w-9 items-center justify-center rounded-full border-2 border-raw-black"
            >
              <span className="h-6 w-6 rounded-full bg-[#171717]" />
            </button>

            <button
              aria-label="Off White"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-raw-border"
            >
              <span className="h-6 w-6 rounded-full bg-[#f1f0ea]" />
            </button>

            <button
              aria-label="Grey"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-raw-border"
            >
              <span className="h-6 w-6 rounded-full bg-[#8a8a86]" />
            </button>
          </div>
        </div>

        {/* Size */}
        <div className="mt-8">
          <div className="flex items-center justify-between">
            <span className="text-[10px] font-bold tracking-[0.14em]">
              SELECT SIZE
            </span>

            <button className="flex items-center gap-1.5 text-[10px] font-bold tracking-[0.1em] text-raw-muted transition hover:text-raw-black">
              <Ruler size={13} />
              SIZE GUIDE
            </button>
          </div>

          <div className="mt-4 grid grid-cols-5 gap-2">
            {["XS", "S", "M", "L", "XL"].map((size, index) => (
              <button
                key={size}
                className={`flex h-12 items-center justify-center border text-xs font-bold transition ${
                  index === 2
                    ? "border-raw-black bg-raw-black text-white"
                    : "border-raw-border bg-white hover:border-raw-black"
                }`}
              >
                {size}
              </button>
            ))}
          </div>
        </div>

        {/* Quantity + Cart */}
        <div className="mt-8 flex gap-3">
          <div className="flex h-14 items-center border border-raw-border bg-white">
            <button className="flex h-full w-11 items-center justify-center text-raw-muted transition hover:text-raw-black">
              <Minus size={15} />
            </button>

            <span className="w-8 text-center text-sm font-bold">
              1
            </span>

            <button className="flex h-full w-11 items-center justify-center text-raw-muted transition hover:text-raw-black">
              <Plus size={15} />
            </button>
          </div>

          <button className="flex h-14 flex-1 items-center justify-center bg-raw-black text-xs font-black tracking-[0.1em] text-white transition hover:bg-raw-accent hover:text-raw-black">
            ADD TO CART
          </button>
        </div>

        {/* Buy Now */}
        <button className="mt-3 h-14 w-full border border-raw-black text-xs font-black tracking-[0.1em] transition hover:bg-raw-black hover:text-white">
          BUY IT NOW
        </button>

        {/* Service Features */}
        <div className="mt-8 border-y border-raw-border">
          <div className="flex items-center gap-4 border-b border-raw-border py-5">
            <Truck size={19} strokeWidth={1.6} />

            <div>
              <p className="text-xs font-bold">FAST SHIPPING</p>
              <p className="mt-1 text-[10px] text-raw-muted">
                Free shipping on orders over $100
              </p>
            </div>
          </div>

          <div className="flex items-center gap-4 border-b border-raw-border py-5">
            <RotateCcw size={19} strokeWidth={1.6} />

            <div>
              <p className="text-xs font-bold">EASY RETURNS</p>
              <p className="mt-1 text-[10px] text-raw-muted">
                30-day return policy
              </p>
            </div>
          </div>

          <div className="flex items-center gap-4 py-5">
            <ShieldCheck size={19} strokeWidth={1.6} />

            <div>
              <p className="text-xs font-bold">SECURE CHECKOUT</p>
              <p className="mt-1 text-[10px] text-raw-muted">
                Your payment information is protected
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}