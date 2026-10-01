import React from "react";
import { Heart, Minus, Plus, Trash2 } from "lucide-react";

const items = [
  {
    id: 1,
    name: "Essential Oversized Tee",
    category: "T-SHIRTS",
    price: 35,
    size: "M",
    color: "Washed Black",
    quantity: 1,
    image: "/products/tee.jpg",
  },
  {
    id: 2,
    name: "Heavyweight Hoodie",
    category: "HOODIES",
    price: 78,
    size: "L",
    color: "Off White",
    quantity: 2,
    image: "/products/hoodie.jpg",
  },
];

export default function CartItems() {
  return (
    <section className="bg-raw-bg">
      <div className="border-y border-raw-border">
        {/* Header */}
        <div className="hidden grid-cols-[1fr_120px_140px_120px] items-center gap-6 border-b border-raw-border px-5 py-4 text-[9px] font-bold tracking-[0.14em] text-raw-muted md:grid">
          <span>PRODUCT</span>
          <span>PRICE</span>
          <span>QUANTITY</span>
          <span className="text-right">TOTAL</span>
        </div>

        {/* Items */}
        <div>
          {items.map((item) => (
            <article
              key={item.id}
              className="border-b border-raw-border p-5 last:border-b-0 md:px-5 md:py-6"
            >
              <div className="grid gap-5 md:grid-cols-[1fr_120px_140px_120px] md:items-center md:gap-6">
                {/* Product */}
                <div className="flex gap-4">
                  <div className="h-32 w-24 shrink-0 overflow-hidden rounded-[8px] bg-white sm:h-36 sm:w-28">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="h-full w-full object-cover"
                    />
                  </div>

                  <div className="flex min-w-0 flex-1 flex-col justify-between py-1">
                    <div>
                      <p className="text-[9px] font-bold tracking-[0.14em] text-raw-muted">
                        {item.category}
                      </p>

                      <h3 className="mt-1.5 text-sm font-bold sm:text-base">
                        {item.name}
                      </h3>

                      <p className="mt-2 text-xs text-raw-muted">
                        Color: {item.color}
                      </p>

                      <p className="mt-1 text-xs text-raw-muted">
                        Size: {item.size}
                      </p>
                    </div>

                    {/* Mobile Price */}
                    <div className="mt-4 flex items-center justify-between md:hidden">
                      <span className="text-sm font-bold">
                        ${item.price.toFixed(2)}
                      </span>

                      <div className="flex items-center gap-2">
                        <button
                          aria-label="Add to favorites"
                          className="flex h-9 w-9 items-center justify-center rounded-full border border-raw-border bg-white transition hover:border-raw-black"
                        >
                          <Heart size={15} strokeWidth={1.7} />
                        </button>

                        <button
                          aria-label="Remove item"
                          className="flex h-9 w-9 items-center justify-center rounded-full border border-raw-border bg-white text-raw-muted transition hover:border-raw-danger hover:text-raw-danger"
                        >
                          <Trash2 size={15} strokeWidth={1.7} />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Desktop Price */}
                <div className="hidden md:block">
                  <p className="text-sm font-semibold">
                    ${item.price.toFixed(2)}
                  </p>
                </div>

                {/* Quantity */}
                <div>
                  <p className="mb-2 text-[9px] font-bold tracking-[0.12em] text-raw-muted md:hidden">
                    QUANTITY
                  </p>

                  <div className="flex h-10 w-fit items-center border border-raw-border bg-white">
                    <button className="flex h-full w-9 items-center justify-center text-raw-muted transition hover:text-raw-black">
                      <Minus size={14} />
                    </button>

                    <span className="flex w-9 justify-center text-xs font-bold">
                      {item.quantity}
                    </span>

                    <button className="flex h-full w-9 items-center justify-center text-raw-muted transition hover:text-raw-black">
                      <Plus size={14} />
                    </button>
                  </div>
                </div>

                {/* Total */}
                <div className="flex items-center justify-between md:block md:text-right">
                  <div>
                    <p className="text-[9px] font-bold tracking-[0.12em] text-raw-muted md:hidden">
                      TOTAL
                    </p>

                    <p className="mt-1 text-sm font-bold">
                      ${(item.price * item.quantity).toFixed(2)}
                    </p>
                  </div>

                  <div className="hidden items-center justify-end gap-2 md:flex">
                    <button
                      aria-label="Add to favorites"
                      className="flex h-8 w-8 items-center justify-center rounded-full border border-raw-border transition hover:border-raw-black"
                    >
                      <Heart size={14} strokeWidth={1.7} />
                    </button>

                    <button
                      aria-label="Remove item"
                      className="flex h-8 w-8 items-center justify-center rounded-full border border-raw-border text-raw-muted transition hover:border-raw-danger hover:text-raw-danger"
                    >
                      <Trash2 size={14} strokeWidth={1.7} />
                    </button>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* Bottom Actions */}
      <div className="flex flex-col gap-4 pt-6 sm:flex-row sm:items-center sm:justify-between">
        <button className="w-fit text-[10px] font-black tracking-[0.12em] transition hover:text-raw-muted">
          ← CONTINUE SHOPPING
        </button>

        <button className="w-fit text-[10px] font-bold tracking-[0.12em] text-raw-muted transition hover:text-raw-black">
          CLEAR CART
        </button>
      </div>
    </section>
  );
}
