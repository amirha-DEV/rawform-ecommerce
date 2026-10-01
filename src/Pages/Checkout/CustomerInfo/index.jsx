import React from "react";
import { Mail, Phone, UserRound } from "lucide-react";

export default function CustomerInfo() {
  return (
    <section className="rounded-[10px] border border-raw-border bg-white p-6 sm:p-8">
      <div className="mb-8">
        <p className="text-[9px] font-bold tracking-[0.16em] text-raw-muted">
          STEP 01
        </p>

        <h2 className="mt-2 text-xl font-black tracking-[-0.03em]">
          CUSTOMER INFORMATION
        </h2>

        <p className="mt-2 text-xs leading-5 text-raw-muted">
          Enter your contact information so we can keep you updated about your
          order.
        </p>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        {/* First Name */}
        <div>
          <label className="mb-2 block text-[10px] font-bold tracking-[0.1em]">
            FIRST NAME
          </label>

          <div className="relative">
            <UserRound
              size={16}
              strokeWidth={1.7}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-raw-muted"
            />

            <input
              type="text"
              placeholder="Amirali"
              className="w-full rounded-[8px] border border-raw-border bg-raw-bg py-3.5 pl-11 pr-4 text-sm outline-none transition placeholder:text-raw-muted/60 focus:border-raw-black focus:bg-white"
            />
          </div>
        </div>

        {/* Last Name */}
        <div>
          <label className="mb-2 block text-[10px] font-bold tracking-[0.1em]">
            LAST NAME
          </label>

          <input
            type="text"
            placeholder="Taghizadeh"
            className="w-full rounded-[8px] border border-raw-border bg-raw-bg px-4 py-3.5 text-sm outline-none transition placeholder:text-raw-muted/60 focus:border-raw-black focus:bg-white"
          />
        </div>

        {/* Email */}
        <div>
          <label className="mb-2 block text-[10px] font-bold tracking-[0.1em]">
            EMAIL ADDRESS
          </label>

          <div className="relative">
            <Mail
              size={16}
              strokeWidth={1.7}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-raw-muted"
            />

            <input
              type="email"
              placeholder="you@example.com"
              className="w-full rounded-[8px] border border-raw-border bg-raw-bg py-3.5 pl-11 pr-4 text-sm outline-none transition placeholder:text-raw-muted/60 focus:border-raw-black focus:bg-white"
            />
          </div>
        </div>

        {/* Phone */}
        <div>
          <label className="mb-2 block text-[10px] font-bold tracking-[0.1em]">
            PHONE NUMBER
          </label>

          <div className="relative">
            <Phone
              size={16}
              strokeWidth={1.7}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-raw-muted"
            />

            <input
              type="tel"
              placeholder="+98 912 000 0000"
              className="w-full rounded-[8px] border border-raw-border bg-raw-bg py-3.5 pl-11 pr-4 text-sm outline-none transition placeholder:text-raw-muted/60 focus:border-raw-black focus:bg-white"
            />
          </div>
        </div>
      </div>

      {/* Account Notice */}
      <div className="mt-6 flex items-start gap-3 border-t border-raw-border pt-6">
        <div className="mt-0.5 h-1.5 w-1.5 shrink-0 rounded-full bg-raw-accent" />

        <p className="text-[11px] leading-5 text-raw-muted">
          We'll use this information to contact you about your order and
          delivery updates.
        </p>
      </div>
    </section>
  );
}
