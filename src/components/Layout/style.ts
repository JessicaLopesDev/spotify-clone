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

export const MainContent = styled.div`
  padding-right: 8px;
`

export const Content = styled.div`
  ${({ theme }) => css`
    border-radius: 0 0 4px 4px;
    background-color: ${theme.color.primary};
    height: calc(100vh - 144px);
    overflow: auto;
  `}
`
