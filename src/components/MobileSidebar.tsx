import { Box, Button, CloseButton } from "@chakra-ui/react";
import {
  DrawerBackdrop,
  DrawerBody,
  DrawerContent,
  DrawerRoot,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { RiMenu3Fill } from "react-icons/ri";
import Sidebar from "./Sidebar";
import Logo from "./Logo";
import { useLocation } from "react-router";
import { useEffect, useState } from "react";

const MobileSidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  return (
    <DrawerRoot
      placement={"start"}
      size="full"
      open={isOpen}
      onOpenChange={({ open }) => setIsOpen(open)}
    >
      <DrawerBackdrop />
      <DrawerTrigger asChild>
        <Button variant="outline" display={{ base: "block", md: "none" }}>
          <RiMenu3Fill />
        </Button>
      </DrawerTrigger>
      <DrawerContent>
        <DrawerBody>
          <Box className="!p-4">
            <Logo />
          </Box>
          <Sidebar />
        </DrawerBody>
        <CloseButton
          size="2xl"
          className="!absolute !top-2 !right-2"
          onClick={() => setIsOpen(false)}
        />
      </DrawerContent>
    </DrawerRoot>
  );
};

export default MobileSidebar;
