import { Repo } from '../App'
import './RepoCard.css'

interface Props {
  repo: Repo
}

function RepoCard({ repo }: Props) {
  const formatDate = (dateStr: string) => {
    const date = new Date(dateStr)
    return date.toLocaleDateString('zh-CN')
  }

  return (
    <a href={repo.html_url} target="_blank" rel="noopener noreferrer" className="repo-card">
      <div className="repo-header">
        <img src={repo.owner.avatar_url} alt={repo.owner.login} className="repo-avatar" />
        <div className="repo-title">
          <h3>{repo.name}</h3>
          <span className="repo-author">{repo.owner.login}</span>
        </div>
      </div>
      
      <p className="repo-description">{repo.description || '暂无描述'}</p>
      
      <div className="repo-stats">
        <span className="stat">
          <span className="star">⭐</span>
          {repo.stargazers_count.toLocaleString()}
        </span>
        <span className="stat">
          <span className="fork">🍴</span>
          {repo.forks_count.toLocaleString()}
        </span>
        {repo.language && (
          <span className="stat language">{repo.language}</span>
        )}
        <span className="stat date">{formatDate(repo.updated_at)}</span>
      </div>
    </a>
  )
}

export default RepoCard
