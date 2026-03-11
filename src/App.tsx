import { useState, useEffect } from 'react'
import Header from './components/Header'
import RepoList from './components/RepoList'
import Footer from './components/Footer'
import './App.css'

export interface Repo {
  id: number
  name: string
  full_name: string
  description: string
  html_url: string
  stargazers_count: number
  forks_count: number
  language: string
  owner: {
    login: string
    avatar_url: string
  }
  updated_at: string
}

function App() {
  const [repos, setRepos] = useState<Repo[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  const fetchTrending = async () => {
    setLoading(true)
    setError(null)
    try {
      const response = await fetch(
        'https://api.github.com/search/repositories?q=created:>=2024-01-01&sort=stars&order=desc&per_page=30'
      )
      if (!response.ok) {
        throw new Error('获取数据失败')
      }
      const data = await response.json()
      setRepos(data.items || [])
    } catch (err) {
      setError(err instanceof Error ? err.message : '未知错误')
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchTrending()
  }, [])

  return (
    <div className="app">
      <Header />
      <main>
        {loading && <div className="loading">加载中...</div>}
        {error && <div className="error">{error}</div>}
        {!loading && !error && <RepoList repos={repos} />}
      </main>
      <Footer />
    </div>
  )
}

export default App
