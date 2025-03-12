import { Outlet, useLocation } from "react-router";
import Header from "@/components/docs/Header";
import Sidebar from "@/components/docs/Sidebar";
import { Box } from "@chakra-ui/react";
import Footer from "@/components/docs/Footer";

const DocumentationLayout = () => {
  const location = useLocation();

  return (
    <>
      <Header />
      <div className="flex gap-8 max-w-layout-max-w !m-auto !mt-22">
        <Box display={{ base: "none", lg: "block" }}>
          <Sidebar />
        </Box>
        <main className="w-full !max-w-full overflow-hidden !p-4">
          <Outlet key={location.pathname} />
        </main>
      </div>
      <Footer />
    </>
  );
};

export default DocumentationLayout;
