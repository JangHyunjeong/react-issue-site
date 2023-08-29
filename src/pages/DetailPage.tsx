import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getIssueOneRequest } from '../apis/gitIssue'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'

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
    })
  }, [issueNumber])

  return (
    <section>
      <h2>DetailPage</h2>

      <div>
        <header>
          <h3>
            <span>{issueData.number}</span>
            <strong>{issueData.title}</strong>
          </h3>
        </header>
        <div>
          <dl>
            <dt>작성자 : </dt>
            <dd>
              <img src={issueData.user.avatar_url}></img> {issueData.user.login}
            </dd>
          </dl>
          <dl>
            <dt>작성일 : </dt>
            <dd>{issueData.created_at}</dd>
          </dl>
          <dl>
            <dt>코멘트 수 : </dt>
            <dd>{issueData.comments}</dd>
          </dl>
        </div>
      </div>

      <div>
        <ReactMarkdown remarkPlugins={[remarkGfm]} skipHtml={true}>
          {issueData.body}
        </ReactMarkdown>
      </div>
    </section>
  )
}
export default DetailPage
