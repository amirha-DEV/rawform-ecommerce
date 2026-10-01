import React from "react";

import OrdersHeader from "./OrdersHeader";
import OrdersList from "./OrdersList";

export default function Orders() {
  return (
    <main>
      <OrdersHeader />
      <OrdersList />
    </main>
  );
}