import { Outlet } from 'react-router-dom'

import * as S from './style'
import { SideBar } from './SideBar'
import { Footer } from './Footer'
import { Header } from './Header'

export const Layout = () => {
  return (
    <S.Container>
      <S.TopContent>
        <SideBar />

        <S.RightContent>
          <Header />

          <S.Content>
            <Outlet />
          </S.Content>
        </S.RightContent>
      </S.TopContent>

      <Footer />
    </S.Container>
  )
}
