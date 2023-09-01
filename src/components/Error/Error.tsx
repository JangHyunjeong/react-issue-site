import * as S from './Error.styled'

export default function Error() {
  return (
    <S.ErrorContainer>
      <S.ErrorTitle>ERROR!</S.ErrorTitle>
      <S.LinkButton to="/">메인으로 이동</S.LinkButton>
    </S.ErrorContainer>
  )
}
