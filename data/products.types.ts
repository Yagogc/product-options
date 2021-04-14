export interface Attribute {
  id: string
  type: string
  value: string | boolean
  label: string
}

export interface Product {
  id: string
  'product-group-label': string
  'product-group-id': string
  'item-description': string
  attributes: Attribute[]
  price: number
}

export interface Products {
  products: Product[]
}
