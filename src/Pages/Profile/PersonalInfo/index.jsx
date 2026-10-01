import React from "react";
import { Save } from "lucide-react";

export default function PersonalInfo() {
  return (
    <section className="bg-white px-6 py-14 md:px-8 md:py-20">
      <div className="mx-auto max-w-5xl">
        <div className="border-b border-raw-border pb-6">
          <p className="text-[10px] font-bold tracking-[0.2em] text-raw-muted">
            PERSONAL INFORMATION
          </p>

          <h2 className="mt-3 text-3xl font-black tracking-[-0.05em]">
            YOUR DETAILS.
          </h2>
        </div>

        <div className="mt-10 grid gap-x-8 gap-y-7 sm:grid-cols-2">
          <div>
            <label
              htmlFor="firstName"
              className="text-[9px] font-black tracking-[0.16em]"
            >
              FIRST NAME
            </label>

            <input
              id="firstName"
              type="text"
              defaultValue="Amirali"
              className="mt-3 w-full border-b border-raw-border bg-transparent px-0 py-3 text-sm outline-none transition focus:border-raw-black"
            />
          </div>

          <div>
            <label
              htmlFor="lastName"
              className="text-[9px] font-black tracking-[0.16em]"
            >
              LAST NAME
            </label>

            <input
              id="lastName"
              type="text"
              defaultValue="Taghizadeh"
              className="mt-3 w-full border-b border-raw-border bg-transparent px-0 py-3 text-sm outline-none transition focus:border-raw-black"
            />
          </div>

          <div>
            <label
              htmlFor="profileEmail"
              className="text-[9px] font-black tracking-[0.16em]"
            >
              EMAIL
            </label>

            <input
              id="profileEmail"
              type="email"
              defaultValue="amirali@example.com"
              className="mt-3 w-full border-b border-raw-border bg-transparent px-0 py-3 text-sm outline-none transition focus:border-raw-black"
            />
          </div>

          <div>
            <label
              htmlFor="phone"
              className="text-[9px] font-black tracking-[0.16em]"
            >
              PHONE
            </label>

            <input
              id="phone"
              type="tel"
              placeholder="+98 912 000 0000"
              className="mt-3 w-full border-b border-raw-border bg-transparent px-0 py-3 text-sm outline-none transition placeholder:text-raw-muted focus:border-raw-black"
            />
          </div>
        </div>

        <div className="mt-10">
          <label
            htmlFor="address"
            className="text-[9px] font-black tracking-[0.16em]"
          >
            ADDRESS
          </label>

          <textarea
            id="address"
            rows="3"
            placeholder="Your shipping address"
            className="mt-3 w-full resize-none border-b border-raw-border bg-transparent px-0 py-3 text-sm outline-none transition placeholder:text-raw-muted focus:border-raw-black"
          />
        </div>

        <button
          type="button"
          className="mt-10 flex items-center justify-center gap-3 bg-raw-black px-6 py-4 text-[10px] font-black tracking-[0.14em] text-white transition hover:bg-raw-muted"
        >
          <Save size={15} strokeWidth={1.8} />
          SAVE CHANGES
        </button>
      </div>
    </section>
  );
}
