import { useRouter } from "next/router";

const ClientProjectPage = () => {
  const router = useRouter();
  console.log(router.query);

  const loadPageHandler = () => {
    router.push("/client/1/add-projecta");
  };
  return (
    <div>
      <h2>This is client project page</h2>
      <button onClick={loadPageHandler}>Load Project A</button>
    </div>
  );
};

export default ClientProjectPage;
