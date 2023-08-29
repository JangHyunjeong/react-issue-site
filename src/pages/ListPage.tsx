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

      {issueList.map((issue) => {
        return (
          <div key={issue.id}>
            <div>{issue.number}</div>
            <div>{issue.title}</div>
            <div>{issue.user.login}</div>
            <div>{issue.created_at}</div>
            <div>{issue.comments}</div>
          </div>
        )
      })}
    </>
  )
}
export default ListPage
