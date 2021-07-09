import { createContext, Dispatch, ReactNode, SetStateAction } from "react";

import { User } from "../types/api/user";

type LoginUserContextType = {
  loginUser: User | null;
  setLoginUser: Dispatch<SetStateAction<User | null>>;
};

const LoginUserContext = createContext<LoginUserContextType>(
  {} as LoginUserContextType
);

export const LoginUserProvider = (props: { children: ReactNode }) => {
  const { children } = props;
  return (
    <LoginUserContext.Provider value={{}}>{children}</LoginUserContext.Provider>
  );
};
