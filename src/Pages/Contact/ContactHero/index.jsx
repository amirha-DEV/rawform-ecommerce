import React from "react";
import { ArrowDown } from "lucide-react";

export default function ContactHero() {
  return (
    <section className="border-b border-raw-border bg-raw-bg px-6 py-16 md:px-8 md:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 lg:grid-cols-[1fr_0.7fr] lg:items-end">
          <div>
            <p className="text-[10px] font-bold tracking-[0.2em] text-raw-muted">
              RAWFORM / CONTACT
            </p>

            <h1 className="mt-5 text-5xl font-black leading-[0.9] tracking-[-0.07em] sm:text-6xl md:text-7xl lg:text-8xl">
              LET'S
              <br />
              TALK.
            </h1>
          </div>

          <div className="lg:pb-2">
            <p className="max-w-md text-sm leading-7 text-raw-muted md:text-base">
              Questions about an order, product or just want to say hello? We're
              here to help.
            </p>

            <div className="mt-8 flex items-center gap-3 text-[10px] font-black tracking-[0.14em]">
              <span className="h-px w-10 bg-raw-black" />
              WE'RE LISTENING.
            </div>
          </div>
        </div>

        <div className="mt-12 flex items-center justify-between border-t border-raw-border pt-6 md:mt-20">
          <span className="text-[9px] font-bold tracking-[0.16em] text-raw-muted">
            RAWFORM / 002
          </span>

          <span className="flex items-center gap-2 text-[9px] font-bold tracking-[0.14em] text-raw-muted">
            GET IN TOUCH
            <ArrowDown size={13} />
          </span>
        </div>
      </div>
    </section>
  );
}
