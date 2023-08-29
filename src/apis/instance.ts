import axios from 'axios'
const BASE_URL = 'https://api.github.com/repos/facebook/react/'

export const Instance = axios.create({
  baseURL: BASE_URL,
  headers: {
    Authorization: `Bearer ${process.env.REACT_APP_GITHUB_TOKEN}`,
  },
})
