import Link from "next/link";

function Home() {
  return (
    <div>
      <h1>Homepage</h1>
      <ul>
        <li>
          <Link href="/projects">Projects</Link>
        </li>
      </ul>
    </div>
  );
}

export default Home;
