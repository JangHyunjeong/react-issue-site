import { Link } from 'react-router-dom'

export default function ErrorPage() {
  return (
    <div>
      <h2>ERROR!</h2>
      <Link to="/">메인으로 이동</Link>
    </div>
  )
}
