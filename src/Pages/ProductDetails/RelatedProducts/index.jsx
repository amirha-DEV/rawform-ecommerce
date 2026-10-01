import React from "react";
import { ArrowUpRight, Heart, ShoppingBag } from "lucide-react";

const products = [
  {
    id: 1,
    name: "Heavyweight Hoodie",
    category: "HOODIES",
    price: "$78.00",
    image: "/products/hoodie.jpg",
    hoverImage: "/products/hoodie-hover.jpg",
    badge: "NEW DROP",
  },
  {
    id: 2,
    name: "Utility Cargo Pants",
    category: "BOTTOMS",
    price: "$89.00",
    image: "/products/cargo.jpg",
    hoverImage: "/products/cargo-hover.jpg",
    badge: null,
  },
  {
    id: 3,
    name: "Classic Street Sneakers",
    category: "FOOTWEAR",
    price: "$120.00",
    image: "/products/sneakers.jpg",
    hoverImage: "/products/sneakers-hover.jpg",
    badge: "LIMITED",
  },
  {
    id: 4,
    name: "Core Boxy Sweatshirt",
    category: "SWEATSHIRTS",
    price: "$62.00",
    image: "/products/sweatshirt.jpg",
    hoverImage: "/products/sweatshirt-hover.jpg",
    badge: null,
  },
];

export default function RelatedProducts() {
  return (
    <section className="border-t border-raw-border bg-raw-bg px-6 py-16 md:px-8 md:py-20">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="mb-10 flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-[10px] font-bold tracking-[0.18em] text-raw-muted">
              RAWFORM / RECOMMENDED
            </p>

            <h2 className="mt-3 text-3xl font-black tracking-[-0.04em] sm:text-4xl">
              YOU MAY ALSO LIKE.
            </h2>

            <p className="mt-3 max-w-md text-sm leading-6 text-raw-muted">
              Complete your everyday uniform with pieces selected to work with
              this product.
            </p>
          </div>

          <button className="group inline-flex w-fit items-center gap-2 text-[10px] font-black tracking-[0.12em]">
            VIEW ALL PRODUCTS
            <ArrowUpRight
              size={15}
              className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
            />
          </button>
        </div>

        {/* Products */}
        <div className="grid grid-cols-2 gap-x-3 gap-y-9 sm:gap-x-5 lg:grid-cols-4 lg:gap-x-6">
          {products.map((product) => (
            <article key={product.id} className="group min-w-0">
              {/* Image */}
              <div className="relative aspect-[3/4] overflow-hidden rounded-[10px] bg-white">
                <img
                  src={product.image}
                  alt={product.name}
                  className="absolute inset-0 h-full w-full object-cover transition-opacity duration-500 group-hover:opacity-0"
                />

                <img
                  src={product.hoverImage}
                  alt=""
                  className="absolute inset-0 h-full w-full object-cover opacity-0 transition-all duration-700 group-hover:scale-105 group-hover:opacity-100"
                />

                {/* Badge */}
                {product.badge && (
                  <span className="absolute left-3 top-3 z-10 bg-white px-2 py-1 text-[9px] font-black tracking-[0.08em] text-raw-black sm:left-4 sm:top-4">
                    {product.badge}
                  </span>
                )}

                {/* Favorite */}
                <button
                  aria-label={`Add ${product.name} to favorites`}
                  className="absolute right-3 top-3 z-10 flex h-9 w-9 items-center justify-center rounded-full bg-white/90 transition-all duration-300 hover:bg-raw-accent sm:right-4 sm:top-4"
                >
                  <Heart size={16} strokeWidth={1.7} />
                </button>

                {/* Add to Cart */}
                <button className="absolute bottom-3 left-3 right-3 z-10 flex translate-y-2 items-center justify-center gap-2 bg-raw-black py-3 text-[9px] font-black tracking-[0.08em] text-white opacity-0 transition-all duration-300 hover:bg-raw-accent hover:text-raw-black group-hover:translate-y-0 group-hover:opacity-100 sm:bottom-4 sm:left-4 sm:right-4 sm:text-[10px]">
                  <ShoppingBag size={14} strokeWidth={1.8} />
                  ADD TO CART
                </button>
              </div>

              {/* Info */}
              <div className="mt-4">
                <p className="text-[9px] font-bold tracking-[0.14em] text-raw-muted">
                  {product.category}
                </p>

                <div className="mt-1.5 flex items-start justify-between gap-3">
                  <h3 className="min-w-0 truncate text-xs font-semibold sm:text-sm">
                    {product.name}
                  </h3>

                  <span className="shrink-0 text-xs font-bold sm:text-sm">
                    {product.price}
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Bottom Line */}
        <div className="mt-14 flex items-center justify-between border-t border-raw-border pt-6">
          <p className="text-[9px] font-bold tracking-[0.16em] text-raw-muted">
            CLEAN FORM. RAW ATTITUDE.
          </p>

          <span className="text-[9px] font-bold tracking-[0.16em] text-raw-muted">
            04 / 04
          </span>
        </div>
      </div>
    </section>
  );
}
