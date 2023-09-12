import styled, { css } from 'styled-components'

export const Container = styled.div`
  height: 72px;
  padding: 8px 8px 0 0;
`

export const Content = styled.div`
  ${({ theme }) => css`
    background-color: ${theme.color.primary};
    height: 100%;
    width: 100%;
    border-radius: 4px 4px 0 0;
  `}
`
