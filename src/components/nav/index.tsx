import { GiHamburgerMenu } from "react-icons/gi";
import { IoIosClose } from "react-icons/io";
import useToggle from "../../hooks/useToggle";
import Button from "../button";

const Navigation = () => {
  const toggle = useToggle();
  return (
    <header className="sticky top-0 left-0 lg:hidden shadow-lg">
      <nav className="py-6 max-w-[90%] mx-auto">
        <Button
          className="flex !justify-end items-end w-full"
          onClick={toggle?.sidebarToggle}
        >
          {toggle?.open ? <IoIosClose /> : <GiHamburgerMenu />}
        </Button>
      </nav>
    </header>
  );
};

export default Navigation;
