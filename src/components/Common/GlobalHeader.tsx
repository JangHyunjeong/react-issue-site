import { organization, repository } from '../../apis/instance'
import * as S from './GlobalHeader.styled'

function GlobalHeader() {
  return (
    <S.HeaderContainer>
      <S.HeaderTitle>
        {organization} / {repository}
      </S.HeaderTitle>
    </S.HeaderContainer>
  )
}
export default GlobalHeader
