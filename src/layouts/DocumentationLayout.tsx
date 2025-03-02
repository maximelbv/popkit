import { Outlet, useLocation } from "react-router";
import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";
import { Box } from "@chakra-ui/react";

const DocumentationLayout = () => {
  const location = useLocation();

  return (
    <>
      <Header />

      <div className="flex gap-8 max-w-layout-max-w !m-auto !mt-22">
        <Box display={{ base: "none", lg: "block" }}>
          <Sidebar />
        </Box>
        <main className="w-full !p-4">
          <Outlet key={location.pathname} />
        </main>
      </div>
    </>
  );
};

export default DocumentationLayout;
