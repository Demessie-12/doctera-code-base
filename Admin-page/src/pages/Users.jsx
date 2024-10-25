import React, { useState } from "react";
import MUIDataTable from "mui-datatables";
import { createTheme } from "@mui/material/styles";
import { ThemeProvider } from "@emotion/react";
import { Link, useLoaderData } from "react-router-dom";
import { useAdminContext } from "../context/Admin.context";
import { GetAllUsersHook } from "../Services/apiUsers";

function Users() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const { allusers, setAllusers } = useAdminContext();
  const loadedData = useLoaderData();
  setAllusers(loadedData);
  const [filtered, setFiltered] = useState("All");

  let filteredData = allusers;
  const screenwidth = screen.width;

  if (filtered == "customer")
    filteredData = allusers.filter((user) => user.role == "customer");
  else if (filtered == "admin")
    filteredData = allusers.filter((user) => user.role == "admin");

  const data = filteredData.map((user) => {
    return [
      user.no,
      user.profilePic,
      user.fullname,
      user.username,
      user.username,
    ];
  });

  const columns = [
    {
      name: "no",
      label: "no",
      options: {
        filter: false,
      },
    },
    {
      name: "Profile",
      label: "image",
      options: {
        filter: false,
        customBodyRender: (value) => {
          return (
            <div className="w-20">
              <img
                src={
                  value ||
                  "https://avatar.iran.liara.run/public/boy?username=new "
                }
                alt="image"
                className="h-auto w-16 rounded-full border-2 border-x-yellow-500 border-y-red-600"
              />
            </div>
          );
        },
      },
    },
    {
      name: "full name",
      options: {
        customBodyRender: (value, tableMeta) => (
          <p className="line-clamp-3 min-w-20 capitalize">{value}</p>
        ),
      },
    },
    {
      name: "user name",
      options: {
        customBodyRender: (value) => (
          <p className="line-clamp-3 min-w-20 capitalize">{value}</p>
        ),
      },
    },
    {
      name: "link",
      options: {
        filter: false,
        customBodyRender: (value) => (
          <div className="flex min-w-20 flex-col gap-1.5">
            <Link
              to={`/users/@${value}`}
              className="rounded-xl bg-green-600 px-2 py-1 text-center font-semibold text-black"
            >
              Detail
            </Link>
          </div>
        ),
      },
    },
  ];

  const options = {
    selectableRows: false,
    elevation: 0,
    rowsPerPage: 5,
    rowsPerPageOptions: [5, 10, 20, 30],
  };

  const getMuiTheme = () =>
    createTheme({
      typography: {
        // fontFamily: "sans-serif",
      },
      palette: {
        background: {
          paper: "#111827",
          default: "#1e3a8a",
        },
        mode: "dark",
      },
      components: {
        MuiTableCell: {
          styleOverrides: {
            head: {
              padding: "5px 1px",
            },
            body: {
              padding: "7px 5px",
              color: "#e2e8f8",
            },
          },
        },
      },
    });

  return (
    <div className="relative w-full overflow-x-hidden">
      <div className="my-2 ml-5 flex gap-2 md:ml-10">
        <p
          className={`cursor-pointer rounded-full px-2 py-1 font-semibold text-white ${filtered === "All" ? "border border-white bg-blue-600" : "border border-gray-500 bg-transparent"}`}
          onClick={() => setFiltered("All")}
        >
          All
        </p>
        <p
          className={`cursor-pointer rounded-full px-2 py-1 font-semibold text-white ${filtered === "customer" ? "border border-white bg-blue-600" : "border border-gray-500 bg-transparent"}`}
          onClick={() => setFiltered("customer")}
        >
          Customer
        </p>
        <p
          className={`cursor-pointer rounded-full px-2 py-1 font-semibold text-white ${filtered === "admin" ? "border border-white bg-blue-600" : "border border-gray-500 bg-transparent"}`}
          onClick={() => setFiltered("admin")}
        >
          Admin
        </p>
      </div>
      <div className={`w-[${screenwidth}px] md:w-full`}>
        <div className="max-w-fit overflow-x-hidden">
          <ThemeProvider theme={getMuiTheme}>
            <MUIDataTable
              title={"Users List"}
              data={data}
              columns={columns}
              options={options}
            />
          </ThemeProvider>
        </div>
      </div>
    </div>
  );
}

export async function loader() {
  let AllUsers = await GetAllUsersHook();
  // Add serianl No
  AllUsers = AllUsers.map((user, i) => ({
    ...user,
    no: i + 1,
  }));
  return AllUsers;
}

export default Users;
