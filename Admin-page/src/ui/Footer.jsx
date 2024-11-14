import React from "react";
import { useAdminContext } from "../context/Admin.context";

function Footer() {
  const { allproducts } = useAdminContext();
  // console.log(allproducts);
  return (
    <div>
      <p></p>
    </div>
  );
}

export default Footer;
