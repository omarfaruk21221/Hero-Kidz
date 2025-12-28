import React from "react";
// import products from "@/data/toys.json";
import ProductCard from "../cards/ProductCard";
import { getProducts } from "@/actions/server/product";

export default async function Products() {
  const products = (await getProducts()) || [];
  // console.log("Products fetched:", products);
  return (
    <div>
      <h2 className="text-3xl font-bold text-center my-8">Our Products</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product, i) => (
          <ProductCard key={i} product={product} />
        ))}
      </div>
    </div>
  );
}
