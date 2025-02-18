import { Link } from "react-router";

const Sidebar = () => {
  return (
    <div>
      <Link to={"/docs/test1"}>test1</Link>
      <Link to={"/docs/test2"}>test2</Link>
    </div>
  );
};

export default Sidebar;
