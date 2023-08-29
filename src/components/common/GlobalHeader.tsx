import { organization, repository } from '../../apis/instance'

function GlobalHeader() {
  return (
    <header>
      <h1>
        {organization} / {repository}
      </h1>
    </header>
  )
}
export default GlobalHeader
