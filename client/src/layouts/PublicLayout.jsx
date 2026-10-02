import Navbar from "../components/navbar/Navbar";

function PublicLayout({ children }) {
  return (
    <>
      <Navbar />

      <main>
        {children}
      </main>
    </>
  );
}

export default PublicLayout;