import React from "react";
import { Check, Circle, Package, Truck } from "lucide-react";

const timeline = [
  {
    title: "ORDER PLACED",
    date: "SEP 28, 2026 · 10:42 AM",
    description: "Your order has been successfully placed.",
    completed: true,
    icon: Check,
  },
  {
    title: "PROCESSING",
    date: "SEP 28, 2026 · 12:10 PM",
    description: "Your items are being prepared.",
    completed: true,
    icon: Package,
  },
  {
    title: "SHIPPED",
    date: "SEP 29, 2026 · 09:15 AM",
    description: "Your package has left our warehouse.",
    completed: true,
    icon: Truck,
  },
  {
    title: "DELIVERED",
    date: "OCT 01, 2026 · 02:35 PM",
    description: "Your package was delivered successfully.",
    completed: true,
    icon: Check,
  },
];

export default function OrderTimeline() {
  return (
    <section className="border-t border-raw-border bg-raw-bg px-6 py-12 md:px-8 md:py-16">
      <div className="mx-auto max-w-6xl">
        <div className="border-b border-raw-border pb-5">
          <p className="text-[10px] font-black tracking-[0.18em]">
            ORDER STATUS
          </p>
        </div>

        <div className="mt-10">
          {timeline.map((item, index) => {
            const Icon = item.icon;
            const isLast = index === timeline.length - 1;

            return (
              <div
                key={item.title}
                className="relative flex gap-5 pb-10 last:pb-0"
              >
                {!isLast && (
                  <div className="absolute left-5 top-10 h-[calc(100%-18px)] w-px bg-raw-black/15" />
                )}

                <div className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-raw-black text-white">
                  <Icon size={16} strokeWidth={1.8} />
                </div>

                <div className="pt-1">
                  <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:gap-4">
                    <h3 className="text-xs font-black tracking-[0.08em]">
                      {item.title}
                    </h3>

                    <span className="text-[9px] font-bold tracking-[0.1em] text-raw-muted">
                      {item.date}
                    </span>
                  </div>

                  <p className="mt-2 text-xs leading-6 text-raw-muted">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
