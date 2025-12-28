const ProductDetailsSkeleton = () => {
  return (
    <div className="max-w-6xl mx-auto p-6 bg-base-100 rounded-xl shadow-lg animate-pulse mt-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="skeleton h-[350px] w-full rounded-xl"></div>

        <div className="space-y-3">
          <div className="skeleton h-6 w-3/4"></div>
          <div className="skeleton h-5 w-1/2"></div>
          <div className="skeleton h-10 w-32"></div>
          <div className="skeleton h-10 w-full"></div>
          <div className="skeleton h-32 w-full"></div>
        </div>
      </div>
      <div className="skeleton h-20 w-full mt-8"></div>
      <div className="skeleton h-32 w-full mt-5"></div>
    </div>
  );
};

export default ProductDetailsSkeleton;
