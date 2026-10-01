import React from "react";
import { Diamond, Eye, MoveUpRight, Sparkles } from "lucide-react";

const values = [
  {
    number: "01",
    icon: Eye,
    title: "INTENTIONAL",
    description:
      "Every silhouette, detail and material has a reason. Nothing is added just for noise.",
  },
  {
    number: "02",
    icon: Diamond,
    title: "QUALITY",
    description:
      "We focus on reliable materials, thoughtful construction and pieces made for everyday wear.",
  },
  {
    number: "03",
    icon: MoveUpRight,
    title: "MOVEMENT",
    description:
      "Clothing should move with you. Our pieces are designed for real life, not just the camera.",
  },
  {
    number: "04",
    icon: Sparkles,
    title: "INDIVIDUAL",
    description:
      "RAWFORM is a foundation. How you wear it, layer it and make it yours is up to you.",
  },
];

export default function ValuesSection() {
  return (
    <section className="bg-raw-bg px-6 py-16 md:px-8 md:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col justify-between gap-5 border-b border-raw-border pb-8 sm:flex-row sm:items-end">
          <div>
            <p className="text-[10px] font-bold tracking-[0.2em] text-raw-muted">
              WHAT WE BELIEVE
            </p>

            <h2 className="mt-3 text-4xl font-black tracking-[-0.06em] sm:text-5xl">
              OUR VALUES.
            </h2>
          </div>

          <p className="max-w-sm text-xs leading-6 text-raw-muted">
            The principles behind every RAWFORM collection and every piece we
            create.
          </p>
        </div>

        <div className="grid border-b border-raw-border sm:grid-cols-2 lg:grid-cols-4">
          {values.map((value) => {
            const Icon = value.icon;

            return (
              <article
                key={value.number}
                className="group border-b border-raw-border p-7 transition hover:bg-white sm:nth-[2n]:border-l lg:border-b-0 lg:border-l lg:first:border-l-0"
              >
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-black tracking-[0.15em] text-raw-muted">
                    {value.number}
                  </span>

                  <Icon
                    size={20}
                    strokeWidth={1.6}
                    className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
                  />
                </div>

                <h3 className="mt-14 text-sm font-black tracking-[0.08em]">
                  {value.title}
                </h3>

                <p className="mt-4 text-xs leading-6 text-raw-muted">
                  {value.description}
                </p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
