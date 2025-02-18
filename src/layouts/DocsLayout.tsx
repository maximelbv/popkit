import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";
import { Outlet } from "react-router";

const DocsLayout = () => {
  return (
    <>
      <Header />
      <div>
        <Sidebar />
        <main>
          <Outlet />
        </main>
      </div>
    </>
  );
};

export default DocsLayout;
