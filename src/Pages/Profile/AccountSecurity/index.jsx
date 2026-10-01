import React from "react";
import { KeyRound, LockKeyhole, ShieldCheck } from "lucide-react";

export default function AccountSecurity() {
  return (
    <section className="border-t border-raw-border bg-raw-bg px-6 py-14 md:px-8 md:py-20">
      <div className="mx-auto max-w-5xl">
        <div className="border-b border-raw-border pb-6">
          <p className="text-[10px] font-bold tracking-[0.2em] text-raw-muted">
            SECURITY
          </p>

          <h2 className="mt-3 text-3xl font-black tracking-[-0.05em]">
            ACCOUNT SECURITY.
          </h2>
        </div>

        <div className="mt-8 divide-y divide-raw-border border-y border-raw-border">
          <div className="flex flex-col gap-5 py-6 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-start gap-4">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center bg-white">
                <LockKeyhole size={19} strokeWidth={1.7} />
              </div>

              <div>
                <h3 className="text-sm font-black">PASSWORD</h3>

                <p className="mt-1 text-xs leading-5 text-raw-muted">
                  Change your account password regularly to keep your account
                  secure.
                </p>
              </div>
            </div>

            <button
              type="button"
              className="border border-raw-black px-5 py-3 text-[9px] font-black tracking-[0.13em] transition hover:bg-raw-black hover:text-white"
            >
              CHANGE PASSWORD
            </button>
          </div>

          <div className="flex flex-col gap-5 py-6 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-start gap-4">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center bg-white">
                <ShieldCheck size={19} strokeWidth={1.7} />
              </div>

              <div>
                <h3 className="text-sm font-black">TWO-STEP VERIFICATION</h3>

                <p className="mt-1 text-xs leading-5 text-raw-muted">
                  Add an extra layer of security to your RAWFORM account.
                </p>
              </div>
            </div>

            <span className="flex items-center gap-2 text-[9px] font-black tracking-[0.13em] text-raw-muted">
              <span className="h-2 w-2 rounded-full bg-raw-muted" />
              NOT ENABLED
            </span>
          </div>

          <div className="flex flex-col gap-5 py-6 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-start gap-4">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center bg-white">
                <KeyRound size={19} strokeWidth={1.7} />
              </div>

              <div>
                <h3 className="text-sm font-black">LOGIN SESSIONS</h3>

                <p className="mt-1 text-xs leading-5 text-raw-muted">
                  Manage the devices currently signed in to your account.
                </p>
              </div>
            </div>

            <button
              type="button"
              className="border border-raw-border bg-white px-5 py-3 text-[9px] font-black tracking-[0.13em] transition hover:border-raw-black"
            >
              MANAGE SESSIONS
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
