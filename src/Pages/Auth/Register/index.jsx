import React from "react";
import { ArrowRight, LockKeyhole, Mail, UserRound } from "lucide-react";

export default function Register() {
  return (
    <main className="min-h-[calc(100vh-80px)] bg-raw-bg px-6 py-12 md:px-8 md:py-20">
      <div className="mx-auto grid max-w-6xl overflow-hidden rounded-[12px] border border-raw-border bg-white lg:grid-cols-2">
        {/* Left - Brand */}
        <div className="relative hidden min-h-[680px] overflow-hidden bg-raw-black p-10 text-white lg:flex lg:flex-col lg:justify-between">
          <div className="absolute right-[-80px] top-[-80px] h-64 w-64 rounded-full border border-white/10" />

          <div className="absolute bottom-[-100px] left-[-80px] h-72 w-72 rounded-full bg-raw-accent/10" />

          <div className="relative z-10">
            <p className="text-2xl font-black tracking-[-0.05em]">RAWFORM</p>

            <div className="mt-24 max-w-md">
              <p className="text-[10px] font-bold tracking-[0.2em] text-white/40">
                CLEAN FORM. RAW ATTITUDE.
              </p>

              <h1 className="mt-4 text-5xl font-black leading-[0.95] tracking-[-0.06em]">
                CREATE
                <br />
                YOUR FORM.
              </h1>

              <p className="mt-6 max-w-sm text-sm leading-6 text-white/50">
                Create your RAWFORM account and keep your orders, favorites and
                profile all in one place.
              </p>
            </div>
          </div>

          <div className="relative z-10 flex items-center justify-between border-t border-white/10 pt-6">
            <span className="text-[9px] font-bold tracking-[0.16em] text-white/40">
              RAWFORM / 2026
            </span>

            <span className="text-[9px] font-bold tracking-[0.16em] text-white/40">
              EST. 2026
            </span>
          </div>
        </div>

        {/* Right - Form */}
        <div className="flex items-center px-6 py-10 sm:px-10 md:px-14 lg:px-16">
          <div className="w-full max-w-md">
            {/* Mobile Logo */}
            <div className="lg:hidden">
              <p className="text-2xl font-black tracking-[-0.05em]">RAWFORM</p>
            </div>

            {/* Heading */}
            <div className="mt-8 lg:mt-0">
              <p className="text-[10px] font-bold tracking-[0.18em] text-raw-muted">
                ACCOUNT / REGISTER
              </p>

              <h2 className="mt-2 text-3xl font-black tracking-[-0.05em] sm:text-4xl">
                CREATE ACCOUNT.
              </h2>

              <p className="mt-3 text-xs leading-5 text-raw-muted">
                Create your account to start your RAWFORM journey.
              </p>
            </div>

            <form className="mt-8 space-y-5">
              {/* First / Last Name */}
              <div className="grid gap-5 sm:grid-cols-2">
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
                      className="w-full rounded-[8px] border border-raw-border bg-raw-bg py-3.5 pl-11 pr-3 text-sm outline-none transition placeholder:text-raw-muted/60 focus:border-raw-black focus:bg-white"
                    />
                  </div>
                </div>

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

              {/* Password */}
              <div>
                <label className="mb-2 block text-[10px] font-bold tracking-[0.1em]">
                  PASSWORD
                </label>

                <div className="relative">
                  <LockKeyhole
                    size={16}
                    strokeWidth={1.7}
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-raw-muted"
                  />

                  <input
                    type="password"
                    placeholder="••••••••"
                    className="w-full rounded-[8px] border border-raw-border bg-raw-bg py-3.5 pl-11 pr-4 text-sm outline-none transition placeholder:text-raw-muted/60 focus:border-raw-black focus:bg-white"
                  />
                </div>
              </div>

              {/* Confirm Password */}
              <div>
                <label className="mb-2 block text-[10px] font-bold tracking-[0.1em]">
                  CONFIRM PASSWORD
                </label>

                <div className="relative">
                  <LockKeyhole
                    size={16}
                    strokeWidth={1.7}
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-raw-muted"
                  />

                  <input
                    type="password"
                    placeholder="••••••••"
                    className="w-full rounded-[8px] border border-raw-border bg-raw-bg py-3.5 pl-11 pr-4 text-sm outline-none transition placeholder:text-raw-muted/60 focus:border-raw-black focus:bg-white"
                  />
                </div>
              </div>

              {/* Terms */}
              <label className="flex cursor-pointer items-start gap-3">
                <input
                  type="checkbox"
                  className="mt-0.5 h-4 w-4 shrink-0 accent-raw-black"
                />

                <span className="text-[11px] leading-5 text-raw-muted">
                  I agree to the{" "}
                  <button
                    type="button"
                    className="font-semibold text-raw-black underline underline-offset-2"
                  >
                    Terms & Conditions
                  </button>{" "}
                  and{" "}
                  <button
                    type="button"
                    className="font-semibold text-raw-black underline underline-offset-2"
                  >
                    Privacy Policy
                  </button>
                  .
                </span>
              </label>

              {/* Submit */}
              <button
                type="submit"
                className="group flex w-full items-center justify-center gap-2 bg-raw-black px-5 py-4 text-[10px] font-black tracking-[0.14em] text-white transition hover:bg-raw-accent hover:text-raw-black"
              >
                CREATE ACCOUNT
                <ArrowRight
                  size={15}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </button>
            </form>

            {/* Login */}
            <div className="mt-8 border-t border-raw-border pt-6 text-center">
              <p className="text-xs text-raw-muted">
                Already have a RAWFORM account?
              </p>

              <button className="mt-2 text-[10px] font-black tracking-[0.12em] underline underline-offset-4">
                SIGN IN
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
