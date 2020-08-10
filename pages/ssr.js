function Ssr({ posts }) {
  return (
    <div>
      <p>サーバーサイドで動的にページを作ってHTMLを返す</p>
      <ul>{posts.map((post) => <li>{post.title}</li>)}</ul>
    </div>
  )
}

export async function getServerSideProps() {
  const res = await fetch("https://api.github.com/repos/rails/rails/issues")
  const posts = await res.json();

  return {
    props: {
      posts
    }
  }
}

export default Ssr