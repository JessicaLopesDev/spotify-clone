import { AiOutlineHome } from 'react-icons/ai'
import { FiSearch } from 'react-icons/fi'

import * as S from './style'
import { InputSearch } from '../../Shared/InputSearch'

export const SideBar = () => {
  return (
    <S.Container>
      <S.TopContent>
        <S.Field>
          <AiOutlineHome size={26} />
          Home
        </S.Field>
        <S.Field>
          <FiSearch size={26} />
          <S.InputBox>
            <InputSearch />
          </S.InputBox>
        </S.Field>
      </S.TopContent>
      <S.BottomContent></S.BottomContent>
    </S.Container>
  )
}
