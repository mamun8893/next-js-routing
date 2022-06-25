import { useRouter } from "next/router";

const ClientSelectedProjectPage = () => {
  const router = useRouter();
  console.log(router.pathname);
  console.log(router.query);
  return (
    <div>
      <h2>This is a Client Selected peoject list</h2>
    </div>
  );
};

export default ClientSelectedProjectPage;
