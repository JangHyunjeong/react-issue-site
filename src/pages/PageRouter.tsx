import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Layout from '../components/Layout/Layout'
import ErrorPage from './ErrorPage'
import IssueListPage from './IssueListPage'
import IssueDetailPage from './IssueDetailPage'

function PageRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<IssueListPage />} />
          <Route element={<IssueDetailPage />} path="/detail/:id" />
        </Route>
        <Route element={<ErrorPage />} path="*" />
      </Routes>
    </BrowserRouter>
  )
}

export default PageRouter
