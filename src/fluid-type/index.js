import styled, { css } from 'styled-components'
import { useFluidTheme } from './context'

export const Text = styled.p(({ size = 'xs', font = 'primary', weight = 'light' }) => {
  const { scale, baseSizeMin, baseSizeMax, viewportMin, viewportMax, sizes, fonts, weights } = useFluidTheme()
  // const sizeIndex = sizes.indexOf(size)
  const sizeInfo = sizes.find(s => s.name === size)
  const sizeIndex = sizes.findIndex(s => s === sizeInfo)
  const multiplier = Math.pow(scale, sizeIndex)
  const min = baseSizeMin * multiplier
  const max = baseSizeMax * multiplier

  const foo = (a, b) => css`
    font-size: ${a}px;

    @media screen and (min-width: ${viewportMin}px) {
      font-size: calc(${a}px + (${b - a}) * ((100vw - ${viewportMin}px) / (${viewportMax} - ${viewportMin})));
    }

    @media screen and (min-width: ${viewportMax}px) {
      font-size: ${b}px;
    }
  `

  return css`
    ${foo(min, max)}
    font-family: ${fonts[font]};
    line-height: ${sizeInfo.lineHeight};
    font-weight: ${weights[weight]};

    small {
      ${foo(min / scale, max / scale)}
      color: inherit;
    }

    strong {
      font-weight: ${weights.medium};
    }
  `
})

export const TextLink = styled(Text).attrs({ as: 'a' })`
  text-decoration: underline;
  text-decoration-thickness: 0.1em;
  cursor: pointer;
  display: inline-block;

  ${({ highlighted }) =>
    highlighted &&
    css`
      background: hotpink;
      color: white;
    `}
`

export { FluidProvider } from './context'
