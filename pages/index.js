import Link from "next/link";

const HomePage = () => {
  return (
    <div>
      <h2>Hello Next</h2>
      <ul>
        <li>
          <Link href="/about">About</Link>
        </li>
        <li>
          <Link href="/portfolio">Portfolio</Link>
        </li>
        <li>
          <Link href="/client">Client</Link>
        </li>
      </ul>
    </div>
  );
};

export default HomePage;
