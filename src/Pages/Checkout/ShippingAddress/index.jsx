import React from "react";
import { Building2, MapPin } from "lucide-react";

export default function ShippingAddress() {
  return (
    <section className="rounded-[10px] border border-raw-border bg-white p-6 sm:p-8">
      <div className="mb-8">
        <p className="text-[9px] font-bold tracking-[0.16em] text-raw-muted">
          STEP 02
        </p>

        <h2 className="mt-2 text-xl font-black tracking-[-0.03em]">
          SHIPPING ADDRESS
        </h2>

        <p className="mt-2 text-xs leading-5 text-raw-muted">
          Enter the address where you want your RAWFORM order delivered.
        </p>
      </div>

      <div className="grid gap-5">
        {/* Country */}
        <div>
          <label className="mb-2 block text-[10px] font-bold tracking-[0.1em]">
            COUNTRY
          </label>

          <select
            defaultValue=""
            className="w-full appearance-none rounded-[8px] border border-raw-border bg-raw-bg px-4 py-3.5 text-sm outline-none transition focus:border-raw-black focus:bg-white"
          >
            <option value="" disabled>
              Select country
            </option>
            <option value="iran">Iran</option>
            <option value="azerbaijan">Azerbaijan</option>
            <option value="turkey">Turkey</option>
            <option value="germany">Germany</option>
            <option value="usa">United States</option>
          </select>
        </div>

        {/* Address */}
        <div>
          <label className="mb-2 block text-[10px] font-bold tracking-[0.1em]">
            STREET ADDRESS
          </label>

          <div className="relative">
            <MapPin
              size={16}
              strokeWidth={1.7}
              className="absolute left-4 top-4 text-raw-muted"
            />

            <textarea
              rows={3}
              placeholder="Street name, building number, apartment..."
              className="w-full resize-none rounded-[8px] border border-raw-border bg-raw-bg py-3.5 pl-11 pr-4 text-sm outline-none transition placeholder:text-raw-muted/60 focus:border-raw-black focus:bg-white"
            />
          </div>
        </div>

        {/* City / State */}
        <div className="grid gap-5 sm:grid-cols-2">
          <div>
            <label className="mb-2 block text-[10px] font-bold tracking-[0.1em]">
              CITY
            </label>

            <input
              type="text"
              placeholder="Baku"
              className="w-full rounded-[8px] border border-raw-border bg-raw-bg px-4 py-3.5 text-sm outline-none transition placeholder:text-raw-muted/60 focus:border-raw-black focus:bg-white"
            />
          </div>

          <div>
            <label className="mb-2 block text-[10px] font-bold tracking-[0.1em]">
              STATE / REGION
            </label>

            <input
              type="text"
              placeholder="Region"
              className="w-full rounded-[8px] border border-raw-border bg-raw-bg px-4 py-3.5 text-sm outline-none transition placeholder:text-raw-muted/60 focus:border-raw-black focus:bg-white"
            />
          </div>
        </div>

        {/* Postal Code / Apartment */}
        <div className="grid gap-5 sm:grid-cols-2">
          <div>
            <label className="mb-2 block text-[10px] font-bold tracking-[0.1em]">
              POSTAL CODE
            </label>

            <input
              type="text"
              placeholder="AZ1000"
              className="w-full rounded-[8px] border border-raw-border bg-raw-bg px-4 py-3.5 text-sm outline-none transition placeholder:text-raw-muted/60 focus:border-raw-black focus:bg-white"
            />
          </div>

          <div>
            <label className="mb-2 block text-[10px] font-bold tracking-[0.1em]">
              APARTMENT / UNIT
            </label>

            <div className="relative">
              <Building2
                size={16}
                strokeWidth={1.7}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-raw-muted"
              />

              <input
                type="text"
                placeholder="Apartment 12"
                className="w-full rounded-[8px] border border-raw-border bg-raw-bg py-3.5 pl-11 pr-4 text-sm outline-none transition placeholder:text-raw-muted/60 focus:border-raw-black focus:bg-white"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Address Notice */}
      <div className="mt-6 flex items-start gap-3 border-t border-raw-border pt-6">
        <div className="mt-0.5 h-1.5 w-1.5 shrink-0 rounded-full bg-raw-accent" />

        <p className="text-[11px] leading-5 text-raw-muted">
          Make sure your shipping address is complete and accurate to avoid
          delivery delays.
        </p>
      </div>
    </section>
  );
}
