import React, { useState } from "react";
import MUIDataTable from "mui-datatables";
import { createTheme } from "@mui/material/styles";
import { ThemeProvider } from "@emotion/react";
import { Link } from "react-router-dom";
import { useDocteraContext } from "../../context/Doctera.Context";

function ProductList() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const { myproducts } = useDocteraContext();
  const [filtered, setFiltered] = useState("All");

  let filteredData = myproducts;
  const screenwidth = screen.width;

  if (filtered == "Pending")
    filteredData = myproducts?.filter((product) => product.status == "Pending");
  else if (filtered == "Verified")
    filteredData = myproducts?.filter(
      (product) => product.status == "Verified",
    );
  else if (filtered == "New")
    filteredData = myproducts?.filter(
      (product) => product.condition == "Brand New",
    );
  else if (filtered == "Slightly-Used")
    filteredData = myproducts?.filter(
      (product) => product.condition == "Slightly Used",
    );
  else if (filtered == "Used")
    filteredData = myproducts?.filter((product) => product.condition == "Used");

  const data = filteredData?.map((product) => {
    return [
      product.no,
      product.coverImage,
      product.productId,
      product.name,
      product.condition,
      product.newPrice,
      product.ratingsAverage,
      product.ratingsQuantity,
      product.productId.concat("_", product.slug),
      product.status,
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
      name: "coverImage",
      label: "image",
      options: {
        filter: false,
        customBodyRender: (value) => {
          return (
            <div className="w-24">
              <img
                src={
                  value == "imagelink"
                    ? "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRT-8i_GbrHaOg9dkF6T6TBdPCPLsHEjWgUnQ&s"
                    : value
                }
                alt="image"
                className="h-auto w-full rounded-2xl border-2 border-x-yellow-500 border-y-red-600"
              />
            </div>
          );
        },
      },
    },
    {
      name: "id",
      options: {
        filter: false,
        customBodyRender: (value, tableMeta) => (
          <p
            className={`min-w-14 rounded-2xl font-semibold ${tableMeta.rowData[9] == "Pending" && "h-14 bg-red-600 py-4 text-black"} text-center`}
          >
            {value}
            {/* {console.log(tableMeta.rowData)} */}
          </p>
        ),
      },
    },
    {
      name: "name",
      options: {
        customBodyRender: (value, tableMeta) => (
          <p
            className={`line-clamp-3 min-w-40 max-w-32 capitalize ${tableMeta.rowData[9] == "Pending" && "h-14 rounded-2xl bg-red-600 py-4 pl-2"}`}
          >
            {value}
          </p>
        ),
      },
    },
    {
      name: "Brand",
      options: {
        customBodyRender: (value) => (
          <p
            className={`min-w-14 rounded-2xl font-semibold ${value == "Brand New" && "bg-green-600 text-black"} ${value == "Slightly Used" && "bg-orange-600"} ${value == "Used" && "bg-red-700"} bg-black p-2 text-center`}
          >
            {value == "Brand New" && "New"} {value == "Used" && "Used"}{" "}
            {value == "Slightly Used" && "Slightly"}
          </p>
        ),
      },
    },
    {
      name: "newPrice",
      label: "Price",
      options: {
        filter: false,
        customBodyRender: (value) => (
          <p className="pl-3">
            {value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
          </p>
        ),
      },
    },
    {
      name: "ratingsAverage",
      label: "rating",
      options: {
        filter: false,
        display: windowWidth > 1000,
        customBodyRender: (value, tableMeta) => {
          return (
            <div className="flex gap-1">
              <p className="text-yellow-400">{value}</p>
              <p className="text-gray-400">({tableMeta.rowData[7]})</p>
            </div>
          );
        },
      },
    },
    {
      name: "ratingsQuantity",
      label: "quantity",
      options: {
        filter: false,
        display: false,
      },
    },
    {
      name: "link",
      options: {
        filter: false,
        customBodyRender: (value) => (
          <div className="flex min-w-20 flex-col gap-1.5">
            <Link
              to={`/product/${value}`}
              className="rounded-xl bg-green-600 px-2 py-1 text-center font-semibold text-black"
            >
              Detail
            </Link>
            <Link
              to={`/products/edit/${value}`}
              className="rounded-xl bg-orange-600 px-2 py-1 text-center"
            >
              Edit
            </Link>
          </div>
        ),
      },
    },
    {
      name: "status",
      label: "status",
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
    <div
      className={`relative w-full overflow-x-hidden ${myproducts.length == 0 && "hidden"}`}
    >
      <div className="my-2 ml-5 flex gap-2 md:ml-10">
        <p
          className={`cursor-pointer rounded-full px-2 py-1 font-semibold text-white ${filtered === "All" ? "border border-white bg-blue-600" : "border border-gray-500 bg-transparent"}`}
          onClick={() => setFiltered("All")}
        >
          All
        </p>
        <p
          className={`cursor-pointer rounded-full px-2 py-1 font-semibold text-white ${filtered === "Verified" ? "border border-white bg-blue-600" : "border border-gray-500 bg-transparent"}`}
          onClick={() => setFiltered("Verified")}
        >
          Verified
        </p>
        <p
          className={`cursor-pointer rounded-full px-2 py-1 font-semibold text-white ${filtered === "Pending" ? "border border-white bg-blue-600" : "border border-gray-500 bg-transparent"}`}
          onClick={() => setFiltered("Pending")}
        >
          Pending
        </p>
        <p
          className={`cursor-pointer rounded-full px-2 py-1 font-semibold text-white ${filtered === "New" ? "border border-white bg-blue-600" : "border border-gray-500 bg-transparent"}`}
          onClick={() => setFiltered("New")}
        >
          New
        </p>
        <p
          className={`cursor-pointer rounded-full px-2 py-1 font-semibold text-white ${filtered === "Slightly-Used" ? "border border-white bg-blue-600" : "border border-gray-500 bg-transparent"}`}
          onClick={() => setFiltered("Slightly-Used")}
        >
          Slightly-Used
        </p>
        <p
          className={`cursor-pointer rounded-full px-2 py-1 font-semibold text-white ${filtered === "Used" ? "border border-white bg-blue-600" : "border border-gray-500 bg-transparent"}`}
          onClick={() => setFiltered("Used")}
        >
          Used
        </p>
      </div>
      <div className={`w-[${screenwidth}px] md:w-full`}>
        <div className="max-w-fit overflow-x-hidden">
          <ThemeProvider theme={getMuiTheme}>
            <MUIDataTable
              title={"Product List"}
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

export default ProductList;
