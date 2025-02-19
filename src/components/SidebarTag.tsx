interface ISidebarTagProps {
  type: "New" | "Updated";
}

const SidebarTag = ({ type }: ISidebarTagProps) => {
  return (
    <div>
      <span className="!text-[14px]">{type}</span>
    </div>
  );
};

export default SidebarTag;
