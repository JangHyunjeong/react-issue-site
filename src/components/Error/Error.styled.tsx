import { Link } from 'react-router-dom'
import { styled } from 'styled-components'

export const ErrorContainer = styled.section`
  ${({ theme }) => theme.flex.flexColumnCenter};
  gap: 50px;
  min-height: 100vh;
`
export const ErrorTitle = styled.h2`
  color: ${({ theme }) => theme.colors.red};
  font-size: ${({ theme }) => theme.fontSizes.large};
  font-weight: 700;
`
export const LinkButton = styled(Link)`
  ${({ theme }) => theme.flex.flexCenter};
  width: 200px;
  height: 50px;
  color: ${({ theme }) => theme.colors.white};
  background-color: ${({ theme }) => theme.colors.red};
  font-weight: bold;
  border-radius: ${({ theme }) => theme.commonStyles.borderRadiusSmall};
`
