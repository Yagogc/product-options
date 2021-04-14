import { Product } from '../data/products.types'

interface Acc {
  [key: string]: Product[]
}

const reducer = (accumulator: Acc, currentValue: Product) => {
  const groupId = currentValue['product-group-id']
  if (!accumulator.hasOwnProperty(groupId)) {
    accumulator[groupId] = []
  }
  accumulator[groupId].push(currentValue)
  return accumulator
}

const groupByGroupId = (products: Product[]) => {
  const newGroup = products.reduce(reducer, {})
  return newGroup
}

export { groupByGroupId }
