import { MAXIMELBV_LINK } from "@/constants/paths";
import { Button, Image } from "@chakra-ui/react";

const Footer = () => {
  return (
    <div className="max-w-layout-max-w !px-4 !py-4 !m-auto !mt-10 z-100 !border-t !border-border-default">
      <div className="flex items-center gap-0.5">
        <span className="text-text-muted !mt-[2px]">Buildt by</span>
        <Button variant="ghost" className="!p-1 !h-fit" asChild>
          <a href={MAXIMELBV_LINK} target="blank_">
            <Image className="!object-contain" src="/maximelbv-logo.svg" />
          </a>
        </Button>
      </div>
    </div>
  );
};

export default Footer;
