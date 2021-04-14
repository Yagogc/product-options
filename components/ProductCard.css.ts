import { styled } from '../styles/config'

const Card = styled('div', {
  background: 'white',
  borderRadius: '5px',
  padding: '20px',
  borderWidth: '4px',
  borderStyle: 'solid',
  borderColor: '$neutral',
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  gap: '10px',
  '@bp2': {
    flexDirection: 'row',
  },
})

const ProductInfo = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  flexGrow: 1,
  gap: '10px',
})

const Img = styled('img', {
  margin: '0 auto',
  height: '150px',
  width: '150px',
})

const Summary = styled('div', {
  display: 'flex',
  justifyContent: 'space-between',
  marginTop: '10px',
  gap: '10px',
})

const TotalPrice = styled('span', {
  background: '$neutral',
  borderRadius: '2px',
  padding: '2px',
  paddingLeft: '5px',
  display: 'flex',
  alignItems: 'center',
  gap: '10px',
  color: 'white',
  textTransform: 'uppercase',
  fontWeight: 'bold',
})

const Price = styled('span', {
  fontVariantNumeric: 'tabular-nums',
  background: 'white',
  borderRadius: '1px',
  padding: '4px 6px',
  color: 'black',
  display: 'flex',
  alignItems: 'center',
  height: '100%',
})

const Button = styled('button', {
  background: '$neutral',
  fontWeight: 'bold',
  border: 'none',
  padding: '5px 10px',
  borderRadius: '2px',
  color: 'white',
  cursor: 'pointer',
})

const VariantsContainer = styled('div', {
  fontSize: '14px',
  display: 'grid',
  gap: '10px',
  gridTemplateColumns: '1fr',
  '@bp2': {
    gridTemplateColumns: '1fr 1fr 1fr',
  },
})
const VariantBlock = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '10px',
})

const Label = styled('label', {
  cursor: 'pointer',
  display: 'flex',
  gap: '10px',
})

export {
  Button,
  Card,
  Img,
  Price,
  ProductInfo,
  Summary,
  TotalPrice,
  VariantsContainer,
  VariantBlock,
  Label,
}
