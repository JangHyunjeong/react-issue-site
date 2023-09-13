export interface issueListType {
  id: number
  number: number
  title: string
  user: userType
  created_at: string
  comments: string
}

export interface userType {
  login: string
}
