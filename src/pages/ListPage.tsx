import { useEffect, useState } from 'react'
import { getIssueRequest } from '../apis/gitIssue'

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
            <li key={issue.id}>
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
