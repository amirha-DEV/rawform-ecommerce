import React from "react";
import { Link } from "react-router-dom";
import { Menu, ShoppingBag } from "lucide-react";

export default function Navbar() {
  return (
    <header className="border-b border-raw-border bg-raw-bg">
      <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-8">
        {/* Logo */}
        <Link to="/" className="text-2xl font-extrabold tracking-[-0.05em]">
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

        {/* Actions */}
        <div className="flex items-center gap-4">
          {/* Login */}
          <Link
            to="/login"
            className="hidden text-sm font-semibold transition hover:text-raw-muted md:block"
          >
            LOGIN
          </Link>

          {/* Register */}
          <Link
            to="/register"
            className="hidden border border-raw-black px-4 py-2 text-[10px] font-black tracking-[0.1em] transition hover:bg-raw-black hover:text-white md:block"
          >
            SIGN UP
          </Link>

          {/* Cart */}
          <Link to="/cart" className="relative">
            <ShoppingBag size={21} strokeWidth={1.8} />

            <span className="absolute -right-2 -top-2 flex h-4 min-w-4 items-center justify-center rounded-full bg-raw-accent px-1 text-[10px] font-bold text-raw-black">
              0
            </span>
          </Link>

          {/* Mobile Menu */}
          <button type="button" aria-label="Open menu" className="md:hidden">
            <Menu size={24} strokeWidth={1.8} />
          </button>
        </div>
      </nav>
    </header>
  );
}
