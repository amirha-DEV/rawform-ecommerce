import { ShoppingBag, Menu } from "lucide-react";

export default function Navbar() {
  return (
    <header className="border-b border-raw-border bg-raw-bg">
      <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-8">
        {/* Logo */}
        <div className="text-2xl font-extrabold tracking-[-0.05em]">
          RAWFORM
        </div>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-8 md:flex">
          <a href="#" className="text-sm font-medium">
            SHOP
          </a>

          <a href="#" className="text-sm font-medium">
            CATEGORIES
          </a>

          <a href="#" className="text-sm font-medium">
            ABOUT
          </a>

          <a href="#" className="text-sm font-medium">
            CONTACT
          </a>
        </div>

        {/* Actions */}
        <div className="flex items-center gap-4">
          <button className="hidden text-sm font-semibold md:block">
            LOGIN
          </button>

          <button className="relative">
            <ShoppingBag size={21} strokeWidth={1.8} />

            <span className="absolute -right-2 -top-2 flex h-4 min-w-4 items-center justify-center rounded-full bg-raw-accent px-1 text-[10px] font-bold text-raw-black">
              0
            </span>
          </button>

          <button className="md:hidden">
            <Menu size={24} />
          </button>
        </div>
      </nav>
    </header>
  );
}
