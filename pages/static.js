function Static({ posts }) {
  return(
    <div>
      <p>サーバー側であらかじめ静的なHTMLを生成したページ</p>
      <ul>{posts.map((post) => <li>{post.title}</li>)}</ul>
    </div>
    )
}

export async function getStaticProps() {
  const res = await fetch("https://api.github.com/repos/rails/rails/issues")
  const posts = await res.json();

  return {
    props: {
      posts
    }
  }
}

export default Static