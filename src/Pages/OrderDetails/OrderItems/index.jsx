import React from "react";
import { Minus, Plus } from "lucide-react";

const items = [
  {
    id: 1,
    name: "RAW HEAVY TEE",
    variant: "BLACK / L",
    price: "$58.00",
    quantity: 1,
    image: "/products/product-1.jpg",
  },
  {
    id: 2,
    name: "FORM OVERSHIRT",
    variant: "STONE / M",
    price: "$86.00",
    quantity: 1,
    image: "/products/product-2.jpg",
  },
  {
    id: 3,
    name: "RAW CAP",
    variant: "BLACK / ONE SIZE",
    price: "$40.00",
    quantity: 1,
    image: "/products/product-3.jpg",
  },
];

export default function OrderItems() {
  return (
    <section className="bg-white px-6 py-12 md:px-8 md:py-16">
      <div className="mx-auto max-w-6xl">
        <div className="border-b border-raw-border pb-5">
          <p className="text-[10px] font-black tracking-[0.18em]">
            ORDER ITEMS
          </p>
        </div>

        <div className="divide-y divide-raw-border">
          {items.map((item) => (
            <article key={item.id} className="flex gap-5 py-6 sm:gap-7">
              <div className="h-28 w-24 shrink-0 overflow-hidden bg-raw-bg sm:h-32 sm:w-28">
                <img
                  src={item.image}
                  alt={item.name}
                  className="h-full w-full object-cover"
                />
              </div>

              <div className="flex min-w-0 flex-1 flex-col justify-between gap-5 sm:flex-row sm:items-center">
                <div>
                  <h2 className="text-sm font-black tracking-[-0.02em]">
                    {item.name}
                  </h2>

                  <p className="mt-2 text-[9px] font-bold tracking-[0.12em] text-raw-muted">
                    {item.variant}
                  </p>

                  <p className="mt-3 text-sm font-bold">{item.price}</p>
                </div>

                <div className="flex items-center justify-between sm:justify-end sm:gap-10">
                  <div className="flex items-center border border-raw-border">
                    <button
                      type="button"
                      className="flex h-8 w-8 items-center justify-center text-raw-muted"
                    >
                      <Minus size={13} />
                    </button>

                    <span className="flex h-8 w-8 items-center justify-center border-x border-raw-border text-xs font-bold">
                      {item.quantity}
                    </span>

                    <button
                      type="button"
                      className="flex h-8 w-8 items-center justify-center text-raw-muted"
                    >
                      <Plus size={13} />
                    </button>
                  </div>

                  <p className="text-sm font-black">
                    ${item.quantity * parseFloat(item.price.replace("$", ""))}
                    .00
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
