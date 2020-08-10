import { parseCookies } from 'nookies';

function Ssr({ posts, user }) {

  return (
    <div>
      <p>サーバーサイドで動的にページを作ってHTMLを返す</p>
      <ul>{posts.map((post) => <li key={post.id}>{post.title}</li>)}</ul>
      <p>Firebaseでログインした後のユーザー情報を取得してみる</p>
      {user && <p>Email: {user.email}</p>}
    </div>
  )
}

export async function getServerSideProps(ctx) {
  const cookie = parseCookies(ctx);
  const user = cookie && cookie.auth ? JSON.parse(cookie.auth) : null

  const res = await fetch("https://api.github.com/repos/rails/rails/issues")
  const posts = await res.json();

  return {
    props: {
      posts,
      user
    }
  }
}

export default Ssr