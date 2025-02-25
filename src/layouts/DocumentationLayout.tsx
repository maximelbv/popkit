import { Outlet, useLocation } from "react-router";
import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";
import { Box } from "@chakra-ui/react";

const DocumentationLayout = () => {
  const location = useLocation();

  return (
    <>
      <Header />

      <div className="flex gap-2 max-w-layout-max-w !m-auto !mt-22">
        <Box display={{ base: "none", lg: "block" }}>
          <Sidebar />
        </Box>
        <main className="w-full">
          <Outlet key={location.pathname} />
        </main>
      </div>
    </>
  );
};

export default DocumentationLayout;
