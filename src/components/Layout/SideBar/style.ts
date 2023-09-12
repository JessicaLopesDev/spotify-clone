import styled, { css } from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  min-width: 300px;
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

export const Field = styled.div`
  ${({ theme }) => css`
    color: ${theme.color.text.subtitle};
    font-weight: 600;
    display: flex;
    align-items: center;
    height: 56px;
    padding: 0 22px 0 22px;
    gap: 16px;
  `}
`

export const InputBox = styled.div`
  width: 200px;
`

export const BottomContent = styled.div`
  ${({ theme }) => css`
    background-color: ${theme.color.primary};
    height: calc(100vh - 200px);
    border-radius: 4px;
  `}
`
