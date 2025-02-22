import { IconButton } from "@chakra-ui/react";
import { BsGithub } from "react-icons/bs";
import Logo from "./Logo";
import { Link } from "react-router";

const Header = () => {
  return (
    <div className="flex items-center justify-between w-full max-w-layout-max-w !m-auto !p-4">
      <Link to="/">
        <Logo />
      </Link>
      <div>
        <IconButton aria-label="github" variant="outline" asChild>
          <a href="https://github.com/maximelbv/popkit" target="blank_">
            <BsGithub />
          </a>
        </IconButton>
      </div>
    </div>
  );
};

export default Header;
