import { getSingleProduct } from "@/actions/server/product";
import Image from "next/image";
import {
  FaStar,
  FaCartPlus,
  FaBolt,
  FaCheckCircle,
  FaTag,
} from "react-icons/fa6";

const ProductDetails = async ({ params }) => {
  const { id } = (await params) || {};
  const product = (await getSingleProduct(id)) || {};

  const {
    title = "Untitled",
    bangla = "",
    image = "",
    price = 0,
    discount = 0,
    ratings = 0,
    sold = 0,
    description = "",
    info = [],
    qna = [],
  } = product;

  const discountPrice = discount > 0 ? price - (price * discount) / 100 : price;

  return (
    <div className="max-w-6xl mx-auto p-6 bg-base-100 rounded-2xl shadow-xl border border-base-300 mt-6">
      <div className="bg-white rounded-2xl shadow-inner overflow-hidden grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* left - Image */}
        <aside className="md:col-span-1 p-6 flex items-center justify-center bg-gradient-to-br from-base-200 to-base-100">
          <div className="w-full h-80 rounded-lg flex items-center justify-center overflow-hidden bg-gray-50">
            {image ? (
              <Image
                src={image}
                alt={title}
                width={600}
                height={600}
                className="object-contain"
              />
            ) : (
              <div className="text-base-300">No Image</div>
            )}
          </div>
          {discount > 0 && (
            <span className="absolute top-6 left-6 bg-error text-white text-xs font-bold px-3 py-1 rounded-full">
              -{discount}%
            </span>
          )}
        </aside>

        {/* right - Details */}
        <aside className="md:col-span-2 p-6 my-6 space-y-8">
          <section className="flex items-start gap-4">
            <div className="flex-1">
              <h1 className="text-2xl font-bold">{title}</h1>
              <p className="text-sm text-primary mt-1">{bangla}</p>
            </div>
            {/* ----discount tag---- */}
            <div className="ml-auto inline-flex items-center gap-1 text-xs bg-base-200 text-primary px-2 py-1 rounded">
              <FaTag /> {discount > 0 ? `${discount}% OFF` : "No Discount"}
            </div>
          </section>
          {/* -------------ratindg and price -------- */}
          <section className="flex items-center justify-between px-10  text-sm text-base-300">
            {/* ----price---- */}
            <div className="text-right">
              <div className="text-3xl font-extrabold text-primary">
                {discountPrice}৳
              </div>
              {discount > 0 && (
                <div className="text-sm line-through text-gray-400">
                  {price}৳
                </div>
              )}
            </div>
            {/* ----rating---- */}
            <div className="flex items-center gap-2">
              <span className="flex items-center gap-1 text-warning">
                <FaStar /> {ratings} Rating
              </span>
              <span className="text-gray-400">|</span>
              <span className="text-gray-500">{sold} Sold</span>
            </div>
          </section>
          {/* -----button side----- */}
          <section className="flex items-center justify-end">
            <div className="flex gap-3">
              <button className="btn btn-primary flex items-center gap-2">
                <FaCartPlus /> Add to Cart
              </button>
              <button className="btn btn-ghost flex items-center gap-2">
                <FaBolt /> Buy Now
              </button>
            </div>
          </section>
        </aside>

        {/* ===========  bottom ======= */}
        <aside className="col-span-full space-y-10">
          {/* -------description------- */}
          <div>
            <h3 className="font-bold text-xl mb-2">Description</h3>
            <span className="divider"></span>
            <p className="text-gray-600 whitespace-pre-line leading-relaxed">
              {description || "No description available."}
            </p>
          </div>
          {/* -------key features------- */}
          <div>
            <h3 className="font-bold text-xl mb-2">Key Features</h3>
            <span className="divider"></span>
            <div className="flex flex-wrap gap-2">
              {info?.length ? (
                info.map((item, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 bg-base-200 rounded text-sm"
                  >
                    {item}
                  </span>
                ))
              ) : (
                <span className="text-gray-500">No features listed.</span>
              )}
            </div>
          </div>
          {/* -------FAQ------- */}
          <div>
            <h3 className="font-bold text-xl mb-2">FAQ</h3>
            <span className="divider"></span>
            <div className="space-y-3">
              {qna?.length ? (
                qna.map((qa, index) => (
                  <details key={index} className="bg-base-200 p-3 rounded">
                    <summary className="font-semibold cursor-pointer">
                      {qa.question}
                    </summary>
                    <div className="mt-2 text-gray-600">{qa.answer}</div>
                  </details>
                ))
              ) : (
                <p className="text-gray-500">No FAQs available.</p>
              )}
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
};

export default ProductDetails;
