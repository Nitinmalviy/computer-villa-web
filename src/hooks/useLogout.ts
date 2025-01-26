import { useContext, useState } from "react";
import { UserContext } from "../context/userProvider";
// import { useToast } from "./use-toast";

const useLogout = () => {
  const { setUser, setIsAuthenticated } = useContext(UserContext);
  const [isLoading, setIsLoading] = useState(false);

  const logout = () => {
    setIsLoading(true);
    setTimeout(() => {
      setUser(null);
      setIsAuthenticated(false);
      localStorage.removeItem("user");
      localStorage.removeItem("isAuthenticated");
      setIsLoading(false);
    }, 2000);
  };

  return { logout, isLoading };
};

export default useLogout;
