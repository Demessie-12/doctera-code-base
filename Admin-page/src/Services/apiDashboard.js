export async function GetDashboardDataHook() {
    const res = await fetch("/api/admin/dashboard");
    console.log(res);
    if (!res.ok) {
      location.replace("/login");
      throw Error(res);
    }
  
    const { newUsers, newProducts, newOrders } = await res.json();
  
    return {newUsers, newProducts, newOrders};
  }