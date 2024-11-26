import { useState } from "react";
import toast from "react-hot-toast";
import secureLocalStorage from "react-secure-storage";

export const LoginApi = () => {
  const [loading, setLoading] = useState(false);

  const LoginHook = async (userInputs) => {
    setLoading(true);
    try {
      const res = await fetch(
        "https://api1.docteramarket.com/api/auth/loginAdmin",
        {
          method: "POST",
          headers: { "content-type": "application/json" },
          body: JSON.stringify({ ...userInputs }),
          credentials: "include",
        },
      );

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
      const res = await fetch(
        "https://api1.docteramarket.com/api/auth/logout",
        {
          credentials: "include",
        },
      );
      secureLocalStorage.removeItem("logged-user");
    } catch (error) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  return { loading, logoutHook };
};

export async function UpdateProfileHook(userData) {
  try {
    // console.log(userData.username);
    const res = await fetch(
      `https://api1.docteramarket.com/api/auth/profile/${userData.username}`,
      {
        method: "PATCH",
        Credentials: true,
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ ...userData }),
        credentials: "include",
      },
    );

    const updatedProfile = await res.json();

    if (updatedProfile.error) {
      throw new Error(updatedProfile.error);
    }

    secureLocalStorage.setItem("logged-user", updatedProfile.data);
    // setLoggedUser(updatedProfile.data);
    toast.success("Profile Updated successfully");
    location.replace("/profile");
  } catch (error) {
    toast.error(error.message);
  }
}

export async function UpdatePasswordHook(passwords) {
  // const { loggedUser, setLoggedUser } = useContext(NavbarContext);
  try {
    const res = await fetch(
      `https://api1.docteramarket.com/api/auth/password/${passwords.username}`,
      {
        method: "PATCH",
        Credentials: true,
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ ...passwords }),
        credentials: "include",
      },
    );

    const updatedProfile = await res.json();

    if (updatedProfile.error) {
      throw new Error(updatedProfile.error);
    }

    secureLocalStorage.setItem("logged-user", updatedProfile);
    // setLoggedUser(updatedProfile.data);
    toast.success("Password Updated successfully");
    location.replace("/profile");
  } catch (error) {
    toast.error(error.message);
  }
}
