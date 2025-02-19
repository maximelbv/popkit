import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";
import { Outlet, useLocation } from "react-router";

const DocsLayout = () => {
  const location = useLocation();

  return (
    <>
      <Header />
      <div className="flex max-w-layout-max-w !p-4 !m-auto">
        <Sidebar />
        <main>
          <Outlet key={location.pathname} />
        </main>
      </div>
    </>
  );
};

export default DocsLayout;
