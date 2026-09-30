import React from "react";
import { Outlet } from "react-router-dom";
import { Footer, Navbar } from "../Components";

export default function Layout() {
  return (
    <div className="min-h-screen bg-raw-bg text-raw-black">
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
