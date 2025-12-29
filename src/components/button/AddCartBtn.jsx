"use client";

import { usePathname, useRouter } from "next/navigation";
import { FaCartPlus } from "react-icons/fa";

export default function AddCartBtn({ product }) {
  //   console.log("AddCartBtn product:", product);
  const isLogin = false;
  const router = useRouter();
  const path = usePathname();

  const handleAddCard = () => {
    if (isLogin) return alert(product._id);
    else {
      router.push(`/login?callbackUrl=${path}`);
    }
  };
  return (
    <>
      <button
        onClick={handleAddCard}
        className="btn btn-primary flex items-center gap-2"
      >
        <FaCartPlus /> Add to Cart
      </button>
    </>
  );
}
