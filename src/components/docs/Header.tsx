import { useRef, useEffect, useState } from "react";
import { BsGithub } from "react-icons/bs";
import Logo from "./Logo";
import { Link } from "react-router";
import { IconButton } from "@chakra-ui/react";
import MobileSidebar from "./MobileSidebar";

const useIsScrolled = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const sentinelRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsScrolled(!entry.isIntersecting);
      },
      {
        threshold: 1,
      }
    );

    if (sentinelRef.current) {
      observer.observe(sentinelRef.current);
    }

    return () => {
      if (sentinelRef.current) {
        observer.unobserve(sentinelRef.current);
      }
    };
  }, []);

  return { isScrolled, sentinelRef };
};

const Header = () => {
  const { isScrolled, sentinelRef } = useIsScrolled();

  return (
    <>
      <div
        ref={sentinelRef}
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "1px",
        }}
      />
      <div
        className={`z-100 fixed top-0 left-1/2 -translate-x-1/2 w-full bg-background !bg-opacity-40 shadow-2xl transition-all ${
          isScrolled ? "!border-b !border-border-default" : ""
        }`}
      >
        <div className="max-w-layout-max-w !p-4 flex items-center justify-between !m-auto">
          <Link to="/">
            <Logo />
          </Link>
          <div className="flex gap-2 items-center">
            <IconButton aria-label="github" variant="outline" asChild>
              <a href="https://github.com/maximelbv/popkit" target="blank_">
                <BsGithub />
              </a>
            </IconButton>
            <MobileSidebar />
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
