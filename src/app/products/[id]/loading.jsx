import ProductDetailsSkeleton from "@/components/skeleton/ProductDetailsSkeleton";
import React from "react";

export default function loading() {
  return (
    <div>
      {[...Array(9)].map((_, index) => (
        <ProductDetailsSkeleton key={index} />
      ))}
    </div>
  );
}
