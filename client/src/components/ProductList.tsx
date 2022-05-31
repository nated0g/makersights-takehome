import { Dispatch, SetStateAction } from "react";

import Product from "../schema/Product";
import ProductCard from "./ProductCard";

type ProductListProps = {
  products: Product[];
}

export default function ProductList(props: ProductListProps) {
  const {products} = props;
  return (
    <section className="mt-6 lg:mt-0 lg:col-span-2 xl:col-span-3">
      <div className="grid grid-cols-1 gap-y-4 sm:grid-cols-2 sm:gap-x-6 sm:gap-y-10 lg:gap-x-8 xl:grid-cols-3">
        {products.map((product) => (
          <ProductCard product={product} />
        ))}
      </div>
    </section>
  )
}
