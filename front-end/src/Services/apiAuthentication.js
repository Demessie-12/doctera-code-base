import { useContext, useState } from "react";
import toast from "react-hot-toast";
import { DocteraContext } from "../context/Doctera.Context";

export const SignUpApi = () => {
  const [loading, setLoading] = useState(false);

  const SignupHook = async (userInputs) => {
    setLoading(true);
    try {
      const res = await fetch(
        `${import.meta.env.VITE_API_URL}/api/auth/signup`,
        {
          method: "POST",
          headers: { "content-type": "application/json" },
          body: JSON.stringify({ ...userInputs }),
        }
      );

      const LoginData = await res.json();

      if (Signupdata.error) {
        throw new Error(Signupdata.error);
      }

      localStorage.setItem("logged-user", JSON.stringify(Signupdata.data));
      toast.success("Account Created successfully");
    } catch (error) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  return { loading, SignupHook };
};

export const LoginApi = () => {
  const { setLoggedUser } = useContext(DocteraContext);
  const [loading, setLoading] = useState(false);

  const LoginHook = async (userInputs) => {
    setLoading(true);
    try {
      const res = await fetch(
        `${import.meta.env.VITE_API_URL}/api/auth/login`,
        {
          method: "POST",
          headers: { "content-type": "application/json" },
          body: JSON.stringify({ ...userInputs }),
        }
      );

      const LoginData = await res.json();

      if (LoginData.error) {
        throw new Error(LoginData.error);
      }

      localStorage.setItem("logged-user", JSON.stringify(LoginData.data));
      setLoggedUser(LoginData.data);
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
  const { setLoggedUser } = useContext(DocteraContext);
  const logoutHook = async () => {
    setLoading(true);
    try {
      const res = await fetch(
        `${import.meta.env.VITE_API_URL}/api/auth/logout`
      );

      localStorage.removeItem("logged-user");
      setLoggedUser(null);
    } catch (error) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  return { loading, logoutHook };
};
