import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Menu, ShoppingBag, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <header className="relative z-50 border-b border-raw-border bg-raw-bg">
      <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-8">
        {/* Logo */}
        <Link
          to="/"
          onClick={closeMenu}
          className="text-2xl font-extrabold tracking-[-0.05em]"
        >
          RAWFORM
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-8 md:flex">
          <Link
            to="/shop"
            className="text-sm font-medium transition hover:text-raw-muted"
          >
            SHOP
          </Link>

          <Link
            to="/shop"
            className="text-sm font-medium transition hover:text-raw-muted"
          >
            CATEGORIES
          </Link>

          <Link
            to="#"
            className="text-sm font-medium transition hover:text-raw-muted"
          >
            ABOUT
          </Link>

          <Link
            to="#"
            className="text-sm font-medium transition hover:text-raw-muted"
          >
            CONTACT
          </Link>
        </div>

        {/* Desktop Actions */}
        <div className="hidden items-center gap-4 md:flex">
          <Link
            to="/login"
            className="text-sm font-semibold transition hover:text-raw-muted"
          >
            LOGIN
          </Link>

          <Link
            to="/register"
            className="border border-raw-black px-4 py-2 text-[10px] font-black tracking-[0.1em] transition hover:bg-raw-black hover:text-white"
          >
            SIGN UP
          </Link>

          <Link to="/cart" className="relative">
            <ShoppingBag size={21} strokeWidth={1.8} />

            <span className="absolute -right-2 -top-2 flex h-4 min-w-4 items-center justify-center rounded-full bg-raw-accent px-1 text-[10px] font-bold text-raw-black">
              0
            </span>
          </Link>
        </div>

        {/* Mobile Actions */}
        <div className="flex items-center gap-4 md:hidden">
          <Link to="/cart" className="relative">
            <ShoppingBag size={21} strokeWidth={1.8} />

            <span className="absolute -right-2 -top-2 flex h-4 min-w-4 items-center justify-center rounded-full bg-raw-accent px-1 text-[10px] font-bold text-raw-black">
              0
            </span>
          </Link>

          <button
            type="button"
            onClick={() => setIsOpen(true)}
            aria-label="Open menu"
          >
            <Menu size={24} strokeWidth={1.8} />
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 z-50 md:hidden ${
          isOpen ? "pointer-events-auto" : "pointer-events-none"
        }`}
      >
        {/* Overlay */}
        <button
          type="button"
          onClick={closeMenu}
          aria-label="Close menu"
          className={`absolute inset-0 bg-black/40 transition-opacity duration-300 ${
            isOpen ? "opacity-100" : "opacity-0"
          }`}
        />

        {/* Drawer */}
        <aside
          className={`absolute right-0 top-0 h-full w-[88%] max-w-sm bg-raw-bg px-6 py-6 transition-transform duration-300 ${
            isOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          {/* Drawer Header */}
          <div className="flex items-center justify-between border-b border-raw-border pb-6">
            <Link
              to="/"
              onClick={closeMenu}
              className="text-xl font-black tracking-[-0.05em]"
            >
              RAWFORM
            </Link>

            <button
              type="button"
              onClick={closeMenu}
              aria-label="Close menu"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-raw-border bg-white"
            >
              <X size={19} strokeWidth={1.8} />
            </button>
          </div>

          {/* Navigation */}
          <div className="py-8">
            <p className="text-[9px] font-bold tracking-[0.18em] text-raw-muted">
              NAVIGATION
            </p>

            <div className="mt-5 divide-y divide-raw-border border-y border-raw-border">
              <Link
                to="/shop"
                onClick={closeMenu}
                className="flex items-center justify-between py-5 text-lg font-bold"
              >
                SHOP
                <ArrowRight size={18} />
              </Link>

              <Link
                to="/shop"
                onClick={closeMenu}
                className="flex items-center justify-between py-5 text-lg font-bold"
              >
                CATEGORIES
                <ArrowRight size={18} />
              </Link>

              <Link
                to="#"
                onClick={closeMenu}
                className="flex items-center justify-between py-5 text-lg font-bold"
              >
                ABOUT
                <ArrowRight size={18} />
              </Link>

              <Link
                to="#"
                onClick={closeMenu}
                className="flex items-center justify-between py-5 text-lg font-bold"
              >
                CONTACT
                <ArrowRight size={18} />
              </Link>
            </div>
          </div>

          {/* Account */}
          <div className="border-t border-raw-border pt-7">
            <p className="text-[9px] font-bold tracking-[0.18em] text-raw-muted">
              ACCOUNT
            </p>

            <div className="mt-5 grid grid-cols-2 gap-3">
              <Link
                to="/login"
                onClick={closeMenu}
                className="flex items-center justify-center border border-raw-border bg-white py-3.5 text-[10px] font-black tracking-[0.12em]"
              >
                LOGIN
              </Link>

              <Link
                to="/register"
                onClick={closeMenu}
                className="flex items-center justify-center bg-raw-black py-3.5 text-[10px] font-black tracking-[0.12em] text-white"
              >
                SIGN UP
              </Link>
            </div>
          </div>

          {/* Bottom Brand */}
          <div className="absolute bottom-6 left-6 right-6 border-t border-raw-border pt-5">
            <div className="flex items-center justify-between">
              <span className="text-[9px] font-bold tracking-[0.16em] text-raw-muted">
                CLEAN FORM.
              </span>

              <span className="text-[9px] font-bold tracking-[0.16em] text-raw-muted">
                RAW ATTITUDE.
              </span>
            </div>
          </div>
        </aside>
      </div>
    </header>
  );
}
