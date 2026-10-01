import React from "react";
import { ArrowUpRight, Heart, ShoppingBag } from "lucide-react";

const products = [
  {
    id: 1,
    name: "Essential Oversized Tee",
    category: "T-SHIRTS",
    price: "$35.00",
    oldPrice: null,
    badge: "BEST SELLER",
    image: "/products/tee.jpg",
    hoverImage: "/products/tee-hover.jpg",
  },
  {
    id: 2,
    name: "Heavyweight Hoodie",
    category: "HOODIES",
    price: "$68.00",
    oldPrice: "$78.00",
    badge: "SALE",
    image: "/products/hoodie.jpg",
    hoverImage: "/products/hoodie-hover.jpg",
  },
  {
    id: 3,
    name: "Utility Cargo Pants",
    category: "BOTTOMS",
    price: "$89.00",
    oldPrice: null,
    badge: "NEW",
    image: "/products/cargo.jpg",
    hoverImage: "/products/cargo-hover.jpg",
  },
  {
    id: 4,
    name: "Classic Street Sneakers",
    category: "FOOTWEAR",
    price: "$120.00",
    oldPrice: null,
    badge: null,
    image: "/products/sneakers.jpg",
    hoverImage: "/products/sneakers-hover.jpg",
  },
  {
    id: 5,
    name: "Core Boxy Sweatshirt",
    category: "SWEATSHIRTS",
    price: "$62.00",
    oldPrice: null,
    badge: "NEW",
    image: "/products/sweatshirt.jpg",
    hoverImage: "/products/sweatshirt-hover.jpg",
  },
  {
    id: 6,
    name: "Raw Denim Jeans",
    category: "JEANS",
    price: "$82.00",
    oldPrice: "$95.00",
    badge: "SALE",
    image: "/products/jeans.jpg",
    hoverImage: "/products/jeans-hover.jpg",
  },
  {
    id: 7,
    name: "Essential Bomber Jacket",
    category: "JACKETS",
    price: "$135.00",
    oldPrice: null,
    badge: "LIMITED",
    image: "/products/jacket.jpg",
    hoverImage: "/products/jacket-hover.jpg",
  },
  {
    id: 8,
    name: "RAWFORM Signature Cap",
    category: "ACCESSORIES",
    price: "$28.00",
    oldPrice: null,
    badge: null,
    image: "/products/cap.jpg",
    hoverImage: "/products/cap-hover.jpg",
  },
];

export default function ProductGrid() {
  return (
    <section className="bg-raw-bg px-6 py-10 md:px-8 md:py-14">
      <div className="mx-auto max-w-7xl">
        {/* Grid Header */}
        <div className="mb-8 flex items-center justify-between">
          <p className="text-[10px] font-bold tracking-[0.15em] text-raw-muted">
            SHOWING 8 OF 48 PRODUCTS
          </p>

          <button className="group hidden items-center gap-2 text-[10px] font-bold tracking-[0.15em] sm:flex">
            VIEW COLLECTION
            <ArrowUpRight
              size={14}
              className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
            />
          </button>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-2 gap-x-3 gap-y-9 sm:gap-x-5 md:grid-cols-3 lg:grid-cols-4 lg:gap-x-6 lg:gap-y-12">
          {products.map((product) => (
            <article key={product.id} className="group min-w-0">
              {/* Product Image */}
              <div className="relative aspect-[3/4] overflow-hidden rounded-[10px] bg-white">
                {/* Main Image */}
                <img
                  src={product.image}
                  alt={product.name}
                  className="absolute inset-0 h-full w-full object-cover transition-opacity duration-500 group-hover:opacity-0"
                />

                {/* Hover Image */}
                <img
                  src={product.hoverImage}
                  alt=""
                  className="absolute inset-0 h-full w-full object-cover opacity-0 transition-transform duration-700 group-hover:scale-105 group-hover:opacity-100"
                />

                {/* Badge */}
                {product.badge && (
                  <span
                    className={`absolute left-3 top-3 z-10 px-2 py-1 text-[9px] font-black tracking-[0.08em] sm:left-4 sm:top-4 ${
                      product.badge === "SALE"
                        ? "bg-raw-danger text-white"
                        : product.badge === "NEW"
                          ? "bg-raw-accent text-raw-black"
                          : "bg-white text-raw-black"
                    }`}
                  >
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

                {/* Add To Cart */}
                <button className="absolute bottom-3 left-3 right-3 z-10 flex translate-y-2 items-center justify-center gap-2 bg-raw-black py-3 text-[9px] font-black tracking-[0.08em] text-white opacity-0 transition-all duration-300 hover:bg-raw-accent hover:text-raw-black group-hover:translate-y-0 group-hover:opacity-100 sm:bottom-4 sm:left-4 sm:right-4 sm:text-[10px]">
                  <ShoppingBag size={14} strokeWidth={1.8} />
                  ADD TO CART
                </button>
              </div>

              {/* Product Information */}
              <div className="mt-4">
                <div className="flex items-start justify-between gap-3">
                  <div className="min-w-0">
                    <p className="text-[9px] font-bold tracking-[0.14em] text-raw-muted">
                      {product.category}
                    </p>

                    <h3 className="mt-1.5 truncate text-xs font-semibold sm:text-sm">
                      {product.name}
                    </h3>
                  </div>

                  {/* Price */}
                  <div className="flex shrink-0 flex-col items-end">
                    <span className="text-xs font-bold sm:text-sm">
                      {product.price}
                    </span>

                    {product.oldPrice && (
                      <span className="mt-0.5 text-[10px] text-raw-muted line-through">
                        {product.oldPrice}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Pagination */}
        <div className="mt-16 border-t border-raw-border pt-8">
          <div className="flex items-center justify-between">
            <button className="text-[10px] font-bold tracking-[0.12em] text-raw-muted transition hover:text-raw-black">
              ← PREVIOUS
            </button>

            <div className="flex items-center gap-2">
              <button className="flex h-9 w-9 items-center justify-center bg-raw-black text-xs font-bold text-white">
                01
              </button>

              <button className="flex h-9 w-9 items-center justify-center text-xs font-bold text-raw-muted transition hover:bg-white hover:text-raw-black">
                02
              </button>

              <button className="flex h-9 w-9 items-center justify-center text-xs font-bold text-raw-muted transition hover:bg-white hover:text-raw-black">
                03
              </button>

              <span className="px-1 text-xs text-raw-muted">...</span>

              <button className="flex h-9 w-9 items-center justify-center text-xs font-bold text-raw-muted transition hover:bg-white hover:text-raw-black">
                06
              </button>
            </div>

            <button className="text-[10px] font-bold tracking-[0.12em] text-raw-black transition hover:text-raw-muted">
              NEXT →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
