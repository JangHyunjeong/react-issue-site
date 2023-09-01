import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getIssueOneRequest } from '../apis/gitIssue'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'

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
  const [loading, setLoading] = useState<boolean>(true)
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
    getIssueOneRequest(issueNumber).then((res) => {
      setIssueData(res)
      setLoading(false)
    })
  }, [issueNumber])

  if (loading === true) {
    // FIXME: 로딩 로직, 로직 컴포넌트 분리하기
    return <S.IssueLoading>Loading...</S.IssueLoading>
  } else {
    return (
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
