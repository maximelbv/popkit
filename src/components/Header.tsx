import { IconButton } from "@chakra-ui/react";
import { BsGithub } from "react-icons/bs";
import Logo from "./Logo";

const Header = () => {
  return (
    <div className="flex items-center justify-between w-full max-w-layout-max-w !m-auto !p-4">
      <Logo />
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
