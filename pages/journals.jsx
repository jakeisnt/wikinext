import Head from "next/head";

import { getAllPosts } from "../lib/api";
import Link from "../components/Link";

const Journals = ({ posts }) => {
  console.log(posts);
  return (
    <main>
      <Head>
        <title>{"Journals"}</title>
      </Head>
      <h1>{"Journals"}</h1>
      <ul>
        {posts.map((p) => (
          <li key={p.path}>
            <Link href={p.path}>{p.title}</Link>
          </li>
        ))}
      </ul>
    </main>
  );
};
export default Journals;
const JOURNAL_PATH = "/journals";

export const getStaticProps = async () => {
  const allPosts = await getAllPosts();
  const posts = allPosts
    .map((p) => ({ title: p.data.title || p.basename, path: p.path }))
    .filter((p) => p.path.startsWith(JOURNAL_PATH))
    .map((p) => ({
      ...p,
      date: new Date(p.path.substring(JOURNAL_PATH.length)),
    }))
    .sort((a, b) => b.date - a.date)
    .map((p) => ({ ...p, date: p.date.toString() }));
  return { props: { posts } };
};
