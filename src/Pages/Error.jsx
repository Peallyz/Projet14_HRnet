import Link from "../Component/Link";

const Error = () => {
  return (
    <main className="error">
      <div className="container">
        <h1>404</h1>
        <p>Page not found</p>
        <Link destination="/" content="Retour à l'acceuil" />
      </div>
    </main>
  );
};

export default Error;
