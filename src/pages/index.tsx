import Head from "next/head";
import { Sample } from "../components/Sample/Sample";

const Page = (): JSX.Element => (
  <div>
    <Head>
      <title>
        Create Next
        App
      </title>
      <link
        rel="icon"
        href="/favicon.ico"
      />
    </Head>

    <main>
      hello next.js
      <Sample sample="sample" />
    </main>
  </div>
);

export default Page;
