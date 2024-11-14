export async function GetDashboardDataHook() {
  const res = await fetch(
    "https://apidoctera.yeshisolutions.com/api/admin/dashboard",
    {
      credentials: "include",
    },
  );
  // console.log(1, res);
  if (!res.ok) {
    location.replace("/login");
  }

  const { newUsers, newProducts, newOrders } = await res.json();

  return { newUsers, newProducts, newOrders };
}
