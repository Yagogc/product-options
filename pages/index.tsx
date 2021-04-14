import { ProductCard } from '../components/ProductCard'
import data from '../data/products.json'
import { Product } from '../data/products.types'
import { groupByGroupId } from '../utils/groupByGroupId'

const products = groupByGroupId(data.products as Product[])

export default function Home() {
  return (
    <>
      {Object.entries(products).map(([key, skus]) => (
        <ProductCard key={key} skus={skus} />
      ))}
    </>
  )
}
