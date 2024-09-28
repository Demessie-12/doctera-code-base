import { useContext, useState } from "react";
import toast from "react-hot-toast";
import { DocteraContext } from "../context/Doctera.Context";
import secureLocalStorage from "react-secure-storage";
import { NavbarContext } from "../context/Navbar.context";

export const SignUpApi = () => {
  const { setLoggedUser } = useContext(NavbarContext);
  const [loading, setLoading] = useState(false);

  const SignupHook = async (userInputs) => {
    const isCorrectInput = handleInputErrors(userInputs);

    if (!isCorrectInput) return;

    setLoading(true);
    try {
      const res = await fetch("/api/auth/signup", {
        method: "POST",
        Credentials: true,
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ ...userInputs }),
      });

      const Signupdata = await res.json();

      if (Signupdata.error) {
        throw new Error(Signupdata.error);
      }

      secureLocalStorage.setItem("logged-user", Signupdata.data);
      setLoggedUser(Signupdata.data);
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
  const { setLoggedUser } = useContext(NavbarContext);
  const [loading, setLoading] = useState(false);

  const LoginHook = async (userInputs) => {
    setLoading(true);
    try {
      const res = await fetch("/api/auth/login", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ ...userInputs }),
      });

      const LoginData = await res.json();

      if (LoginData.error) {
        throw new Error(LoginData.error);
      }

      secureLocalStorage.setItem("logged-user", LoginData.data);
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
  const { setLoggedUser } = useContext(NavbarContext);
  const logoutHook = async () => {
    setLoading(true);
    try {
      const res = await fetch("/api/auth/logout");

      secureLocalStorage.removeItem("logged-user");
      setLoggedUser(null);
    } catch (error) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  return { loading, logoutHook };
};

function handleInputErrors({ fullname, username, phoneNumber }) {
  const isValidPhone = (str) =>
    /^\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/.test(
      str
    );
  if (!fullname || !username || !phoneNumber) {
    toast.error("Please fill all fields");
    return false;
  }
  if (fullname.length < 5) {
    toast.error("Fullname must be at least 5 characters");
    return false;
  }
  if (username.length < 3) {
    toast.error("Username must be at least 3 characters");
    return false;
  }
  if (phoneNumber.length < 10) {
    toast.error("PhoneNumber must be at least 10 characters");
    return false;
  }
  if (phoneNumber.length > 13) {
    toast.error("PhoneNumber must have bellow 13 characters");
    return false;
  }
  if (!isValidPhone(phoneNumber)) {
    toast.error("Please  give us your correct phone number.");
    return false;
  }
  return true;
}
