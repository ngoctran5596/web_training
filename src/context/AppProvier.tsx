import React, { createContext, useState, ReactNode } from "react";

// Định nghĩa kiểu dữ liệu cho Context
interface AppContextType {
  user: string;
  setUser: React.Dispatch<React.SetStateAction<string>>;
}

// Tạo Context
const AppContext = createContext<AppContextType | undefined>(undefined);

// Tạo Provider
interface AppProviderProps {
  children: ReactNode;
}

const AppProvider: React.FC<AppProviderProps> = ({ children }) => {
  const [user, setUser] = useState<string>("Ngọc");

  return (
    <AppContext.Provider value={{ user, setUser }}>
      {children}
    </AppContext.Provider>
  );
};

export { AppContext, AppProvider };
