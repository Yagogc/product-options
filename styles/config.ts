import { createCss } from '@stitches/react'

const { styled, global: globalStyle, getCssString } = createCss({
  theme: {
    colors: {
      brand: 'hsl(164, 100%, 30%)',
      cool: 'hsl(208, 44%, 60%)',
      hot: 'hsl(15, 81%, 59%)',
      warm: 'hsl(43, 89%, 56%)',
      neutral: 'hsl(199, 15%, 63%)',
    },
  },
  media: {
    bp1: '(min-width: 400px)',
    bp2: '(min-width: 640px)',
    bp3: '(min-width: 768px)',
    bp4: '(min-width: 1024px)',
  },
  utils: {},
})

const globalStyles = globalStyle({
  '*': { padding: 0, margin: 0, boxSizing: 'border-box' },
  body: {
    fontFamily:
      '-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif',
    '-webkit-font-smoothing': 'antialiased',
    '-moz-osx-font-smoothing': 'grayscale',
    minHeight: '100vh',
    background:
      'linear-gradient(135deg, hsla(188, 75%, 65%, 1) 0%, hsla(288, 75%, 65%, 1) 100%)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
})

export { styled, globalStyles, getCssString }
