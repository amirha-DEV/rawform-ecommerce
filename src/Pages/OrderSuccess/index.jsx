import React from "react";

import SuccessHero from "./SuccessHero";
import OrderInfo from "./OrderInfo";

export default function OrderSuccess() {
  return (
    <main className="min-h-screen bg-raw-bg">
      <SuccessHero />
      <OrderInfo />
    </main>
  );
}
