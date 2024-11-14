import toast from "react-hot-toast";

export async function GetAllUsersHook() {
  try {
    const res = await fetch(
      "https://apidoctera.yeshisolutions.com/api/admin/users",
      {
        credentials: "include",
      },
    );

    if (!res.ok) {
      throw Error(res);
    }

    const { data } = await res.json();

    return data;
  } catch (error) {
    toast.error(error.message);
  }
}

export async function GetSingleUserHook(username) {
  try {
    const res = await fetch(
      `https://apidoctera.yeshisolutions.com/api/admin/users/${username}`,
      {
        credentials: "include",
      },
    );

    if (!res.ok) {
      throw Error(res.error);
    }

    const { UserData } = await res.json();

    return UserData;
  } catch (error) {
    toast.error(error.message);
  }
}

export async function UpdateUserRoleHook(username, data) {
  try {
    // console.log("api reached");
    const res = await fetch(
      `https://apidoctera.yeshisolutions.com/api/admin/users/${username}`,
      {
        method: "PATCH",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ ...data }),
        credentials: "include",
      },
    );

    if (!res.ok) throw Error("Failed to update role of User");

    const updatedData = await res.json();

    if (updatedData.error) {
      throw new Error(updatedData.error);
    }
    toast.success("User's Status Updated Successfully");
    location.replace(`/users/@${username}`);

    return null;
  } catch (error) {
    toast.error(error.message);
  }
}
