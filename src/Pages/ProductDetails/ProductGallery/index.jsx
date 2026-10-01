import React from "react";
import { Heart, Share2 } from "lucide-react";

const images = [
  "/products/tee.jpg",
  "/products/tee-hover.jpg",
  "/products/hoodie.jpg",
  "/products/cargo.jpg",
];

export default function ProductGallery() {
  return (
    <section className="bg-raw-bg">
      <div className="grid gap-4 lg:grid-cols-[88px_1fr]">
        {/* Thumbnails */}
        <div className="order-2 flex gap-3 overflow-x-auto lg:order-1 lg:flex-col">
          {images.map((image, index) => (
            <button
              key={index}
              className={`relative aspect-square w-20 shrink-0 overflow-hidden rounded-[8px] border bg-white transition ${
                index === 0
                  ? "border-raw-black"
                  : "border-raw-border hover:border-raw-black"
              }`}
            >
              <img
                src={image}
                alt={`Product view ${index + 1}`}
                className="h-full w-full object-cover"
              />

              {index === 0 && (
                <span className="absolute inset-0 ring-1 ring-inset ring-raw-black" />
              )}
            </button>
          ))}
        </div>

        {/* Main Image */}
        <div className="relative order-1 aspect-[4/5] overflow-hidden rounded-[10px] bg-white lg:order-2">
          <img
            src={images[0]}
            alt="Essential Oversized Tee"
            className="h-full w-full object-cover"
          />

          {/* Badge */}
          <span className="absolute left-5 top-5 bg-raw-accent px-3 py-2 text-[10px] font-black tracking-[0.12em] text-raw-black">
            BEST SELLER
          </span>

          {/* Actions */}
          <div className="absolute right-5 top-5 flex gap-2">
            <button
              aria-label="Add to favorites"
              className="flex h-11 w-11 items-center justify-center rounded-full bg-white/95 text-raw-black shadow-sm transition hover:bg-raw-accent"
            >
              <Heart size={18} strokeWidth={1.7} />
            </button>

            <button
              aria-label="Share product"
              className="flex h-11 w-11 items-center justify-center rounded-full bg-white/95 text-raw-black shadow-sm transition hover:bg-raw-accent"
            >
              <Share2 size={17} strokeWidth={1.7} />
            </button>
          </div>

          {/* Image Counter */}
          <div className="absolute bottom-5 left-5 bg-raw-black px-3 py-2 text-[10px] font-bold tracking-[0.1em] text-white">
            01 / 04
          </div>
        </div>
      </div>
    </section>
  );
}