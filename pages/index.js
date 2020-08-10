import useSWR from "swr"
import Link from "next/link"
import { useUser } from "../utils/auth/useUser"

const Index = () => {
  const { user, logout } = useUser()
  // const { data, error } = useSWR(
  //   user ? ["/api/getFood", user.token] : null,
  //   fetcher
  // )
  if (!user) {
    return (
      <>
        <p>Hi there!</p>
        <p>
          You aru not signed in.{' '}
          <Link href="/auth">
            <a>Sign in</a>
          </Link>
        </p>
      </>
    )
  }

  return (
    <div>
      <p>You're signed in. Email: {user.email}</p>
      <p
        style={{
          display: 'inline-block',
          color: 'blue',
          textDecoration: 'underline',
          cursor: 'pointer',
        }}
        onClick={() => logout()}
      >
        Log out
      </p>
      <div>
        <Link href={'/example'}>
          <a>Another example page</a>
        </Link>
      </div>
    </div>
  )
}

export default Index