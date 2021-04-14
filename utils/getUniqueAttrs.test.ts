import { Product } from '../data/products.types'
import { getUniqueAttrs } from './getUniqueAttrs'

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

const expectedUniqueAttr = {
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

test('getUniqueAttr() should return a object with the uniqueAttr available given a range of product models', () => {
  expect(getUniqueAttrs(products)).toStrictEqual(expectedUniqueAttr)
})
