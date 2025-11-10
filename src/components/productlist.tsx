/** @format */

import Button from "./atomic/button";
import ProductCard from "./atomic/productcard";

export default function ProductList() {
  return (
    <div className="w-full text-center py-[5%]">
      <h2 className="font-[600] text-[49px]">Product</h2>
      <h3 className="text-[20px] font-[600]">Top-Rated Picks</h3>
      <div className="grid grid-cols-3 mt-8 px-[10%] gap-5 mb-8">
        {[1, 2, 3].map((each: number, index: number) => (
          <ProductCard key={index} data={each} />
        ))}
      </div>
      <Button label="Load More" rounded />
    </div>
  );
}
