import { useEffect, useState } from 'react'
import { issueListType } from '../components/Issue/type'

export function useInfinityScroll(scrollRef: any, issueList: issueListType[]) {
  const [page, setPage] = useState<number>(1)

  useEffect(() => {
    if (scrollRef && scrollRef.current) {
      const intersectionObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setPage((page) => page + 1)
            observer.unobserve(entry.target)
          }
        })
      })

      intersectionObserver.observe(scrollRef.current)
    }
  }, [scrollRef, issueList])

  return { page }
}
