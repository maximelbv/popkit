import { COMPONENTS_PATH, DOC_PATH } from "@/constants/paths";
import { CATEGORIES, NEW, UPDATED } from "@/constants/sidebar-elements";
import { ICategory } from "@/types/constantsTypes";
import { formatStringToPath } from "@/utils/string-utils";
import { Box, Stack } from "@chakra-ui/react";
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
    <Box key={key} className="flex flex-col">
      {name && <span className="!text-[18px] !font-bold !py-4">{name}</span>}
      <Stack gap={2.5} pl={4} borderLeft={"1px solid #ffffff1c"}>
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
                <Link
                  key={path}
                  className={`${
                    isActive
                      ? "text-text-primary hover:bg-text-primary"
                      : "!text-text-muted"
                  } relative group flex items-center gap-1.5 before:content-[''] before:w-[1px] 
                  before:h-[16px] before:bg-none before:top-1/2 before:-translate-y-1/2 before:left-[-17px] before:absolute before:rounded-full`}
                  to={path}
                >
                  <span className="group-hover:text-text-primary !text-[14px] !font-medium custom-text-hover-anim">
                    {elem}
                  </span>
                  {isNew && <SidebarTag type="New" />}
                  {isUpdated && <SidebarTag type="Updated" />}
                </Link>
              )
            );
          })}
      </Stack>
    </Box>
  );
};

const Sidebar = () => {
  return (
    <div className="flex flex-col gap-3">
      {CATEGORIES.map(
        (category: ICategory): ReactNode => (
          <Category key={category.name} category={category} />
        )
      )}
    </div>
  );
};

export default Sidebar;
