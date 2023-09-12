import styled from 'styled-components'
export const ButtonWithTheme = styled.button`
  border: ${(props) => props.theme.border.style};
  border-radius: ${(props) => props.theme.border.radius};

  font-size: ${(props) => props.theme.font.big};
`
