import { useEffect, useState } from 'react'
import { getIssueRequest } from '../apis/gitIssue'
import { useNavigate } from 'react-router-dom'

interface userType {
  login: string
}

interface issueListType {
  id: number
  number: number
  title: string
  user: userType
  created_at: string
  comments: string
}

function ListPage() {
  const [issueList, setIssueList] = useState<issueListType[]>([])
  const [issuePage] = useState<number>(1)
  const navigate = useNavigate()

  useEffect(() => {
    getIssueRequest(issuePage).then((res) => {
      setIssueList(res)
    })
  }, [])

  return (
    <>
      <h2>ListPage</h2>

      <ul>
        {issueList.map((issue) => {
          return (
            <li key={issue.id} onClick={() => navigate(`/detail/${issue.number}`)}>
              <div>
                <div>
                  <span>{issue.number}</span>
                  <strong>{issue.title}</strong>
                </div>
                <div>
                  <dl>
                    <dt>작성자 : </dt>
                    <dd>{issue.user.login}</dd>
                  </dl>
                  <dl>
                    <dt>작성일 : </dt>
                    <dd>{issue.created_at}</dd>
                  </dl>
                </div>
              </div>

              <div>{issue.comments}</div>
            </li>
          )
        })}
      </ul>
    </>
  )
}
export default ListPage
