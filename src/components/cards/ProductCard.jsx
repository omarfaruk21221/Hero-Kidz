"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaEye, FaStar } from "react-icons/fa6";
import { FaCartPlus } from "react-icons/fa6";

export default function ProductCard({ product }) {
  const { image, title, price, discount, ratings, sold } = product || {};
  const discountPrice = price - (price * discount) / 100;
  console.log(product);

  //   -----------featuer -----
  const handleViewDetails = () => {
    router.push(`/product/${_id}`);
  };

  const handleAddToCart = () => {
    console.log("Added to cart:", product);
  };
  return (
    <div className="group relative bg-white rounded-2xl shadow-lg border border-gray-100 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 p-4">
      {/* Discount Badge */}
      {discount > 0 && (
        <span className="absolute top-3 left-3 bg-red-500 text-white text-xs font-semibold px-2 py-1 rounded-full">
          -{discount}% OFF
        </span>
      )}

      {/* Image Section */}
      <div className="w-full bg-gray-100 rounded-xl flex justify-center items-center p-4 overflow-hidden">
        <Image
          width={200}
          height={100}
          src={image}
          alt={title}
          className="w-full h-40 object-contain group-hover:scale-110 transition-transform duration-300"
        />
      </div>

      {/* Content */}
      <div className="mt-3 space-y-2">
        <h3 className="text-sm font-semibold line-clamp-2 min-h-10">{title}</h3>

        {/* Rating & Sold */}
        <div className="flex justify-between items-center text-xs text-gray-500">
          <span className="flex gap-1 items-center text-yellow-500 font-bold">
            <FaStar className="text-base" /> {ratings}
          </span>
          <span>{sold} Sold</span>
        </div>

        {/* Price Section */}
        <div className="flex items-center gap-2">
          <p className="text-lg font-bold text-primary">{discountPrice}৳</p>
          {discount > 0 && (
            <p className="text-sm line-through text-gray-400">{price}৳</p>
          )}
        </div>
      </div>
      {/* view details btn */}
      <Link
        href={`/products/${product._id}`}
        className="btn btn-primary btn-sm absolute bottom-3 right-25 rounded-xl flex gap-1 items-center shadow-md opacity-0 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300"
      >
        <FaEye className="text-base" /> View Details
      </Link>
      {/* Add To Cart Button */}
      <button
        onClick={() => handleAddToCart(product)}
        className="btn btn-primary btn-sm absolute bottom-3 right-3 rounded-xl flex gap-1 items-center shadow-md opacity-0 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300"
      >
        <FaCartPlus className="text-base" /> Add
      </button>
    </div>
  );
}
