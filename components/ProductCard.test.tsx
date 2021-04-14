import { render, screen } from '@testing-library/react'
import { act, renderHook } from '@testing-library/react-hooks'
import userEvent from '@testing-library/user-event'

import { Attribute, Product } from '../data/products.types'
import { ProductCard, useSelectedProduct } from './ProductCard'

const products = [
  {
    id: '1',
    'product-group-label': 'Hardcover Notebook',
    'product-group-id': 'hardcover-notebook',
    'item-description': 'Sunset notebook with dotted paper',
    attributes: [
      {
        id: 'cc1',
        type: 'cover-colour',
        value: 'red',
        label: 'Sunset',
      },
      {
        id: 'pt1',
        type: 'paper-type',
        value: 'dotted',
        label: 'Dotted paper',
      },
      {
        id: 'sc1',
        type: 'slip-case-included',
        value: false,
        label: 'Slipcase',
      },
    ],
    price: 17,
  },
  {
    id: '2',
    'product-group-label': 'Hardcover Notebook',
    'product-group-id': 'hardcover-notebook',
    'item-description': 'Ocean notebook with dotted paper',
    attributes: [
      {
        id: 'cc2',
        type: 'cover-colour',
        value: 'blue',
        label: 'Ocean',
      },
      {
        id: 'pt1',
        type: 'paper-type',
        value: 'dotted',
        label: 'Dotted paper',
      },
      {
        id: 'sc1',
        type: 'slip-case-included',
        value: false,
        label: 'Slipcase',
      },
    ],
    price: 18,
  },
] as Product[]

describe('ProductCard', () => {
  it('renders the default model', () => {
    render(<ProductCard skus={products} />)
    const defaultProduct = products[0]

    const header = screen.getByText(defaultProduct['product-group-label'])
    expect(header).toBeInTheDocument()

    const description = screen.getByText(defaultProduct['item-description'])
    expect(description).toBeInTheDocument()

    const price = screen.getByText(`$${products[0].price.toFixed(2)}`)
    expect(price).toBeInTheDocument()
  })

  it('renders the other model when clicked', () => {
    render(<ProductCard skus={products} />)
    const variant2 = products[1]

    userEvent.click(screen.getByTestId(variant2.attributes[0].id))

    const description = screen.getByText(variant2['item-description'])
    expect(description).toBeInTheDocument()

    const price = screen.getByText(`$${variant2.price.toFixed(2)}`)
    expect(price).toBeInTheDocument()
  })
})
interface UniqueAttrInt {
  [key: string]: Attribute[]
}
const uniqueAttr = {
  'cover-colour': [
    { id: 'cc1', type: 'cover-colour', value: 'red', label: 'Sunset' },
    { id: 'cc2', type: 'cover-colour', value: 'blue', label: 'Ocean' },
  ],
  'paper-type': [
    {
      id: 'pt1',
      type: 'paper-type',
      value: 'dotted',
      label: 'Dotted paper',
    },
  ],
  'slip-case-included': [
    {
      id: 'sc1',
      type: 'slip-case-included',
      value: false,
      label: 'Slipcase',
    },
  ],
}

describe('useSelectedProduct', () => {
  it('should return as selectedSku the first SKU', () => {
    const { result } = renderHook(() =>
      useSelectedProduct(products, uniqueAttr as UniqueAttrInt)
    )

    expect(result.current.selectedSku).toStrictEqual(products[0])
  })

  it('should return a new selectedSku when the selected attribute changes', () => {
    const { result } = renderHook(() =>
      useSelectedProduct(products, uniqueAttr as UniqueAttrInt)
    )
    expect(result.current.selectedSku).toStrictEqual(products[0])

    const newSelectedAttr = { ...result.current.selectedAttrs }
    newSelectedAttr['cover-colour'] = products[1].attributes[0].id

    act(() => {
      result.current.setSelectedAttrs(newSelectedAttr)
    })

    expect(result.current.selectedSku).toStrictEqual(products[1])
  })
})
