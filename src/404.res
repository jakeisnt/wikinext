let default = () =>
    <div className="root">
      <h1>{React.string("404")}</h1>
      <p>{React.string("This page is private or does not exist.")}</p>
      <p>
        {React.string("Go to:")}
        <ul>
          <li>
            <Next.Link href="/">{React.string("Home page")}</Next.Link>
          </li>
          <li>
            <Next.Link href="/archive">{React.string("Search")}</Next.Link>
          </li>
        </ul>
      </p>
    // TODO: bring back the styles, but maybe not inline

      /* <style jsx>{React.string(" */
      /*   .root { */
      /*     flex-grow: 1; */
      /*     display: flex; */
      /*     flex-direction: column; */
      /*     justify-content: center; */
      /*     align-items: center; */
      /*   } */
      /*   h1 { */
      /*     margin-bottom: 4px; */
      /*   } */
      /*   p { */
      /*     text-align: center; */
      /*   } */
      /*   ul { */
      /*     padding: 0; */
      /*   } */
      /* ")}</style> */
    </div>
