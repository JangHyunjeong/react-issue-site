import { Instance } from './instance'

export const getIssueRequest = async (page: number) => {
  try {
    const { data } = await Instance.get(`issues?sort=comments&per_page=30&page=${page}`)
    return data
  } catch (error) {
    return error
  }
}

export const getIssueOneRequest = async (issueNumber: number) => {
  try {
    const { data } = await Instance.get(`issues/${issueNumber}`)
    return data
  } catch (error) {
    return error
  }
}
