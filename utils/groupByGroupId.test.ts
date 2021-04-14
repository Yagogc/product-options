import { groupByGroupId } from './groupByGroupId'

const rawProducts = [
  {
    id: '1',
    'product-group-label': 'Hardcover Notebook',
    'product-group-id': 'hardcover-notebook',
    'item-description': 'Sunset notebook with dotted paper',
    attributes: [],
    price: 17,
  },
  {
    id: '2',
    'product-group-label': 'Hardcover Notebook',
    'product-group-id': 'hardcover-notebook',
    'item-description': 'Ocean notebook with dotted paper',
    attributes: [],
    price: 18,
  },
  {
    id: '3',
    'product-group-label': 'Hardcover Binder',
    'product-group-id': 'hardcover-binder',
    'item-description': 'Sunset binder with dotted paper and Slipcase',
    attributes: [],
    price: 21.99,
  },
]

const expectedResult = {
  'hardcover-notebook': [
    {
      id: '1',
      'product-group-label': 'Hardcover Notebook',
      'product-group-id': 'hardcover-notebook',
      'item-description': 'Sunset notebook with dotted paper',
      attributes: [],
      price: 17,
    },
    {
      id: '2',
      'product-group-label': 'Hardcover Notebook',
      'product-group-id': 'hardcover-notebook',
      'item-description': 'Ocean notebook with dotted paper',
      attributes: [],
      price: 18,
    },
  ],
  'hardcover-binder': [
    {
      id: '3',
      'product-group-label': 'Hardcover Binder',
      'product-group-id': 'hardcover-binder',
      'item-description': 'Sunset binder with dotted paper and Slipcase',
      attributes: [],
      price: 21.99,
    },
  ],
}

test('groupByGroupId() should groupd the products by the `product-group-id`', () => {
  expect(groupByGroupId(rawProducts)).toStrictEqual(expectedResult)
})
