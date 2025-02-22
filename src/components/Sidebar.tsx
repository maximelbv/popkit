import { COMPONENTS_PATH, DOC_PATH } from "@/constants/paths";
import { IComponent, Status } from "@/types/components";
import { importAllComponentsDocData } from "@/utils/file-utils";
import { formatStringToPath } from "@/utils/string-utils";
import { Box, Stack } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { Link } from "react-router";
// import SidebarTag from "./SidebarTag";
import { groupComponentsByCategory } from "@/utils/collection-utils";
import SidebarTag from "./SidebarTag";

interface ISidebarProps {
  className: string;
}

export interface GroupedComponent {
  name: string;
  status?: string;
}

const Sidebar = ({ className }: ISidebarProps) => {
  const [categories, setCategories] = useState<
    Record<string, GroupedComponent[]>
  >({});

  useEffect(() => {
    const components = importAllComponentsDocData() as IComponent[];
    setCategories(groupComponentsByCategory(components));
  }, []);

  return (
    <div className={`${className} flex flex-col gap-3`}>
      {Object.entries(categories).map(([category, elements]) => (
        <Category key={category} name={category} elements={elements} />
      ))}
    </div>
  );
};

const Category = ({
  name,
  elements,
}: {
  name: string;
  elements: GroupedComponent[];
}) => {
  return (
    <Box className="flex flex-col">
      {name && <span className="!text-[18px] !font-bold !py-4">{name}</span>}
      <Stack gap={3} pl={4} borderLeft={"1px solid #ffffff1c"}>
        {elements.map((elem: GroupedComponent) => {
          const { name, status } = elem;

          const path = `/${DOC_PATH}/${COMPONENTS_PATH}/${formatStringToPath(
            name
          )}`;
          const isActive = location.pathname === path;

          return (
            <Link
              key={path}
              className={`${
                isActive
                  ? "text-text-primary before:bg-text-primary"
                  : "!text-text-muted"
              } relative group flex items-center gap-1.5 before:content-[''] before:w-[1px] 
              before:h-[16px] before:bg-none before:top-1/2 before:-translate-y-1/2 before:left-[-17px] before:absolute before:rounded-full before:transition before:ease-out before:duration-200`}
              to={path}
            >
              <span className="group-hover:text-text-primary !text-[14px] !font-medium custom-text-hover-anim">
                {name}
              </span>
              {status && <SidebarTag type={status as Status} />}
            </Link>
          );
        })}
      </Stack>
    </Box>
  );
};

export default Sidebar;
