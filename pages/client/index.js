import Link from "next/link";

const ClientPage = () => {
  const clients = [
    { id: "1", name: "mamunur" },
    { id: "2", name: "Rashid" },
  ];
  return (
    <div>
      <h2>This is a Client Page</h2>
      <ul>
        {clients.map((client) => (
          <li key={client.id}>
            <Link href={`client/${client.id}`}>{client.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ClientPage;
