import React from "react";
import { CalendarDays, MapPin, Package, Truck } from "lucide-react";

export default function OrderInfo() {
  return (
    <section className="border-t border-raw-border bg-white px-6 py-12 md:px-8 md:py-16">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-8 lg:grid-cols-[1fr_380px] lg:gap-14">
          {/* Order Details */}
          <div className="rounded-[10px] border border-raw-border bg-raw-bg p-6 sm:p-8">
            <div className="flex items-start justify-between gap-4 border-b border-raw-border pb-6">
              <div>
                <p className="text-[9px] font-bold tracking-[0.16em] text-raw-muted">
                  ORDER DETAILS
                </p>

                <h2 className="mt-2 text-xl font-black tracking-[-0.03em]">
                  YOUR ORDER
                </h2>
              </div>

              <span className="rounded-full bg-raw-accent px-3 py-1.5 text-[9px] font-black tracking-[0.08em]">
                CONFIRMED
              </span>
            </div>

            {/* Product 1 */}
            <div className="flex gap-4 border-b border-raw-border py-6">
              <div className="h-24 w-20 shrink-0 overflow-hidden rounded-[8px] bg-white">
                <img
                  src="/products/tee.jpg"
                  alt="Essential Oversized Tee"
                  className="h-full w-full object-cover"
                />
              </div>

              <div className="min-w-0 flex-1">
                <p className="text-[9px] font-bold tracking-[0.12em] text-raw-muted">
                  T-SHIRTS
                </p>

                <h3 className="mt-1 text-sm font-bold">
                  Essential Oversized Tee
                </h3>

                <p className="mt-2 text-xs text-raw-muted">
                  Size M · Washed Black
                </p>

                <p className="mt-1 text-xs text-raw-muted">Qty 1</p>
              </div>

              <span className="shrink-0 text-sm font-bold">$35.00</span>
            </div>

            {/* Product 2 */}
            <div className="flex gap-4 border-b border-raw-border py-6">
              <div className="h-24 w-20 shrink-0 overflow-hidden rounded-[8px] bg-white">
                <img
                  src="/products/hoodie.jpg"
                  alt="Heavyweight Hoodie"
                  className="h-full w-full object-cover"
                />
              </div>

              <div className="min-w-0 flex-1">
                <p className="text-[9px] font-bold tracking-[0.12em] text-raw-muted">
                  HOODIES
                </p>

                <h3 className="mt-1 text-sm font-bold">Heavyweight Hoodie</h3>

                <p className="mt-2 text-xs text-raw-muted">
                  Size L · Off White
                </p>

                <p className="mt-1 text-xs text-raw-muted">Qty 2</p>
              </div>

              <span className="shrink-0 text-sm font-bold">$156.00</span>
            </div>

            {/* Order Meta */}
            <div className="grid gap-5 pt-6 sm:grid-cols-3">
              <div className="flex items-start gap-3">
                <CalendarDays
                  size={17}
                  strokeWidth={1.7}
                  className="mt-0.5 text-raw-muted"
                />

                <div>
                  <p className="text-[9px] font-bold tracking-[0.1em] text-raw-muted">
                    ORDER DATE
                  </p>

                  <p className="mt-1 text-xs font-semibold">October 1, 2026</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Package
                  size={17}
                  strokeWidth={1.7}
                  className="mt-0.5 text-raw-muted"
                />

                <div>
                  <p className="text-[9px] font-bold tracking-[0.1em] text-raw-muted">
                    ITEMS
                  </p>

                  <p className="mt-1 text-xs font-semibold">3 Items</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Truck
                  size={17}
                  strokeWidth={1.7}
                  className="mt-0.5 text-raw-muted"
                />

                <div>
                  <p className="text-[9px] font-bold tracking-[0.1em] text-raw-muted">
                    DELIVERY
                  </p>

                  <p className="mt-1 text-xs font-semibold">
                    5–7 Business Days
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Shipping + Summary */}
          <div className="space-y-6">
            {/* Shipping Address */}
            <div className="rounded-[10px] border border-raw-border bg-raw-bg p-6 sm:p-7">
              <div className="flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-[8px] bg-white">
                  <MapPin size={17} strokeWidth={1.7} />
                </div>

                <div>
                  <p className="text-[9px] font-bold tracking-[0.14em] text-raw-muted">
                    SHIPPING ADDRESS
                  </p>

                  <h3 className="mt-1 text-sm font-bold">DELIVERY TO</h3>
                </div>
              </div>

              <div className="mt-5 border-t border-raw-border pt-5 text-xs leading-6 text-raw-muted">
                <p className="font-semibold text-raw-black">
                  Amirali Taghizadeh
                </p>

                <p>12 Example Street, Apartment 4</p>
                <p>Baku, Azerbaijan</p>
                <p>AZ1000</p>
              </div>
            </div>

            {/* Price Summary */}
            <div className="rounded-[10px] border border-raw-border bg-raw-bg p-6 sm:p-7">
              <p className="text-[9px] font-bold tracking-[0.14em] text-raw-muted">
                PAYMENT SUMMARY
              </p>

              <div className="mt-5 space-y-3 border-b border-raw-border pb-5 text-sm">
                <div className="flex items-center justify-between">
                  <span className="text-raw-muted">Subtotal</span>
                  <span className="font-semibold">$191.00</span>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-raw-muted">Shipping</span>
                  <span className="font-semibold text-raw-success">FREE</span>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-raw-muted">Discount</span>
                  <span className="font-semibold text-raw-danger">-$10.00</span>
                </div>
              </div>

              <div className="flex items-end justify-between pt-5">
                <span className="text-[9px] font-bold tracking-[0.14em] text-raw-muted">
                  TOTAL
                </span>

                <span className="text-2xl font-black tracking-[-0.04em]">
                  $181.00
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
