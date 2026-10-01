import React from "react";
import { Clock3, Mail, MapPin } from "lucide-react";

const contactItems = [
  {
    icon: Mail,
    label: "EMAIL",
    value: "hello@rawform.com",
  },
  {
    icon: MapPin,
    label: "STUDIO",
    value: "Tehran, Iran",
  },
  {
    icon: Clock3,
    label: "RESPONSE TIME",
    value: "Within 24–48 hours",
  },
];

export default function ContactInfo() {
  return (
    <section className="border-t border-raw-border bg-raw-bg px-6 py-16 md:px-8 md:py-20">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          {contactItems.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.label}
                className="border-b border-raw-border pb-7 md:border-b-0 md:border-l md:pl-7 md:first:border-l-0 md:first:pl-0"
              >
                <Icon size={20} strokeWidth={1.6} />

                <p className="mt-7 text-[9px] font-black tracking-[0.16em] text-raw-muted">
                  {item.label}
                </p>

                <p className="mt-2 text-sm font-bold">{item.value}</p>
              </div>
            );
          })}

          <div className="md:border-l md:border-raw-border md:pl-7">
            {/* <Instagram size={20} strokeWidth={1.6} /> */}

            <p className="mt-7 text-[9px] font-black tracking-[0.16em] text-raw-muted">
              FOLLOW
            </p>

            <p className="mt-2 text-sm font-bold">@rawform</p>
          </div>
        </div>
      </div>
    </section>
  );
}
