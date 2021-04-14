import { Attribute, Product } from '../data/products.types'

interface Acc {
  [key: string]: Attribute[]
}

const getUniqueAttrs = (products: Product[]) => {
  const uniqueAttr = products.reduce((acc: Acc, currentProduct: Product) => {
    currentProduct.attributes.forEach((attr) => {
      const attrType = attr.type

      // Create unique key base on attribute type
      if (!acc.hasOwnProperty(attrType)) {
        acc[attrType] = []
      }

      // Add unique attribute to the key array
      if (!acc[attrType].find((element) => element.id === attr.id)) {
        acc[attrType].push(attr)
      }
    })
    return acc
  }, {})

  return uniqueAttr
}

export { getUniqueAttrs }
