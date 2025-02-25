import { COMPONENTS_PATH, DOC_PATH } from "@/constants/paths";
import { formatStringToPath } from "@/utils/string-utils";
import {
  GroupedComponent,
  groupComponentsByCategory,
} from "@/utils/collection-utils";
import { useComponents } from "@/hooks/useComponents";
import { Link, useLocation } from "react-router";
import SidebarTag from "./SidebarTag";
import { Box, Stack } from "@chakra-ui/react";

interface ISidebarProps {
  className?: string;
}

const Sidebar = ({ className }: ISidebarProps) => {
  const components = useComponents();
  const categories = groupComponentsByCategory(components);

  return (
    <Box className="!w-[225px] !pl-4">
      <Box className={`${className} flex flex-col gap-3`} position="fixed">
        {Object.entries(categories).map(([category, elements]) => (
          <Category key={category} name={category} elements={elements} />
        ))}
      </Box>
    </Box>
  );
};

interface CategoryProps {
  name: string;
  elements: GroupedComponent[];
}

const Category = ({ name, elements }: CategoryProps) => {
  const location = useLocation();
  return (
    <Box className="flex flex-col">
      {name && <span className="!text-[18px] !font-bold !py-4">{name}</span>}
      <Stack gap={3} pl={4} borderLeft="1px solid #ffffff1c">
        {elements.map((elem) => {
          const { name, status } = elem;
          const path = `/${DOC_PATH}/${COMPONENTS_PATH}/${formatStringToPath(
            name
          )}`;
          const isActive = location.pathname === path;

          return (
            <Link
              key={path}
              className={`
                ${
                  isActive
                    ? "text-text-primary before:bg-text-primary"
                    : "!text-text-muted"
                }
                relative group flex items-center gap-1.5
                before:content-[''] before:w-[1px] before:h-[16px]
                before:bg-none before:top-1/2 before:-translate-y-1/2
                before:left-[-17px] before:absolute before:rounded-full
                before:transition before:ease-out before:duration-200
              `}
              to={path}
            >
              <span className="group-hover:text-text-primary !text-[14px] !font-medium custom-text-hover-anim">
                {name}
              </span>
              {status && <SidebarTag type={status} />}
            </Link>
          );
        })}
      </Stack>
    </Box>
  );
};

export default Sidebar;
