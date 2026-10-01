import React from "react";

import OrderHeader from "./OrderHeader";
import OrderItems from "./OrderItems";
import OrderTimeline from "./OrderTimeline";
import ShippingInfo from "./ShippingInfo";
import OrderSummary from "./OrderSummary";

export default function OrderDetails() {
  return (
    <main>
      <OrderHeader />
      <OrderItems />
      <OrderTimeline />
      <ShippingInfo />
      <OrderSummary />
    </main>
  );
}
