import React, { useEffect, useState, useRef, useCallback } from 'react'
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
  const [issuePage, setIssuePage] = useState<number>(1)
  const navigate = useNavigate()

  const observerRef = useRef<IntersectionObserver>()
  const boxRef = useRef<HTMLLIElement>(null)

  useEffect(() => {
    getIssueRequest(issuePage)
      .then((response) => {
        setIssueList((issueList) => {
          const newData = [...issueList, ...response]
          return newData
        })
        setLoading(false)
      })
      .catch((error) => {
        console.error(error)
      })
  }, [issuePage])

  useEffect(() => {
    observerRef.current = new IntersectionObserver(intersectionObserver)
    boxRef.current && observerRef.current.observe(boxRef.current)
  }, [issueList])

  // IntersectionObserver 설정
  const intersectionObserver = (entries: IntersectionObserverEntry[], io: IntersectionObserver) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        // 관찰하고 있는 entry가 화면에 보여지는 경우
        io.unobserve(entry.target) // entry 관찰 해제
        console.log('데이터 불러오기')
        setIssuePage((issuePage: number) => {
          return issuePage + 1
        })
        setLoading(true)
      }
    })
  }

  if (loading === true) {
    return <div>로딩중</div>
  } else {
    return (
      <>
        <h2>ListPage</h2>

        <ul>
          {issueList.map((issue, index) => {
            if (issueList.length === index + 1) {
              return (
                <li key={issue.id} onClick={() => navigate(`/detail/${issue.number}`)} ref={boxRef}>
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
            } else {
              return (
                <li key={issue.id} onClick={() => navigate(`/detail/${issue.number}`)}>
                  <strong>{index}</strong>
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
            }
          })}
        </ul>
      </>
    )
  }
}

export default ListPage
