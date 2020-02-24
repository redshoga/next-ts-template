import Head from 'next/head'
import { Sample } from "../components/Sample/Sample"

export default () => (
  <div>
    <Head>
      <title>Create Next App</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <main>
      hello next.js
      <Sample sample="sample text"/>
    </main>
  </div>
)
