import { ChangeEvent, useEffect, useMemo, useState } from 'react'

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
  const { selectedSku, selectedAttrs, setSelectedAttrs } = useSelectedProduct(
    skus,
    uniqueAttr
  )

  return (
    <Card>
      <Img src="./placeholder.png" alt="Product" />
      <ProductInfo>
        <h1>{selectedSku?.['product-group-label']}</h1>
        <p>{selectedSku?.['item-description']}</p>
        <VariantsContainer>
          {Object.entries(uniqueAttr).map(([key, attrs]) => {
            return (
              <AttributeSwatch
                key={key}
                type={key}
                attrs={attrs}
                selectedAttr={selectedAttrs}
                setSelectedAttrs={setSelectedAttrs}
              />
            )
          })}
        </VariantsContainer>
        <Summary>
          <TotalPrice>
            Total <Price>${selectedSku?.price.toFixed(2)}</Price>
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
  selectedAttr,
  setSelectedAttrs,
}: {
  type: string
  attrs: Attribute[]
  selectedAttr: { [key: string]: string }
  setSelectedAttrs: Function
}) => {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const newSelectedAttrs = { ...selectedAttr, [type]: e.target.value }
    setSelectedAttrs(newSelectedAttrs)
  }

  if (type === AttrType.case) {
    return (
      <VariantBlock>
        <div>Slipcase:</div>
        {attrs.map((attr) => (
          <Label key={attr.id} htmlFor={attr.id} data-testid={attr.id}>
            <input
              type="radio"
              id={attr.id}
              value={attr.id}
              name={type}
              checked={attr.id === selectedAttr[type]}
              onChange={handleChange}
            />
            <span>{attr.value ? 'Yes' : 'No'}</span>
          </Label>
        ))}
      </VariantBlock>
    )
  }

  const AtrrTitle = type === AttrType.type ? 'Paper type:' : 'Colour:'

  return (
    <VariantBlock>
      <div>{AtrrTitle}</div>
      {attrs.map((attr) => (
        <Label key={attr.id} htmlFor={attr.id} data-testid={attr.id}>
          <input
            type="radio"
            id={attr.id}
            value={attr.id}
            name={type}
            checked={attr.id === selectedAttr[type]}
            onChange={handleChange}
          />
          <div>{attr.label}</div>
        </Label>
      ))}
    </VariantBlock>
  )
}

const useSelectedProduct = (
  skus: Product[],
  uniqueAttr: { [key: string]: Attribute[] }
) => {
  const [selectedSku, setSelectedSku] = useState<Product | undefined>(skus[0])
  const [selectedAttrs, setSelectedAttrs] = useState<
    {
      [key in AttrType]: string
    }
  >({
    [AttrType.colour]: uniqueAttr[AttrType.colour][0].id,
    [AttrType.type]: uniqueAttr[AttrType.type][0].id,
    [AttrType.case]: uniqueAttr[AttrType.case][0].id,
  })

  useEffect(() => {
    const selected = skus.find(
      (sku) =>
        sku.attributes.filter((attr) => attr.id === selectedAttrs[attr.type])
          .length === 3
    )
    setSelectedSku(selected)
  }, [skus, selectedAttrs, setSelectedSku])
  return { selectedSku, selectedAttrs, setSelectedAttrs }
}

export { ProductCard, useSelectedProduct }
