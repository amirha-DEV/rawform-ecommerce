import React from "react";
import { Mail, MapPin, Phone, UserRound } from "lucide-react";

export default function ShippingInfo() {
  return (
    <section className="bg-white px-6 py-12 md:px-8 md:py-16">
      <div className="mx-auto max-w-6xl">
        <div className="border-b border-raw-border pb-5">
          <p className="text-[10px] font-black tracking-[0.18em]">
            SHIPPING INFORMATION
          </p>
        </div>

        <div className="mt-8 grid gap-5 md:grid-cols-2">
          <div className="border border-raw-border p-6">
            <UserRound size={18} strokeWidth={1.6} />

            <p className="mt-5 text-[9px] font-black tracking-[0.15em] text-raw-muted">
              RECIPIENT
            </p>

            <p className="mt-2 text-sm font-bold">Amirali Taghizadeh</p>
          </div>

          <div className="border border-raw-border p-6">
            <MapPin size={18} strokeWidth={1.6} />

            <p className="mt-5 text-[9px] font-black tracking-[0.15em] text-raw-muted">
              SHIPPING ADDRESS
            </p>

            <p className="mt-2 text-sm font-bold leading-6">
              Tehran, Iran
              <br />
              Example Street, No. 24
            </p>
          </div>

          <div className="border border-raw-border p-6">
            <Phone size={18} strokeWidth={1.6} />

            <p className="mt-5 text-[9px] font-black tracking-[0.15em] text-raw-muted">
              PHONE
            </p>

            <p className="mt-2 text-sm font-bold">+98 912 000 0000</p>
          </div>

          <div className="border border-raw-border p-6">
            <Mail size={18} strokeWidth={1.6} />

            <p className="mt-5 text-[9px] font-black tracking-[0.15em] text-raw-muted">
              EMAIL
            </p>

            <p className="mt-2 text-sm font-bold">amirali@example.com</p>
          </div>
        </div>
      </div>
    </section>
  );
}
