import React from "react";
import {
  ArrowRight,
  CheckCircle2,
  Clock3,
  Package,
  Truck,
  XCircle,
} from "lucide-react";

const orders = [
  {
    id: "#RF-1024",
    date: "SEP 28, 2026",
    items: 3,
    total: "$184.00",
    status: "DELIVERED",
    statusType: "success",
  },
  {
    id: "#RF-1018",
    date: "SEP 21, 2026",
    items: 2,
    total: "$126.00",
    status: "SHIPPED",
    statusType: "shipping",
  },
  {
    id: "#RF-1009",
    date: "SEP 12, 2026",
    items: 1,
    total: "$68.00",
    status: "PROCESSING",
    statusType: "pending",
  },
  {
    id: "#RF-1002",
    date: "AUG 30, 2026",
    items: 4,
    total: "$241.00",
    status: "CANCELLED",
    statusType: "cancelled",
  },
];

const statusConfig = {
  success: {
    icon: CheckCircle2,
    className: "text-green-600",
  },
  shipping: {
    icon: Truck,
    className: "text-blue-600",
  },
  pending: {
    icon: Clock3,
    className: "text-orange-500",
  },
  cancelled: {
    icon: XCircle,
    className: "text-red-500",
  },
};

export default function OrdersList() {
  return (
    <section className="bg-white px-6 py-12 md:px-8 md:py-20">
      <div className="mx-auto max-w-6xl">
        <div className="flex items-center justify-between border-b border-raw-border pb-5">
          <p className="text-[10px] font-black tracking-[0.18em]">
            ORDER HISTORY
          </p>

          <p className="text-[9px] font-bold tracking-[0.12em] text-raw-muted">
            RECENT ORDERS
          </p>
        </div>

        <div className="divide-y divide-raw-border border-b border-raw-border">
          {orders.map((order) => {
            const StatusIcon = statusConfig[order.statusType].icon;

            return (
              <article key={order.id} className="group py-7">
                <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
                  {/* Order info */}
                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center bg-raw-bg">
                      <Package size={19} strokeWidth={1.6} />
                    </div>

                    <div>
                      <p className="text-sm font-black">{order.id}</p>

                      <p className="mt-1 text-[9px] font-bold tracking-[0.12em] text-raw-muted">
                        {order.date}
                      </p>
                    </div>
                  </div>

                  {/* Order details */}
                  <div className="grid grid-cols-2 gap-x-10 gap-y-4 sm:grid-cols-3 lg:min-w-[430px]">
                    <div>
                      <p className="text-[9px] font-bold tracking-[0.12em] text-raw-muted">
                        ITEMS
                      </p>

                      <p className="mt-1 text-sm font-bold">{order.items}</p>
                    </div>

                    <div>
                      <p className="text-[9px] font-bold tracking-[0.12em] text-raw-muted">
                        TOTAL
                      </p>

                      <p className="mt-1 text-sm font-bold">{order.total}</p>
                    </div>

                    <div>
                      <p className="text-[9px] font-bold tracking-[0.12em] text-raw-muted">
                        STATUS
                      </p>

                      <div
                        className={`mt-1 flex items-center gap-1.5 text-[10px] font-black ${statusConfig[order.statusType].className}`}
                      >
                        <StatusIcon size={13} strokeWidth={2} />
                        {order.status}
                      </div>
                    </div>
                  </div>

                  {/* Action */}
                  <button
                    type="button"
                    className="flex items-center justify-between gap-4 border border-raw-border px-5 py-3 text-[9px] font-black tracking-[0.13em] transition hover:border-raw-black hover:bg-raw-black hover:text-white lg:justify-center"
                  >
                    VIEW ORDER
                    <ArrowRight
                      size={14}
                      className="transition-transform duration-300 group-hover:translate-x-1"
                    />
                  </button>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
