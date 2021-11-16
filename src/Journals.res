type postdata = {
  title: string,
}

type incoming = {
  data: postdata,
  basename: string,
  path: string,
}


type post = {
  path: string,
  title: string,
}

@module("/lib/api") external getAllPosts: () => array<incoming> = "getAllPosts"
     
type props = {
  posts: array<post>,
}

let default = (props: props): React.element => {
  let {posts} = props

  <main>
      <Next.Head>
        <title>{React.string("Journals")}</title>
      </Next.Head>
      <h1>{React.string("Journals")}</h1>
      <ul>
        {React.array(Array.map((p) => (
            <li key={p.path}>
            <Next.Link href={p.path}>{React.string(p.title)}</Next.Link>
          </li>
        ), posts))}
      </ul>
    </main>
}

let journal_path = "/journals"

let getStaticProps = _ctx => {
  let posts = getAllPosts() // TODO
  let pa = Array.map(p => {title: p.basename, path: p.path}, posts) // TODO p.data.title or 
  let pb = Array.keep(pa, p => p.path.startsWith(journal_path))
  let pc = Array.map(p => {title: p.title, path: p.path, date: Js.Date(p.path.substring(journal_path.length))}, pb)
  let pd = SortArray.stableSortBy(pc, p => b.date - a.date)
  let pe = Array.map(p => {title: p.title, path: p.path, date: p.date.toString()})
  {posts: pe}}
