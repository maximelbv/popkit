interface ISidebarTagProps {
  type: "New" | "Updated";
}

const SidebarTag = ({ type }: ISidebarTagProps) => {
  return (
    <div
      className={`flex items-center justify-center !px-1.5 !font-medium rounded-md !border !border-solid ${
        type === "Updated"
          ? "bg-purple-400/20 text-purple-400 !border-purple-400/50"
          : "bg-blue-400/20 text-blue-400 !border-blue-400/50"
      }`}
    >
      <span className="!text-[12px]">{type}</span>
    </div>
  );
};

export default SidebarTag;
