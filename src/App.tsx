import { styled } from 'styled-components'
import GlobalHeader from './components/common/GlobalHeader'
import PageRouter from './pages/PageRouter'

function App() {
  return (
    <GlobalLayout>
      <GlobalHeader />
      <PageRouter />
    </GlobalLayout>
  )
}
export default App

const GlobalLayout = styled.div``
