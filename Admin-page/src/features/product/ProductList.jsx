import React, { useState } from "react";
import MUIDataTable from "mui-datatables";
import { useAdminContext } from "../../context/Admin.context";
import { createTheme } from "@mui/material/styles";
import { ThemeProvider } from "@emotion/react";
import { Link } from "react-router-dom";

function ProductList() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const { allproducts } = useAdminContext();

  const data = allproducts.map((product) => {
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
    ];
  });

  const columns = [
    {
      name: "no",
      label: "no",
      options: {
        filter: false,
        display: false,
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
      },
    },
    {
      name: "name",
      options: {
        customBodyRender: (value) => (
          <p className="line-clamp-2 max-w-32 capitalize">{value}</p>
        ),
      },
    },
    {
      name: "Brand",
      options: {
        customBodyRender: (value) => (
          <p
            className={`min-w-14 rounded-2xl font-semibold ${value == "Brand New" ? "bg-green-600 text-black" : "bg-red-700"} bg-black p-2 text-center`}
          >
            {value == "Brand New" ? "New" : "Used"}
          </p>
        ),
      },
    },
    {
      name: "newPrice",
      label: "Price",
      options: {
        filter: false,
        customBodyRender: (value) => <p className="pl-3">{value}</p>,
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
              to={`/products/${value}`}
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
      <p>ProductList</p>
      <p>ProductList</p>
      <p>ProductList</p>
      <p>ProductList</p>
      <p>ProductList</p>
      <p>ProductList</p>
      <p>ProductList</p>
      <p>ProductList</p>
      <p>ProductList</p>
      <p>ProductList</p>
      <p>ProductList</p>
      <p>ProductList</p>
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
  );
}

export default ProductList;
