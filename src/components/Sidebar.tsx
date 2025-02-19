import { COMPONENTS_PATH, DOC_PATH } from "@/constants/paths";
import { CATEGORIES, NEW, UPDATED } from "@/constants/sidebar-elements";
import { ICategory } from "@/types/constantsTypes";
import { formatStringToPath } from "@/utils/string-utils";
import { Box } from "@chakra-ui/react";
import { ReactNode } from "react";
import { Link } from "react-router";
import SidebarTag from "./SidebarTag";

interface ICategoryProps {
  key: string;
  category: ICategory;
}

const Category = ({ key, category }: ICategoryProps) => {
  const { name, elements } = category;

  return (
    <Box key={key}>
      {name && <span>{name}</span>}
      {elements &&
        elements.map((elem: ICategory["elements"][number]): ReactNode => {
          const path = elem
            ? `/${DOC_PATH}/${COMPONENTS_PATH}/${formatStringToPath(elem)}`
            : null;
          const isActive = location.pathname === path;
          const isNew = NEW.includes(elem);
          const isUpdated = UPDATED.includes(elem);
          return (
            path && (
              <Link key={path} className={isActive ? "" : ""} to={path}>
                {elem}
                {isNew && <SidebarTag type="New" />}
                {isUpdated && <SidebarTag type="Updated" />}
              </Link>
            )
          );
        })}
    </Box>
  );
};

const Sidebar = () => {
  return (
    <div>
      {CATEGORIES.map(
        (category: ICategory): ReactNode => (
          <Category key={category.name} category={category} />
        )
      )}
    </div>
  );
};

export default Sidebar;
