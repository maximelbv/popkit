import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";
import { Outlet } from "react-router";

const DocsLayout = () => {
  return (
    <>
      <Header />
      <div className="max-w-layout-max-w !p-4 !m-auto">
        <Sidebar />
        <main>
          <Outlet />
        </main>
      </div>
    </>
  );
};

export default DocsLayout;
