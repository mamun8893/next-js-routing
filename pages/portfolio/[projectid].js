import { useRouter } from "next/router";

const PortfolioProjectPage = () => {
  const router = useRouter();
  console.log(router.pathname);
  console.log(router.query);

  return (
    <div>
      <h2>Portfolio Project Page</h2>
    </div>
  );
};

export default PortfolioProjectPage;
