import { createContext, useContext, useEffect, useState, type ReactNode } from 'react';

interface CollapseContextType {
  collapse: boolean;
  toggleCollapse: () => void;
}

const CollapseContext = createContext<CollapseContextType>({ collapse: false, toggleCollapse: () => {} });

export function CollapseProvider({ children }: { children: ReactNode }) {
  const localName = "dashboard-collapse";

  const [collapse, setCollapse] = useState(() => {
    const saved = localStorage.getItem(localName);
    console.log('saved', saved);
    return saved as string;
  });

  const toggleCollapse = () => setCollapse(t => (t === 'true' ? 'false' : 'true'));

  useEffect(() => {
    localStorage.setItem(localName, collapse);
  }, [collapse])

  return (
    <CollapseContext.Provider value={{ collapse: Boolean(collapse === 'true' ? true : false), toggleCollapse }}>
      {children}
    </CollapseContext.Provider>
  );
}

export const useCollapse = () => useContext(CollapseContext);
