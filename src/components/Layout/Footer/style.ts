import styled, { css } from 'styled-components'

export const Container = styled.div`
  ${({ theme }) => css`
    width: 100%;
    height: 72px;
    background-color: ${theme.color.background};
  `}
`
