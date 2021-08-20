import Link from "next/link";

import Head from "next/head";

// Source: Primarily https://github.com/rasendubi/www.alexeyshmalko.com/blob/master/pages/uniorg.tsx

export default function Page404() {
  return (
    <div className="root">
      <Head>
        <title>404</title>
      </Head>
      <h1>{"404"}</h1>
      <p>{"This page is private or does not exist."}</p>
      <p>
        {"Go to:"}
        <ul>
          <li>
            <Link href="/">Home page</Link>
          </li>
          <li>
            <Link href="/archive">Page Index</Link>
          </li>
        </ul>
      </p>

      <style jsx>{`
        .root {
          flex-grow: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }
        h1 {
          margin-bottom: 4px;
        }
        p {
          text-align: center;
        }
        ul {
          padding: 0;
        }
      `}</style>
    </div>
  );
}
