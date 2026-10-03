import Navbar from "../components/navbar/Navbar";
import BackgroundGlow from "../components/common/BackgroundGlow";

function PublicLayout({ children }) {
  return (
    <>
      <BackgroundGlow />

      <Navbar />

      <main>
        {children}
      </main>
    </>
  );
}

export default PublicLayout;