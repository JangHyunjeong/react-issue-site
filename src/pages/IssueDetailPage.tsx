import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getIssueOneRequest } from '../apis/gitIssue'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'

import Error from '../components/Error/Error'

import * as S from '../components/Issue/IssueDetail.styled'

interface userType {
  login: string
  avatar_url: string
}

interface issueType {
  id: number
  number: number
  title: string
  user: userType
  created_at: string
  comments: string
  body: string
}

function DetailPage() {
  const params = useParams()
  const issueNumber = Number(params.id)
  const [isLoading, setIsLoading] = useState<boolean>(true)
  const [isError, setIsError] = useState<boolean>(false)
  const [issueData, setIssueData] = useState<issueType>({
    id: 0,
    number: 0,
    title: '',
    user: {
      login: '',
      avatar_url: '',
    },
    created_at: '',
    comments: '',
    body: '',
  })

  useEffect(() => {
    console.log(isError)
    getIssueOneRequest(issueNumber)
      .then((res) => {
        setIssueData(res)
        setIsLoading(false)
        setIsError(false)
      })
      .catch(() => {
        setIsError(true)
      })
  }, [issueNumber])

  if (isLoading) {
    return <S.IssueLoading>Loading...</S.IssueLoading>
  } else {
    return isError ? (
      <Error />
    ) : (
      <S.DeatilContainer>
        <h2 className="visuallyHidden">DetailPage</h2>

        <S.DeatilHeader>
          <S.DeatilHeaderLeft>
            <S.IssueNumber>{issueData.number}</S.IssueNumber>
            <S.IssueTitle>{issueData.title}</S.IssueTitle>

            <S.IssueInfo>
              <S.IssueInfoUser>
                <S.IssueInfoUserImg>
                  <img src={issueData.user.avatar_url} />{' '}
                </S.IssueInfoUserImg>
                {issueData.user.login}
              </S.IssueInfoUser>
              {issueData.created_at}
            </S.IssueInfo>
          </S.DeatilHeaderLeft>
          <S.DeatilHeaderRight>
            <S.IssueComments>{issueData.comments}</S.IssueComments>
          </S.DeatilHeaderRight>
        </S.DeatilHeader>

        <S.DetailContents>
          <ReactMarkdown remarkPlugins={[remarkGfm]} skipHtml={true}>
            {issueData.body}
          </ReactMarkdown>
        </S.DetailContents>
      </S.DeatilContainer>
    )
  }
}
export default DetailPage
