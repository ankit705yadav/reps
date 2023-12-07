import { useAuthContext } from "./useAuthContext";
import { useWorkoutsContext } from "./useWorkoutsContext";

export const useLogout = () => {
  const { dispatch } = useAuthContext();
  const { dispatch: workoutDispatch } = useWorkoutsContext();

  const logout = () => {
    //nulling user context
    dispatch({ type: "LOGOUT" });

    workoutDispatch({ type: "SET_WORKOUT", payload: null });
    //remove jwtToken/user from local storage
    localStorage.removeItem("user");
  };
  return { logout };
};
