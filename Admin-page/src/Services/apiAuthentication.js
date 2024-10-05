import { useState } from "react";
import toast from "react-hot-toast";
import secureLocalStorage from "react-secure-storage";

export const LoginApi = () => {
  const [loading, setLoading] = useState(false);

  const LoginHook = async (userInputs) => {
    setLoading(true);
    try {
      const res = await fetch("/api/auth/loginAdmin", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ ...userInputs }),
      });

      const LoginData = await res.json();

      if (LoginData.error) {
        throw new Error(LoginData.error);
      }
      secureLocalStorage.setItem("logged-user", LoginData.data);

      location.replace("/");
      toast.success("Logged in successfully");
    } catch (error) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  return { loading, LoginHook };
};

export const LogoutApi = () => {
  const [loading, setLoading] = useState(false);
  const logoutHook = async () => {
    setLoading(true);
    try {
      const res = await fetch("/api/auth/logout");
      secureLocalStorage.removeItem("logged-user");
    } catch (error) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  return { loading, logoutHook };
};
