import React from "react";
import { ArrowRight, ArrowUpRight, Heart, ShoppingBag } from "lucide-react";

const products = [
  {
    id: 1,
    name: "Essential Oversized Tee",
    category: "T-SHIRTS",
    price: "$35.00",
    image: "/products/tee.jpg",
    badge: "BEST SELLER",
  },
  {
    id: 2,
    name: "Heavyweight Hoodie",
    category: "HOODIES",
    price: "$78.00",
    image: "/products/hoodie.jpg",
    badge: "NEW DROP",
  },
  {
    id: 3,
    name: "Utility Cargo Pants",
    category: "PANTS",
    price: "$89.00",
    image: "/products/cargo.jpg",
    badge: null,
  },
  {
    id: 4,
    name: "Classic Street Sneakers",
    category: "FOOTWEAR",
    price: "$120.00",
    image: "/products/sneakers.jpg",
    badge: "LIMITED",
  },
];

export default function ProductSection() {
  return (
    <section className="bg-raw-bg px-6 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="mb-10 flex flex-col justify-between gap-6 sm:flex-row sm:items-end md:mb-12">
          <div>
            <div className="mb-4 flex items-center gap-2">
              <span className="h-2 w-2 bg-raw-accent" />
              <span className="text-[10px] font-bold tracking-[0.2em] text-raw-muted">
                CURATED FOR YOU
              </span>
            </div>

            <h2 className="text-4xl font-black tracking-[-0.06em] sm:text-5xl md:text-6xl">
              THE LATEST DROP<span className="text-raw-muted">.</span>
            </h2>

            <p className="mt-4 max-w-md text-sm leading-6 text-raw-muted">
              Everyday essentials with a sharper point of view. Discover the
              latest pieces from RAWFORM.
            </p>
          </div>

          <button className="group inline-flex w-fit items-center gap-3 border-b border-raw-black pb-2 text-xs font-bold tracking-wide">
            VIEW ALL PRODUCTS
            <ArrowUpRight
              size={16}
              className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
            />
          </button>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-2 gap-x-3 gap-y-8 sm:gap-x-5 lg:grid-cols-4 lg:gap-6">
          {products.map((product) => (
            <article key={product.id} className="group min-w-0">
              {/* Image */}
              <div className="relative aspect-[3/4] overflow-hidden rounded-[10px] bg-white">
                <img
                  src={product.image}
                  alt={product.name}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                />

                {/* Badge */}
                {product.badge && (
                  <span className="absolute left-3 top-3 bg-white px-2 py-1 text-[9px] font-bold tracking-wide text-raw-black sm:left-4 sm:top-4">
                    {product.badge}
                  </span>
                )}

                {/* Favorite */}
                <button
                  aria-label={`Add ${product.name} to favorites`}
                  className="absolute right-3 top-3 flex h-9 w-9 items-center justify-center rounded-full bg-white/90 transition hover:bg-raw-accent sm:right-4 sm:top-4"
                >
                  <Heart size={16} strokeWidth={1.7} />
                </button>

                {/* Add to Cart */}
                <button className="absolute bottom-3 left-3 right-3 flex items-center justify-center gap-2 bg-raw-black py-3 text-[10px] font-bold text-white transition hover:bg-raw-accent hover:text-raw-black sm:bottom-4 sm:left-4 sm:right-4 sm:text-xs">
                  <ShoppingBag size={15} />
                  ADD TO CART
                </button>
              </div>

              {/* Product Info */}
              <div className="mt-4 flex items-start justify-between gap-2">
                <div className="min-w-0">
                  <p className="text-[9px] font-semibold tracking-[0.14em] text-raw-muted sm:text-[10px]">
                    {product.category}
                  </p>

                  <h3 className="mt-2 text-xs font-semibold leading-5 sm:text-sm">
                    {product.name}
                  </h3>
                </div>

                <p className="shrink-0 text-xs font-bold sm:text-sm">
                  {product.price}
                </p>
              </div>
            </article>
          ))}
        </div>

        {/* Bottom Link */}
        <div className="mt-12 flex justify-center md:mt-16">
          <button className="group inline-flex items-center gap-3 border border-raw-black px-7 py-4 text-xs font-bold transition hover:bg-raw-black hover:text-white">
            EXPLORE THE COLLECTION
            <ArrowRight
              size={16}
              className="transition-transform group-hover:translate-x-1"
            />
          </button>
        </div>
      </div>
    </section>
  );
}
