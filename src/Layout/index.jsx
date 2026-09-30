import React from "react";
import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <div className="min-h-screen bg-raw-bg text-raw-black">
      <Outlet />
    </div>
  );
}
