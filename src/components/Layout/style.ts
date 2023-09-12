import styled, { css } from 'styled-components'

export const Container = styled.div`
  ${({ theme }) => css`
    background-color: ${theme.color.background};
  `}
`

export const TopContent = styled.div`
  display: flex;
`
export const RightContent = styled.div`
  width: 100%;
`

export const Content = styled.div`
  background-color: pink;
  height: calc(100vh - 144px);
  overflow: auto;
`
