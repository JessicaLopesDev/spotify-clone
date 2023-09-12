import styled, { css } from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  min-width: 250px;
  height: calc(100vh - 72px);
  padding: 8px 8px 0 8px;
`

export const TopContent = styled.div`
  ${({ theme }) => css`
    background-color: ${theme.color.primary};
    height: 112px;
    border-radius: 4px;
  `}
`

export const BottomContent = styled.div`
  ${({ theme }) => css`
    background-color: ${theme.color.primary};
    height: calc(100vh - 200px);
    border-radius: 4px;
  `}
`
