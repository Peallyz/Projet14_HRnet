import Form from "../Component/Form";
import Header from "../Component/Header";
import Link from "../Component/Link";

const Home = () => {
  return (
    <>
      <Header title="HRnet" />
      <main className="home">
        <Link destination="/employee-list" content="View Current Employees" />
        <h2>Create Employee</h2>
        <Form />
        <button className="link">Save</button>
      </main>
    </>
  );
};

export default Home;
