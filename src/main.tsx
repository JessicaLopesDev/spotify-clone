import ReactDOM from 'react-dom/client'
import { ThemeProvider } from 'styled-components'
import Theme from './styles/theme.ts'
import GlobalStyle from './styles/global'

import App from './App.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <ThemeProvider theme={Theme}>
    <App />
    <GlobalStyle />
  </ThemeProvider>,
)
