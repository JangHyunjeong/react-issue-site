import { Link } from 'react-router-dom'
import { styled } from 'styled-components'

export const ListContainer = styled.section``
export const ListUl = styled.ul`
  padding: 20px;
  border-radius: ${({ theme }) => theme.commonStyles.borderRadiusLarge};
  box-shadow: ${({ theme }) => theme.commonStyles.boxShadow};
`
export const ListLi = styled.li`
  ${({ theme }) => theme.flex.flexBetweenCenter};
  padding: 20px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
  cursor: pointer;
`
export const ListLiLeft = styled.div`
  ${({ theme }) => theme.flex.flexColumnStartCenter};
  gap: 6px;
`
export const IssueNumber = styled.span`
  display: inline-flex;
  align-items: center;
  padding: 4px 10px;
  border-radius: ${({ theme }) => theme.commonStyles.borderRadiusSmall};
  background-color: ${({ theme }) => theme.colors.primaryButtonColor};
  color: ${({ theme }) => theme.colors.primaryButtonTextColor};
  font-size: ${({ theme }) => theme.fontSizes.small};
  font-weight: 700;
`
export const IssueTitle = styled.strong`
  display: block;
  font-weight: 700;
`
export const IssueInfo = styled.div`
  ${({ theme }) => theme.flex.flexColumnStartCenter}
  gap: 4px;
  font-size: ${({ theme }) => theme.fontSizes.small};
  color: ${({ theme }) => theme.colors.subTextColor};
`
export const IssueInfoDl = styled.dl`
  ${({ theme }) => theme.flex.flexStartCenter}

  dt {
    margin-right: 4px;
  }
`
export const ListLiRight = styled.div``
export const IssueComments = styled.strong`
  ${({ theme }) => theme.flex.flexCenter}
  min-width: 40px;
  height: 30px;
  padding: 0 10px;
  background-color: ${({ theme }) => theme.colors.primaryButtonColor};
  border-radius: 20px;
  font-size: ${({ theme }) => theme.fontSizes.small};
  font-weight: 700;
  color: ${({ theme }) => theme.colors.primaryButtonTextColor};
`
export const IssueAd = styled(Link)`
  ${({ theme }) => theme.flex.flexCenter}
  padding: 20px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
`
export const IssueLoading = styled.div`
  ${({ theme }) => theme.flex.flexCenter}
  position: fixed;
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  background-color: ${({ theme }) => theme.colors.dimmed};
  color: ${({ theme }) => theme.colors.white};
`
