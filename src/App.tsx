import PageRouter from './pages/PageRouter'

import { ThemeProvider } from 'styled-components'
import { theme } from './styles/base/DefaultTheme'
import GlobalStyle from './styles/base/GlobalStyles'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <PageRouter />
    </ThemeProvider>
  )
}
export default App
