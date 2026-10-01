import React from "react";
import { ArrowRight } from "lucide-react";

export default function ContactForm() {
  return (
    <section className="bg-white px-6 py-16 md:px-8 md:py-24">
      <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
        {/* Intro */}
        <div>
          <p className="text-[10px] font-bold tracking-[0.2em] text-raw-muted">
            SEND A MESSAGE
          </p>

          <h2 className="mt-4 text-4xl font-black leading-[0.95] tracking-[-0.06em] sm:text-5xl">
            DROP US
            <br />A LINE.
          </h2>

          <p className="mt-6 max-w-sm text-sm leading-7 text-raw-muted">
            Fill out the form and tell us what you need. Whether it's a question
            about sizing, an order or just saying hello, we're listening.
          </p>
        </div>

        {/* Form */}
        <form className="space-y-7">
          <div className="grid gap-7 sm:grid-cols-2">
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
                placeholder="Your first name"
                className="mt-3 w-full border-b border-raw-border bg-transparent px-0 py-3 text-sm outline-none transition placeholder:text-raw-muted focus:border-raw-black"
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
                placeholder="Your last name"
                className="mt-3 w-full border-b border-raw-border bg-transparent px-0 py-3 text-sm outline-none transition placeholder:text-raw-muted focus:border-raw-black"
              />
            </div>
          </div>

          <div>
            <label
              htmlFor="email"
              className="text-[9px] font-black tracking-[0.16em]"
            >
              EMAIL
            </label>

            <input
              id="email"
              type="email"
              placeholder="you@example.com"
              className="mt-3 w-full border-b border-raw-border bg-transparent px-0 py-3 text-sm outline-none transition placeholder:text-raw-muted focus:border-raw-black"
            />
          </div>

          <div>
            <label
              htmlFor="subject"
              className="text-[9px] font-black tracking-[0.16em]"
            >
              SUBJECT
            </label>

            <select
              id="subject"
              defaultValue=""
              className="mt-3 w-full border-b border-raw-border bg-transparent px-0 py-3 text-sm outline-none transition focus:border-raw-black"
            >
              <option value="" disabled>
                Select a subject
              </option>
              <option value="order">Order Support</option>
              <option value="product">Product Question</option>
              <option value="shipping">Shipping</option>
              <option value="returns">Returns & Exchanges</option>
              <option value="other">Other</option>
            </select>
          </div>

          <div>
            <label
              htmlFor="message"
              className="text-[9px] font-black tracking-[0.16em]"
            >
              MESSAGE
            </label>

            <textarea
              id="message"
              rows="5"
              placeholder="Write your message..."
              className="mt-3 w-full resize-none border-b border-raw-border bg-transparent px-0 py-3 text-sm outline-none transition placeholder:text-raw-muted focus:border-raw-black"
            />
          </div>

          <button
            type="button"
            className="group flex w-full items-center justify-between bg-raw-black px-6 py-4 text-[10px] font-black tracking-[0.14em] text-white transition hover:bg-raw-muted sm:w-auto sm:min-w-56"
          >
            SEND MESSAGE
            <ArrowRight
              size={16}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </button>
        </form>
      </div>
    </section>
  );
}
