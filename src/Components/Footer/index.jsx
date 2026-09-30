import { ArrowUpRight } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-raw-border bg-raw-black text-white">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        {/* Top */}
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="lg:col-span-2">
            <h2 className="text-3xl font-extrabold tracking-[-0.05em]">
              RAWFORM
            </h2>

            <p className="mt-4 max-w-sm text-sm leading-6 text-white/60">
              CLEAN FORM. RAW ATTITUDE.
              <br />
              Modern streetwear built for everyday movement.
            </p>

            <button className="mt-7 inline-flex items-center gap-2 border-b border-white pb-1 text-sm font-semibold">
              SHOP NOW
              <ArrowUpRight size={16} />
            </button>
          </div>

          {/* Shop */}
          <div>
            <h3 className="text-sm font-semibold">SHOP</h3>

            <ul className="mt-5 space-y-3 text-sm text-white/60">
              <li>
                <a href="#" className="transition hover:text-white">
                  All Products
                </a>
              </li>

              <li>
                <a href="#" className="transition hover:text-white">
                  T-Shirts
                </a>
              </li>

              <li>
                <a href="#" className="transition hover:text-white">
                  Hoodies
                </a>
              </li>

              <li>
                <a href="#" className="transition hover:text-white">
                  Jackets
                </a>
              </li>

              <li>
                <a href="#" className="transition hover:text-white">
                  Sneakers
                </a>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-sm font-semibold">COMPANY</h3>

            <ul className="mt-5 space-y-3 text-sm text-white/60">
              <li>
                <a href="#" className="transition hover:text-white">
                  About
                </a>
              </li>

              <li>
                <a href="#" className="transition hover:text-white">
                  Contact
                </a>
              </li>

              <li>
                <a href="#" className="transition hover:text-white">
                  Shipping
                </a>
              </li>

              <li>
                <a href="#" className="transition hover:text-white">
                  Returns
                </a>
              </li>

              <li>
                <a href="#" className="transition hover:text-white">
                  FAQ
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Newsletter */}
        <div className="mt-16 border-y border-white/10 py-10">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <h3 className="text-xl font-bold">JOIN THE RAWFORM LIST.</h3>

              <p className="mt-2 text-sm text-white/50">
                Get new drops, exclusive releases and updates.
              </p>
            </div>

            <div className="flex w-full max-w-md">
              <input
                type="email"
                placeholder="Your email address"
                className="min-w-0 flex-1 border border-white/10 bg-white/5 px-4 py-3 text-sm outline-none placeholder:text-white/30 focus:border-raw-accent"
              />

              <button className="bg-raw-accent px-5 py-3 text-sm font-bold text-raw-black">
                JOIN
              </button>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="flex flex-col gap-5 pt-8 md:flex-row md:items-center md:justify-between">
          <p className="text-xs text-white/40">
            © 2026 RAWFORM. All rights reserved.
          </p>

          <div className="flex items-center gap-4">
            <a
              href="#"
              className="text-white/50 transition hover:text-white"
            ></a>
          </div>
        </div>
      </div>
    </footer>
  );
}
