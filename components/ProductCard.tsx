import { Product } from '../data/products.types'

const ProductCard = ({ skus }: { skus: Product[] }) => {
  return (
    <div>
      {skus.map((sku, i) => (
        <pre key={i}>{JSON.stringify(sku, null, 2)}</pre>
      ))}
    </div>
  )
}

export { ProductCard }
