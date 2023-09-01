import GlobalHeader from './components/Common/GlobalHeader'
import PageRouter from './pages/PageRouter'

import { styled, ThemeProvider } from 'styled-components'
import { Theme } from './styles/base/DefaultTheme'
import GlobalStyle from './styles/base/GlobalStyles'

function App() {
  return (
    <ThemeProvider theme={Theme}>
      <GlobalLayout>
        <GlobalStyle />
        <GlobalHeader />
        <PageRouter />
      </GlobalLayout>
    </ThemeProvider>
  )
}
export default App

const GlobalLayout = styled.div``
