import { Outlet } from 'react-router-dom'

//import GlobalHeader from '../Common/GlobalHeader'

import * as S from './Layout.styled'

export default function Layout() {
  return (
    <S.LayoutContainer>
      {/* <GlobalHeader /> */}
      <S.Main>
        <Outlet />
      </S.Main>
    </S.LayoutContainer>
  )
}
