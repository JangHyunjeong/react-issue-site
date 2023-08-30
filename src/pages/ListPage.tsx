import { useEffect, useState, useRef } from 'react'
import { useNavigate, Link } from 'react-router-dom'
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
  const [loading, setLoading] = useState<boolean>(true)
  const [issueList, setIssueList] = useState<issueListType[]>([])
  const [page, setPage] = useState<number>(1)
  const navigate = useNavigate()

  const scrollRef = useRef<HTMLLIElement>(null)

  useEffect(() => {
    getIssueRequest(page)
      .then((response) => {
        setIssueList((oldIssue) => {
          return Array.from(new Set([...oldIssue, ...response]))
        })
        setLoading(false)
      })
      .catch((error) => {
        console.error(error)
      })
  }, [page])

  useEffect(() => {
    if (scrollRef && scrollRef.current) {
      const intersectionObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setPage((page) => {
              return page + 1
            })
            observer.unobserve(entry.target)
          }
        })
      })
      intersectionObserver.observe(scrollRef.current)
    }
  }, [scrollRef, issueList])

  if (loading === true) {
    return <div>로딩중</div>
  } else {
    return (
      <>
        <h2>ListPage</h2>

        <ul>
          {issueList.map((issue, index) => {
            return (
              <li
                key={issue.number}
                onClick={() => navigate(`/detail/${issue.number}`)}
                ref={issueList.length === index + 1 ? scrollRef : null}
              >
                <strong>{index} Ref</strong>
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
                {(issueList.indexOf(issue) + 1) % 5 === 0 && (
                  <div>
                    <Link to="https://www.wanted.co.kr/jobsfeed" target="_blank">
                      <img src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fuserweb%2Flogo_wanted_black.png&w=110&q=100"></img>
                    </Link>
                  </div>
                )}
              </li>
            )
          })}
        </ul>
      </>
    )
  }
}

export default ListPage
