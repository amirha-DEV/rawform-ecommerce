import React from "react";
import { Camera, UserRound } from "lucide-react";

export default function ProfileHeader() {
  return (
    <section className="border-b border-raw-border bg-raw-bg px-6 py-12 md:px-8 md:py-16">
      <div className="mx-auto max-w-5xl">
        <p className="text-[10px] font-bold tracking-[0.2em] text-raw-muted">
          ACCOUNT / PROFILE
        </p>

        <div className="mt-8 flex flex-col gap-7 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-5">
            <div className="relative flex h-20 w-20 shrink-0 items-center justify-center rounded-full bg-raw-black text-white">
              <UserRound size={32} strokeWidth={1.5} />

              <button
                type="button"
                aria-label="Change profile image"
                className="absolute -bottom-1 -right-1 flex h-8 w-8 items-center justify-center rounded-full border-2 border-raw-bg bg-white text-raw-black shadow-sm"
              >
                <Camera size={14} strokeWidth={1.8} />
              </button>
            </div>

            <div>
              <h1 className="text-3xl font-black tracking-[-0.05em] sm:text-4xl">
                Amirali
              </h1>

              <p className="mt-1 text-xs text-raw-muted">amirali@example.com</p>
            </div>
          </div>

          <div className="flex items-center gap-2 self-start border border-raw-border bg-white px-4 py-2.5 sm:self-auto">
            <span className="h-2 w-2 rounded-full bg-raw-accent" />

            <span className="text-[9px] font-black tracking-[0.14em]">
              ACTIVE ACCOUNT
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
