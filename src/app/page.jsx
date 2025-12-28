import Bannar from "@/components/home/Bannar";
import Products from "@/components/home/Products";
import Image from "next/image";

export default function Home() {
  return (
    <div className="">
      <section>
        <Bannar />
      </section>
      <section>
        <Products />
      </section>
    </div>
  );
}
