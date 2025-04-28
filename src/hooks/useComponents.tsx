import { IComponent } from "@/types/components";
import { sortByDateCreation } from "@/utils/date-utils";
import { getAllComponentsCode, getAllComponentsMeta } from "@/utils/file-utils";
import { createContext, useEffect, useState } from "react";

interface IComponentsContextProps {
  componentsMeta: IComponent[];
  componentsCode: Record<string, string>;
  loadingMeta: boolean;
  loadingCode: boolean;
  errorMeta: Error | null;
  errorCode: Error | null;
}

const defaultContextValue: IComponentsContextProps = {
  componentsMeta: [],
  componentsCode: {},
  loadingMeta: false,
  loadingCode: false,
  errorMeta: null,
  errorCode: null,
};

export const ComponentsContext = createContext(defaultContextValue);

export function useComponents() {
  const [componentsMeta, setComponentsMeta] = useState<IComponent[]>([]);
  const [componentsCode, setComponentsCode] = useState<Record<string, string>>(
    {}
  );

  const [loadingMeta, setLoadingMeta] = useState(true);
  const [loadingCode, setLoadingCode] = useState(true);

  const [errorMeta, setErrorMeta] = useState<Error | null>(null);
  const [errorCode, setErrorCode] = useState<Error | null>(null);

  useEffect(() => {
    try {
      const compMeta = getAllComponentsMeta();
      setComponentsMeta(sortByDateCreation(compMeta));
    } catch (err) {
      setErrorMeta(
        err instanceof Error
          ? err
          : new Error("Unknown error in getAllComponentsMeta")
      );
    } finally {
      setLoadingMeta(false);
    }
  }, []);

  useEffect(() => {
    try {
      setComponentsCode(getAllComponentsCode());
    } catch (err) {
      setErrorCode(
        err instanceof Error
          ? err
          : new Error("Unknown error in getAllComponentsCode")
      );
    } finally {
      setLoadingCode(false);
    }
  }, []);

  return {
    componentsMeta,
    componentsCode,
    loadingMeta,
    loadingCode,
    errorMeta,
    errorCode,
  };
}
