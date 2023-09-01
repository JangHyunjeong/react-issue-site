import { BrowserRouter, Routes, Route } from 'react-router-dom'

import IssueListPage from './IssueListPage'
import IssueDetailPage from './IssueDetailPage'

function PageRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<IssueListPage></IssueListPage>}></Route>
        <Route path="/detail/:id" element={<IssueDetailPage></IssueDetailPage>}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default PageRouter
