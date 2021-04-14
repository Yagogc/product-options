import { Product } from '../data/products.types'
import {
  Button,
  Card,
  Img,
  Price,
  ProductInfo,
  Summary,
  TotalPrice,
} from './ProductCard.css'

const ProductCard = ({ skus }: { skus: Product[] }) => {
  return (
    <Card>
      <Img src="./placeholder.png" alt="Product" />
      <ProductInfo>
        <h1>Title</h1>
        <p>description</p>
        <div>Variants</div>
        <Summary>
          <TotalPrice>
            Total <Price>price</Price>
          </TotalPrice>
          <Button type="button">Add to basket</Button>
        </Summary>
      </ProductInfo>
    </Card>
  )
}

export { ProductCard }
