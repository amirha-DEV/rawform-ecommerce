import React from "react";

import ProductGallery from "./ProductGallery";
import ProductInfo from "./ProductInfo";
import ProductDescription from "./ProductDescription";
import RelatedProducts from "./RelatedProducts";

export default function ProductDetails() {
  return (
    <>
      {/* Product Main */}
      <section className="bg-raw-bg px-6 py-10 md:px-8 md:py-16">
        <div className="mx-auto max-w-7xl">
          {/* Breadcrumb */}
          <div className="mb-8 flex items-center gap-2 text-[9px] font-bold tracking-[0.14em] text-raw-muted">
            <span>HOME</span>
            <span>/</span>
            <span>SHOP</span>
            <span>/</span>
            <span className="text-raw-black">ESSENTIAL OVERSIZED TEE</span>
          </div>

          {/* Gallery + Info */}
          <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-14">
            <ProductGallery />
            <ProductInfo />
          </div>
        </div>
      </section>

      {/* Description */}
      <ProductDescription />

      {/* Related */}
      <RelatedProducts />
    </>
  );
}
