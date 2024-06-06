import { PropsWithChildren, createContext, useState } from "react";

export interface ContextInitialInterface {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  sidebarToggle: VoidFunction;
  sidebarClose: VoidFunction;
}

export const AppContext = createContext<ContextInitialInterface>({
  open: false,
  setOpen: () => {},
  sidebarClose: () => {},
  sidebarToggle: () => {},
});

export const ContextProvider = ({ children }: PropsWithChildren) => {
  const [open, setOpen] = useState(false);

  const sidebarToggle = () => {
    setOpen(!open);
  };

  const sidebarClose = () => {
    setOpen(false);
  };

  return (
    <AppContext.Provider value={{ open, setOpen, sidebarToggle, sidebarClose }}>
      {children}
    </AppContext.Provider>
  );
};
