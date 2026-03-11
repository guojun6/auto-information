import './Footer.css'

function Footer() {
  return (
    <footer className="footer">
      <p>Powered by GitHub API • 更新于 {new Date().toLocaleDateString('zh-CN')}</p>
    </footer>
  )
}

export default Footer
