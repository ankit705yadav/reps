import { useAuthContext } from "./useAuthContext";

export const useLogout = () => {
  const { dispatch } = useAuthContext();

  const logout = () => {
    //nulling user context
    dispatch({ type: "LOGOUT" });
    //remove jwtToken/user from local storage
    localStorage.removeItem("user");
  };
  return { logout };
};
