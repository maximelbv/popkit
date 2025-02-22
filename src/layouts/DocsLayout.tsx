import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";
import { Outlet, useLocation } from "react-router";

const DocsLayout = () => {
  const location = useLocation();

  return (
    <>
      <Header />
      <div className="flex gap-2 max-w-layout-max-w !p-4 !m-auto !mt-[30px]">
        <Sidebar className="!w-[250px]" />
        <main className="w-full">
          <Outlet key={location.pathname} />
        </main>
      </div>
    </>
  );
};

export default DocsLayout;
