import { useEffect, useState, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import { getIssueRequest } from '../apis/gitIssue'
import { issueListType } from '../components/Issue/type'
import { useInfinityScroll } from '../hooks/useInfinityScroll'

import Error from '../components/Error/Error'

import * as S from '../components/Issue/IssueList.styled'

function ListPage() {
  const [isLoading, setIsLoading] = useState<boolean>(true)
  const [isError, setIsError] = useState<boolean>(false)
  const [issueList, setIssueList] = useState<issueListType[]>([])
  const navigate = useNavigate()
  const scrollRef = useRef<HTMLLIElement | null>(null)
  const { page } = useInfinityScroll(scrollRef, issueList)

  // FIXME: 바깥으로 뺄수 있는 방법이 있을까?!
  // FIXME: 아니면 useCallback 사용하는건?
  useEffect(() => {
    setIsLoading(true)

    getIssueRequest(page)
      .then((response) => {
        setIssueList((oldIssue) => {
          // FIXME: oldIsssue 에 response 가 계속 붙는구나..
          return Array.from(new Set([...oldIssue, ...response]))
        })
        setIsLoading(false)
        setIsError(false)
      })
      .catch(() => {
        setIsLoading(false)
        setIsError(true)
      })
  }, [page])

  return (
    <>
      {isLoading && <S.IssueLoading>Loading...</S.IssueLoading>}
      {isError && <Error />}

      <S.ListContainer>
        <h2 className="visuallyHidden">ListPage</h2>

        <S.ListUl>
          {issueList.map((issue, index) => {
            return (
              <>
                <S.ListLi
                  key={issue.number}
                  onClick={() => navigate(`/detail/${issue.number}`)}
                  ref={issueList.length === index + 1 ? scrollRef : null}
                >
                  <S.ListLiLeft>
                    <S.IssueNumber>{issue.number}</S.IssueNumber>
                    <S.IssueTitle>{issue.title}</S.IssueTitle>
                    <S.IssueInfo>
                      <S.IssueInfoDl>
                        <dt>작성자 :</dt>
                        <dd>{issue.user.login}</dd>
                      </S.IssueInfoDl>
                      <S.IssueInfoDl>
                        <dt>작성일 :</dt>
                        <dd>{issue.created_at}</dd>
                      </S.IssueInfoDl>
                    </S.IssueInfo>
                  </S.ListLiLeft>
                  <S.ListLiRight>
                    <S.IssueComments>{issue.comments}</S.IssueComments>
                  </S.ListLiRight>
                </S.ListLi>
                {(index + 1) % 5 === 0 && (
                  <S.IssueAd to="https://www.wanted.co.kr/jobsfeed" target="_blank">
                    <img src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fuserweb%2Flogo_wanted_black.png&w=110&q=100"></img>
                  </S.IssueAd>
                )}
              </>
            )
          })}
        </S.ListUl>
      </S.ListContainer>
    </>
  )
}

export default ListPage
