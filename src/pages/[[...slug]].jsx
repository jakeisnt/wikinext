import { join } from "path";
import Head from "next/head";
import { useRouter } from "next/router";
import dynamic from "next/dynamic";

import { getAllPaths, getPostBySlug } from "../lib/api";

import Link from "../components/Link";
import Rehype from "../components/Rehype";

// get url path from router, defaulting to /index to edit org file properly
const getUrl = (router) => (router.asPath === "/" ? "/index" : router.asPath);

const Note = ({ title, hast, backlinks, data }) => {
  const router = useRouter();

  return (
    <main>
      <Head>
        <title>{title}</title>
        <script src="https://hypothes.is/embed.js" async></script>
      </Head>
      <h1>{title}</h1>
      <a
        href={`https://github.com/jakeisnt/wiki/edit/main${getUrl(router)}.org`}
        target="_blank"
        rel="noreferrer noopener"
      >
        EDIT
      </a>
      <Rehype hast={hast} />
      {!!backlinks.length && (
        <section>
          <h2>{"Backlinks"}</h2>
          <ul>
            {backlinks.map((b) => (
              <li key={b.path}>
                <Link href={b.path}>{b.title}</Link>
              </li>
            ))}
          </ul>
        </section>
      )}
    </main>
  );
};
export default Note;

export const getStaticPaths = async () => {
  const paths = await getAllPaths();
  // add '/' which is synonymous to '/index'
  paths.push("/");

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async ({ params }) => {
  const path = "/" + join(...(params.slug || ["index"]));
  const post = await getPostBySlug(path);
  const data = post.data;
  const backlinks = await Promise.all([...data.backlinks].map(getPostBySlug));
  return {
    props: {
      title: data.title || post.basename,
      hast: post.result,
      backlinks: backlinks.map((b) => ({
        path: b.path,
        title: b.data.title || b.basename,
      })),
    },
  };
};
