import toast from "react-hot-toast";

export async function GetAllProducts() {
  const res = await fetch("/api/admin/products");
  console.log(res);
  if (!res.ok) {
    location.replace("/login");
    throw Error(res);
  }

  const { data } = await res.json();

  return data;
}
