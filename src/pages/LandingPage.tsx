import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { GITHUB_REPO_LINK } from "@/constants/paths";
import { Button, Image } from "@chakra-ui/react";
import { FiBook, FiGithub } from "react-icons/fi";
import { Link } from "react-router";

const LandingPage = () => {
  return (
    <div>
      <Header />
      <div
        style={{ height: "calc(100svh - 194px)" }}
        className="max-w-layout-max-w !m-auto !mt-22 flex flex-col gap-6 items-center justify-center"
      >
        <Image src="/landing-logo.svg" />
        <div className="flex flex-col items-center justify-center gap-2">
          <h1 className="!font-black !text-6xl">Popkit</h1>
          <p className="text-text-muted">( 🚧 Under construction 🚧 )</p>
        </div>
        <div className="flex gap-2">
          <Button asChild size="xl" rounded="xl">
            <Link to="docs">
              <FiBook />
              Docs
            </Link>
          </Button>
          <Button asChild variant="subtle" size="xl" rounded="xl">
            <Link target="blank_" to={GITHUB_REPO_LINK}>
              <FiGithub />
              Github
            </Link>
          </Button>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default LandingPage;
