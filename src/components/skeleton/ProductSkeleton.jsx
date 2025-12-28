const ProductSkeleton = () => {
  return (
    <div className="bg-white rounded-2xl shadow-md border border-gray-100 p-4 animate-pulse">
      <div className="skeleton-class h-40 w-full rounded-xl mb-4"></div>
      <div className="space-y-3">
        <div className="skeleton-class h-4 w-3/4"></div>
        <div className="skeleton-class h-4 w-1/2"></div>
        <div className="flex justify-between">
          <div className="skeleton-class h-6 w-20"></div>
          <div className="skeleton-class h-6 w-16"></div>
        </div>
      </div>
    </div>
  );
};

export default ProductSkeleton;
