import { Repo } from '../App'
import RepoCard from './RepoCard'
import './RepoList.css'

interface Props {
  repos: Repo[]
}

function RepoList({ repos }: Props) {
  return (
    <div className="repo-list">
      {repos.map((repo) => (
        <RepoCard key={repo.id} repo={repo} />
      ))}
    </div>
  )
}

export default RepoList
