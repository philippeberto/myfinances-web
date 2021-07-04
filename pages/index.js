import { signIn, signOut, useSession } from 'next-auth/client'

const Index = () => {
  const [session, loading] = useSession()

  return <>
    {!session && <>
      <div className='w-1/4 mx-auto text-center'>
        <div className='bg-red-200 text-red-600 border-red-500 border-l-2 w-48 mx-auto mt-4  p-2'>User not logged in</div>
        <button className='bg-green-500 p-2 text-white rounded-sm mt-2 hover:bg-green-600' onClick={() => signIn()}>Sign in</button>
      </div>

    </>}
    {session && <>
      Signed in as {session.user.email} <br />
      <button onClick={() => signOut()}>Sign out</button>
    </>}
  </>

  const user = false
  if (user) {
    return (
      <h1>User logged in</h1>
    )
  } else {
    return (
      <div className='bg-red-200 border-red-500 border-l-2 w-48 mx-auto mt-4  p-2'>User not logged in</div>
    )
  }
}

export default Index