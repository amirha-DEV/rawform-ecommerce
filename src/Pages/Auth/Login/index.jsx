import React from "react";
import { ArrowRight, LockKeyhole, Mail } from "lucide-react";

export default function Login() {
  return (
    <main className="min-h-[calc(100vh-80px)] bg-raw-bg px-6 py-12 md:px-8 md:py-20">
      <div className="mx-auto grid max-w-6xl overflow-hidden rounded-[12px] border border-raw-border bg-white lg:grid-cols-2">
        {/* Left - Brand */}
        <div className="relative hidden min-h-[620px] overflow-hidden bg-raw-black p-10 text-white lg:flex lg:flex-col lg:justify-between">
          <div className="absolute right-[-80px] top-[-80px] h-64 w-64 rounded-full border border-white/10" />

          <div className="absolute bottom-[-100px] left-[-80px] h-72 w-72 rounded-full bg-raw-accent/10" />

          <div className="relative z-10">
            <p className="text-2xl font-black tracking-[-0.05em]">RAWFORM</p>

            <div className="mt-24 max-w-md">
              <p className="text-[10px] font-bold tracking-[0.2em] text-white/40">
                CLEAN FORM. RAW ATTITUDE.
              </p>

              <h1 className="mt-4 text-5xl font-black leading-[0.95] tracking-[-0.06em]">
                WELCOME
                <br />
                BACK.
              </h1>

              <p className="mt-6 max-w-sm text-sm leading-6 text-white/50">
                Sign in to access your orders, saved products and personalized
                RAWFORM experience.
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
            <div className="lg:hidden">
              <p className="text-2xl font-black tracking-[-0.05em]">RAWFORM</p>
            </div>

            <div className="mt-8 lg:mt-0">
              <p className="text-[10px] font-bold tracking-[0.18em] text-raw-muted">
                ACCOUNT / LOGIN
              </p>

              <h2 className="mt-2 text-3xl font-black tracking-[-0.05em] sm:text-4xl">
                SIGN IN.
              </h2>

              <p className="mt-3 text-xs leading-5 text-raw-muted">
                Enter your details to access your RAWFORM account.
              </p>
            </div>

            <form className="mt-8 space-y-5">
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
                <div className="mb-2 flex items-center justify-between">
                  <label className="text-[10px] font-bold tracking-[0.1em]">
                    PASSWORD
                  </label>

                  <button
                    type="button"
                    className="text-[9px] font-bold tracking-[0.08em] text-raw-muted transition hover:text-raw-black"
                  >
                    FORGOT PASSWORD?
                  </button>
                </div>

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

              {/* Remember */}
              <label className="flex cursor-pointer items-center gap-3">
                <input type="checkbox" className="h-4 w-4 accent-raw-black" />

                <span className="text-xs text-raw-muted">Remember me</span>
              </label>

              {/* Submit */}
              <button
                type="submit"
                className="group flex w-full items-center justify-center gap-2 bg-raw-black px-5 py-4 text-[10px] font-black tracking-[0.14em] text-white transition hover:bg-raw-accent hover:text-raw-black"
              >
                SIGN IN
                <ArrowRight
                  size={15}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </button>
            </form>

            {/* Register */}
            <div className="mt-8 border-t border-raw-border pt-6 text-center">
              <p className="text-xs text-raw-muted">
                Don't have a RAWFORM account?
              </p>

              <button className="mt-2 text-[10px] font-black tracking-[0.12em] underline underline-offset-4">
                CREATE ACCOUNT
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
