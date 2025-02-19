interface ISidebarTagProps {
  type: "New" | "Updated";
}

const SidebarTag = ({ type }: ISidebarTagProps) => {
  return (
    <div>
      <span>{type}</span>
    </div>
  );
};

export default SidebarTag;
