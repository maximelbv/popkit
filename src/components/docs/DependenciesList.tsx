import { IDependency } from "@/types/dependencies";
import { Button } from "@chakra-ui/react";
interface IDependenciesListProps {
  dependencies: IDependency[];
}

const DependenciesList = ({ dependencies }: IDependenciesListProps) => {
  return (
    <div className="flex gap-2 flex-wrap">
      {dependencies.map((dep) => (
        <Button
          key={dep.name}
          asChild
          variant="subtle"
          className="!rounded-full !px-4 !py-[1px]"
        >
          <a href={dep.link} target="blank_">
            {dep.name}
          </a>
        </Button>
      ))}
    </div>
  );
};

export default DependenciesList;
