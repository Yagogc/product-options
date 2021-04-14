import { useMemo } from 'react'

import { Attribute, AttrType, Product } from '../data/products.types'
import { getUniqueAttrs } from '../utils/getUniqueAttrs'
import {
  Button,
  Card,
  Img,
  Label,
  Price,
  ProductInfo,
  Summary,
  TotalPrice,
  VariantBlock,
  VariantsContainer,
} from './ProductCard.css'

const ProductCard = ({ skus }: { skus: Product[] }) => {
  const uniqueAttr = useMemo(() => getUniqueAttrs(skus), [skus])

  return (
    <Card>
      <Img src="./placeholder.png" alt="Product" />
      <ProductInfo>
        <h1>Title</h1>
        <p>description</p>
        <VariantsContainer>
          {Object.entries(uniqueAttr).map(([key, attrs]) => {
            return <AttributeSwatch key={key} type={key} attrs={attrs} />
          })}
        </VariantsContainer>
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

const AttributeSwatch = ({
  type,
  attrs,
}: {
  type: string
  attrs: Attribute[]
}) => {
  if (type === AttrType.colour) {
    return (
      <VariantBlock>
        <div>Colour:</div>
        {attrs.map((attr) => (
          <Label key={attr.id} htmlFor={attr.id}>
            <input type="radio" id={attr.id} value={attr.id} name={type} />
            <span>{attr.label}</span>
          </Label>
        ))}
      </VariantBlock>
    )
  }
  if (type === AttrType.type) {
    return (
      <VariantBlock>
        <div>Paper type:</div>
        {attrs.map((attr) => (
          <Label key={attr.id} htmlFor={attr.id}>
            <input type="radio" id={attr.id} value={attr.id} name={type} />
            <div>{attr.label}</div>
          </Label>
        ))}
      </VariantBlock>
    )
  }
  if (type === AttrType.case) {
    return (
      <VariantBlock>
        <div>Slipcase:</div>
        {attrs.map((attr) => (
          <Label key={attr.id} htmlFor={attr.id}>
            <input type="radio" id={attr.id} value={attr.id} name={type} />
            <span>{attr.value ? 'Yes' : 'No'}</span>
          </Label>
        ))}
      </VariantBlock>
    )
  }
  return null
}

export { ProductCard }
