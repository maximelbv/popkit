import {
  ABOUT_PATH,
  COMPONENTS_PATH,
  DOC_PATH,
  OVERVIEW_PATH,
} from "@/constants/paths";
import { formatStringToPath } from "@/utils/string-utils";
import {
  GroupedComponent,
  groupComponentsByCategory,
} from "@/utils/collection-utils";
import { useComponents } from "@/hooks/useComponents";
import { Link, NavLink, useLocation } from "react-router";
import SidebarTag from "./SidebarTag";
import { Box, Button, Skeleton, Stack } from "@chakra-ui/react";

interface ISidebarProps {
  className?: string;
}

const Sidebar = ({ className }: ISidebarProps) => {
  const { componentsMeta, loadingMeta } = useComponents();
  const categories = groupComponentsByCategory(componentsMeta);

  return (
    <Box className="!w-[250px] !ml-4 !mt-4">
      <Box
        className={`${className} flex flex-col gap-2`}
        position="fixed"
        style={{ width: "inherit", maxWidth: "100%" }}
      >
        <div className="flex flex-col gap-5">
          <NavLink to={`/${DOC_PATH}/${OVERVIEW_PATH}`}>
            <Button variant="subtle" className="!w-full !mb-[-10px]">
              Overview
            </Button>
          </NavLink>
          <NavLink to={`/${DOC_PATH}/${ABOUT_PATH}`}>
            <Button variant="subtle" className="!w-full !mb-[-10px]">
              About
            </Button>
          </NavLink>
        </div>

        {Object.entries(categories).map(([category, elements]) => (
          <Category
            key={category}
            name={category}
            elements={elements}
            isLoading={loadingMeta}
          />
        ))}
      </Box>
    </Box>
  );
};

interface CategoryProps {
  name: string;
  elements: GroupedComponent[];
  isLoading: boolean;
}

const Category = ({ name, elements, isLoading }: CategoryProps) => {
  const location = useLocation();

  if (isLoading) return <Skeleton marginTop="5px" height="400px" />;

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
