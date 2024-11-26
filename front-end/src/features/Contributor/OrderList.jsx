import React, { useState } from "react";
import MUIDataTable from "mui-datatables";
import { createTheme } from "@mui/material/styles";
import { ThemeProvider } from "@emotion/react";
import { Link } from "react-router-dom";
import { useDocteraContext } from "../../context/Doctera.Context";

function OrderList() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const { myorders } = useDocteraContext();
  // console.log(myorders);
  const [filterStatus, setFilterStatus] = useState("All");
  const [filteredTime, setFilteredTime] = useState(1);

  // let filteredData = myorders;
  const screenwidth = screen.width;

  // if (filtered == "New")
  //   filteredData = myorders.filter((order) => order.status == "Waiting");
  // else if (filtered == "On going")
  //   filteredData = myorders.filter((order) => order.status == "On delivery");
  // else if (filtered == "Delivered")
  //   filteredData = myorders.filter((order) => order.status == "Delivered");
  // else if (filteredTime == "Today")
  //   filteredData = myorders.filter((order) => order.timeGap <= 1);
  // else if (filteredTime == "This week")
  //   filteredData = myorders.filter((order) => order.timeGap <= 7);
  // else if (filteredTime == "This month")
  //   filteredData = myorders.filter((order) => order.timeGap <= 30);

  let filteredData = myorders.filter(
    (order) =>
      (filterStatus == "All" || order.status == filterStatus) &&
      (filteredTime == "AllTime" || order.timeGap <= filteredTime),
  );

  const data = filteredData.map((order) => {
    return [
      order.no,
      order.orderId,
      order.timeGap,
      order.customerName,
      order.customerUsername,
      order.totalPrice,
      order.status,
      order.orderId,
      order.createdAt,
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
      name: "id",
      options: {
        filter: false,
        customBodyRender: (value, tableMeta) => (
          <p className={`min-w-14 rounded-2xl text-center font-semibold`}>
            {value}
          </p>
        ),
      },
    },
    {
      name: "Date",
      options: {
        customBodyRender: (value, tableMeta) => (
          <p className={`line-clamp-3 w-24 max-w-32 capitalize`}>
            {value <= 1 && "Today"}
            {value > 1 && value < 30 && `${value} days ago`}{" "}
            {value > 30 && `${new Date(tableMeta.rowData[8]).toDateString()}`}
          </p>
        ),
      },
    },
    {
      name: "name",
      options: {
        customBodyRender: (value) => (
          <p className={`line-clamp-3 min-w-20 max-w-28 capitalize`}>{value}</p>
        ),
      },
    },
    {
      name: "Username",
      label: "Username",
      options: {
        filter: false,
        display: false,
        customBodyRender: (value) => <p className="pl-3">{value}</p>,
      },
    },
    {
      name: "Price",
      options: {
        filter: false,
        customBodyRender: (value) => <p className="pl-3">{value}</p>,
      },
    },
    {
      name: "status",
      label: "status",
      options: {
        customBodyRender: (value, tableMeta) => (
          <p
            className={`min-w-20 rounded-2xl font-semibold ${value == "Delivered" && "bg-green-600 text-black"} ${value == "On delivery" && "bg-orange-600"} ${value == "Waiting" && "bg-red-700"} bg-black p-2 text-center`}
          >
            {value == "Delivered" && "Delivered"}{" "}
            {value == "Waiting" && "Waiting"}{" "}
            {value == "On delivery" && "On delivery"}
          </p>
        ),
      },
    },
    {
      name: "link",
      options: {
        filter: false,
        customBodyRender: (value) => (
          <div className="flex min-w-20">
            <Link
              to={`/control/order/${value}`}
              className="rounded-xl bg-green-600 px-2 py-1 text-center font-semibold text-black"
            >
              Detail
            </Link>
          </div>
        ),
      },
    },
    {
      name: "Created At",
      options: {
        filter: false,
        display: false,
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
              color: "#f27d2d",
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
      <div className="my-2 ml-5 flex flex-wrap gap-2 md:ml-10">
        <p
          className={`cursor-pointer rounded-full px-2 py-1 font-semibold text-white ${filterStatus === "All" ? "border border-white bg-blue-600" : "border border-gray-500 bg-gray-900"}`}
          onClick={() => setFilterStatus("All")}
        >
          All
        </p>
        <p
          className={`cursor-pointer rounded-full px-2 py-1 font-semibold text-white ${filterStatus === "Waiting" ? "border border-white bg-blue-600" : "border border-gray-500 bg-gray-900"}`}
          onClick={() => setFilterStatus("Waiting")}
        >
          New
        </p>
        <p
          className={`cursor-pointer rounded-full px-2 py-1 font-semibold text-white ${filterStatus === "On delivery" ? "border border-white bg-blue-600" : "border border-gray-500 bg-gray-900"}`}
          onClick={() => setFilterStatus("On delivery")}
        >
          On going
        </p>
        <p
          className={`cursor-pointer rounded-full px-2 py-1 font-semibold text-white ${filterStatus === "Delivered" ? "border border-white bg-blue-600" : "border border-gray-500 bg-gray-900"}`}
          onClick={() => setFilterStatus("Delivered")}
        >
          Delivered
        </p>
        <p
          className={`cursor-pointer rounded-full px-2 py-1 font-semibold text-white ${filteredTime === 1 ? "border border-white bg-blue-600" : "border border-gray-500 bg-gray-900"}`}
          onClick={() => setFilteredTime(1)}
        >
          Today
        </p>
        <p
          className={`cursor-pointer rounded-full px-2 py-1 font-semibold text-white ${filteredTime === 7 ? "border border-white bg-blue-600" : "border border-gray-500 bg-gray-900"}`}
          onClick={() => setFilteredTime(7)}
        >
          This week
        </p>
        <p
          className={`cursor-pointer rounded-full px-2 py-1 font-semibold text-white ${filteredTime === 30 ? "border border-white bg-blue-600" : "border border-gray-500 bg-gray-900"}`}
          onClick={() => setFilteredTime(30)}
        >
          This month
        </p>
        <p
          className={`cursor-pointer rounded-full px-2 py-1 font-semibold text-white ${filteredTime === "AllTime" ? "border border-white bg-blue-600" : "border border-gray-500 bg-gray-900"}`}
          onClick={() => setFilteredTime("AllTime")}
        >
          AllTime
        </p>
      </div>
      <div className={`w-[${screenwidth}px] md:w-full`}>
        <div className="max-w-fit overflow-x-hidden">
          <ThemeProvider theme={getMuiTheme}>
            <MUIDataTable
              title={"Order List"}
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

export default OrderList;
