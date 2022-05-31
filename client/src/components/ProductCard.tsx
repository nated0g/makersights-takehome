import Product from '../schema/Product'

type PreviewItemProps = {
  product: Product
}

export default function ProductCard(props: PreviewItemProps) {
  const { product } = props;
  return (
    <div
      key={product._id}
      className="group relative bg-white border border-gray-200 rounded-md flex flex-col overflow-hidden"
    >
      <div className="aspect-w-3 aspect-h-4 bg-gray-200 group-hover:opacity-75 sm:aspect-none sm:h-96">
        <img
          src={product.img_url}
          alt={product.name}
          className="w-full h-full object-center object-cover sm:w-full sm:h-full"
        />
      </div>
      <div className="flex-1 p-4 space-y-2 flex flex-col">
        <h3 className="text-lg font-bold text-gray-900 block text-right ">
          <a href='#'>
            {product.name}
          </a>
        </h3>
        <div className="flex-1 flex flex-col justify-end text-right">
          <p className="text-base font-bold text-gray-900">${product.price}</p>
        </div>
      </div>
    </div>
  )
}
