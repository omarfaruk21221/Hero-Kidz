import ProductSkeleton from "@/components/skeleton/ProductSkeleton";
import React from "react";

export default function loading() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {[...Array(9)].map((_, index) => (
        <ProductSkeleton key={index} />
      ))}
    </div>
  );
}
