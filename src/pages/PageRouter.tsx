import { BrowserRouter, Routes, Route } from 'react-router-dom'

import ListPage from './ListPage'
import DetailPage from './DetailPage'

function PageRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<ListPage></ListPage>}></Route>
        <Route path="/detail/:id" element={<DetailPage></DetailPage>}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default PageRouter
