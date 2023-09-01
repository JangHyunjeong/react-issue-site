import { Outlet } from 'react-router-dom'

import GlobalHeader from '../Common/GlobalHeader'

export default function Layout() {
  return (
    <div>
      <GlobalHeader />
      <main>
        <Outlet />
      </main>
    </div>
  )
}
