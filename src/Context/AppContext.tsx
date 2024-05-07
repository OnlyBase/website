"use client";

import {
  FC,
  ReactNode,
  createContext,
  useContext,
  useMemo,
  useState,
} from "react";

import { projects } from "@/data";
import { ProjectProps } from "@/interfaces";
import { ChakraProvider } from "@chakra-ui/react";
import { Web3ReactProvider } from "@web3-react/core";
import { ethers } from "ethers";

export type SetState<T> = React.Dispatch<React.SetStateAction<T>>;

interface Props {
  children: ReactNode;
}

interface AppContextInterface {
  projectsData: ProjectProps[];
  setProjectsData: SetState<ProjectProps[]>;
}

export const AppContext = createContext<AppContextInterface | null>(null);

export const AppProvider: FC<Props> = ({ children }) => {
  const [projectsData, setProjectsData] = useState<ProjectProps[]>(projects);

  const value: AppContextInterface | null = useMemo(
    () => ({
      projectsData,
      setProjectsData,
    }),
    [projectsData, setProjectsData]
  );

  const getLibrary = (provider: any) => {
    const library = new ethers.providers.Web3Provider(provider);
    library.pollingInterval = 8000; // frequency provider is polling
    return library;
  };

  return (
    <AppContext.Provider value={value}>
        <ChakraProvider>
          <Web3ReactProvider getLibrary={getLibrary}>
            {children}
          </Web3ReactProvider>
        </ChakraProvider>
    </AppContext.Provider>
  );
};

export const useApp = (): AppContextInterface => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("AppContext must be used within AppProvider");
  }
  return context;
};
