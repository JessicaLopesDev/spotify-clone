import styled, { css } from 'styled-components'

export const Container = styled.input`
  ${({ theme }) => css`
    background-color: ${theme.color.background};
    width: 148px;
    height: 26px;
    border: 2px solid ${theme.color.text.subtitle};
    border-radius: 16px;
    color: ${theme.color.text.subtitle};
    font-size: 14px;
    padding-left: 4px;
  `}
`
