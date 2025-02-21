import { Button } from "@chakra-ui/react";
import { Link } from "react-router";

const LandingPage = () => {
  return (
    <div>
      <Link to="docs">
        <Button>Docs</Button>
      </Link>
    </div>
  );
};

export default LandingPage;
