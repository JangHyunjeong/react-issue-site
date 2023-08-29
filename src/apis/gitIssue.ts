import { Instance } from './instance'

export const getIssueRequest = async (page: number) => {
  const { data } = await Instance.get(`issues?page=${page}`)
  return data
}
