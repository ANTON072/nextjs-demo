import { useEffect, useState } from "react"

function Spa() {
  const [posts, setPosts] = useState([])

  useEffect(() => {
    async function init() {
      const res = await fetch("https://api.github.com/repos/rails/rails/issues")
      const posts = await res.json();
      setPosts(posts);
    }

    init();
  }, [])

  return (
    <div>
      <p>SPA式の通信</p>
      <ul>{posts.map((post) => <li>{post.title}</li>)}</ul>
    </div>
  )
}

export default Spa