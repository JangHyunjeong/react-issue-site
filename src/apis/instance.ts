import axios from 'axios'
export const organization = 'facebook'
export const repository = 'react'

const BASE_URL = `https://api.github.com/repos/${organization}/${repository}/`

export const Instance = axios.create({
  baseURL: BASE_URL,
  headers: {
    Authorization: `Bearer ${process.env.REACT_APP_GITHUB_TOKEN}`,
  },
})
