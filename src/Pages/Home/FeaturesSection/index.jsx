import React from "react";
import {
  BadgeCheck,
  RotateCcw,
  ShieldCheck,
  Truck,
} from "lucide-react";

const features = [
  {
    id: 1,
    icon: BadgeCheck,
    title: "QUALITY FIRST",
    description:
      "Carefully selected materials and details made for everyday wear.",
  },
  {
    id: 2,
    icon: Truck,
    title: "FAST SHIPPING",
    description:
      "Your order is packed carefully and shipped as soon as possible.",
  },
  {
    id: 3,
    icon: RotateCcw,
    title: "EASY RETURNS",
    description:
      "Changed your mind? Our return process is simple and straightforward.",
  },
  {
    id: 4,
    icon: ShieldCheck,
    title: "SECURE CHECKOUT",
    description:
      "Your payment and personal information are protected at checkout.",
  },
];

export default function FeaturesSection() {
  return (
    <section className="bg-raw-bg px-6 py-16 md:px-8 md:py-20">
      <div className="mx-auto max-w-7xl">
        {/* Top Line */}
        <div className="mb-10 flex items-center justify-between border-b border-raw-border pb-5">
          <div className="flex items-center gap-2">
            <span className="h-2 w-2 bg-raw-accent" />

            <span className="text-[10px] font-bold tracking-[0.2em] text-raw-muted">
              WHY RAWFORM
            </span>
          </div>

          <span className="hidden text-[10px] font-bold tracking-[0.15em] text-raw-muted sm:block">
            BUILT WITH INTENTION
          </span>
        </div>

        {/* Features */}
        <div className="grid grid-cols-1 divide-y divide-raw-border sm:grid-cols-2 sm:divide-x sm:divide-y-0 lg:grid-cols-4">
          {features.map((feature, index) => {
            const Icon = feature.icon;

            return (
              <div
                key={feature.id}
                className={`group px-0 py-7 sm:px-6 sm:py-4 lg:px-7 ${
                  index === 0 ? "lg:pl-0" : ""
                } ${
                  index === features.length - 1 ? "lg:pr-0" : ""
                }`}
              >
                {/* Icon + Number */}
                <div className="flex items-start justify-between">
                  <div className="flex h-11 w-11 items-center justify-center border border-raw-border bg-white transition-colors duration-300 group-hover:border-raw-black group-hover:bg-raw-accent">
                    <Icon size={19} strokeWidth={1.7} />
                  </div>

                  <span className="text-[10px] font-bold tracking-[0.15em] text-raw-muted">
                    0{feature.id}
                  </span>
                </div>

                {/* Content */}
                <div className="mt-7">
                  <h3 className="text-sm font-black tracking-[-0.02em]">
                    {feature.title}
                  </h3>

                  <p className="mt-3 max-w-xs text-xs leading-5 text-raw-muted">
                    {feature.description}
                  </p>
                </div>

                {/* Bottom Accent */}
                <div className="mt-7 h-[2px] w-0 bg-raw-accent transition-all duration-300 group-hover:w-10" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}