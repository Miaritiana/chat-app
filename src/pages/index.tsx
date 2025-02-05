import Head from 'next/head'
import Login from './login'

export default function Home() {
  return (
    <>
      <Head>
        <title>Chat app</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Login/>
      </main>
    </>
  )
}
