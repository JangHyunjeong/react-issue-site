import { styled } from 'styled-components'

export const DeatilContainer = styled.section`
  padding: 20px;
  border-radius: ${({ theme }) => theme.commonStyles.borderRadiusLarge};
  box-shadow: ${({ theme }) => theme.commonStyles.boxShadow};
`

export const DeatilHeader = styled.header`
  ${({ theme }) => theme.flex.flexBetweenCenter};
  padding: 20px 0;
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
  cursor: pointer;
`
export const DeatilHeaderLeft = styled.div`
  ${({ theme }) => theme.flex.flexColumnStartCenter};
  gap: 10px;
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
  font-size: ${({ theme }) => theme.fontSizes.large};
`
export const IssueInfo = styled.div`
  ${({ theme }) => theme.flex.flexColumnStartCenter}
  gap: 10px;
  font-size: ${({ theme }) => theme.fontSizes.small};
  color: ${({ theme }) => theme.colors.subTextColor};
`
export const IssueInfoUser = styled.div`
  ${({ theme }) => theme.flex.flexStartCenter}
  font-weight: 700;
  margin-right: 20px;
  font-size: ${({ theme }) => theme.fontSizes.default};
`
export const IssueInfoUserImg = styled.div`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  overflow: hidden;
  margin-right: 6px;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`
export const DeatilHeaderRight = styled.div``
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
export const DetailContents = styled.div`
  padding: 20px 0;

  line-height: 1.4em;
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
