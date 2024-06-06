import { useContext } from "react";
import { AppContext, ContextInitialInterface } from "../context";

const useToggle = () => {
  const context: ContextInitialInterface = useContext(AppContext);
  const { open, setOpen, sidebarClose, sidebarToggle } = context;
  if (!context) return;
  return { open, setOpen, sidebarToggle, sidebarClose };
};

export default useToggle;
