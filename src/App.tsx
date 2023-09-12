import { ThemeProvider } from 'styled-components'
import { AppRoutes } from './routes/index.routes'
import GlobalStyle from './styles/global'
import Theme from './styles/theme'

function App() {
  return (
    <ThemeProvider theme={Theme}>
      <AppRoutes />
      <GlobalStyle />
    </ThemeProvider>
  )
}

export default App
