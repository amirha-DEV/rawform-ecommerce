import React from "react";
import { ArrowLeft, PackageCheck } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function OrderHeader() {
  const navigate = useNavigate();

  return (
    <section className="border-b border-raw-border bg-raw-bg px-6 py-10 md:px-8 md:py-14">
      <div className="mx-auto max-w-6xl">
        <button
          type="button"
          onClick={() => navigate("/orders")}
          className="group flex items-center gap-2 text-[9px] font-black tracking-[0.14em] text-raw-muted transition hover:text-raw-black"
        >
          <ArrowLeft
            size={14}
            className="transition-transform duration-300 group-hover:-translate-x-1"
          />
          BACK TO ORDERS
        </button>

        <div className="mt-8 flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-[10px] font-bold tracking-[0.2em] text-raw-muted">
              ORDER DETAILS
            </p>

            <h1 className="mt-3 text-4xl font-black tracking-[-0.06em] sm:text-5xl">
              #RF-1024
            </h1>

            <p className="mt-2 text-xs text-raw-muted">
              Placed on September 28, 2026
            </p>
          </div>

          <div className="flex items-center gap-2 border border-raw-border bg-white px-4 py-2.5">
            <PackageCheck size={16} strokeWidth={1.7} />

            <span className="text-[9px] font-black tracking-[0.13em]">
              DELIVERED
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
