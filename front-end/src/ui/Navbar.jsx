import {
  Disclosure,
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
} from "@headlessui/react";
import { Bars3Icon } from "@heroicons/react/24/outline";
import { useContext, useState } from "react";
import { IoCart } from "react-icons/io5";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { getCart, getTotalCartQuantity } from "../hooks/CartSlice";
import { useSelector } from "react-redux";
import secureLocalStorage from "react-secure-storage";
import { NavbarContext, useNavbarContext } from "../context/Navbar.context";
import Search from "./Search";
import { LogoutApi } from "../Services/apiAuthentication";

const navigation = [
  { name: "Discount", to: "/c/discount" },
  { name: "New", to: "/c/Brand_New" },
  { name: "Used", to: "/c/Used" },
  { name: "Popular", to: "/c/popular" },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function NavBar() {
  // adding cart item to secureLocalStorage
  const cart = useSelector(getCart);
  secureLocalStorage.setItem("cartStored", cart);

  const location = useLocation();
  const navigate = useNavigate();
  const { loggedUser, setLoggedUser } = useContext(NavbarContext);

  const { sideBar, setSideBar } = useNavbarContext();

  const { loading, logoutHook } = LogoutApi();

  const handleLogout = async (e) => {
    try {
      e.preventDefault();
      await logoutHook();
    } catch (error) {}
  };

  const QuantityInCart = useSelector(getTotalCartQuantity);
  const isCartEmpty = QuantityInCart === 0;
  return (
    <div className="  sticky top-0 w-full z-40">
      <Disclosure as="nav" className="bg-gray-800 z-10">
        <div className="mx-auto max-w-7xl px-2 md:px-6 lg:px-8 bg-gray-800">
          <div className="relative flex h-16 items-center justify-between">
            <div className=" flex items-center mr-3 ">
              <button
                onClick={() => {
                  setSideBar(true);
                }}
              >
                <Bars3Icon
                  aria-hidden="true"
                  className=" h-10 w-10  group relative inline-flex items-center justify-center rounded-md p-2 text-white hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                />
              </button>
            </div>
            <div className="flex flex-1 items-center justify-start sm:items-stretch sm:justify-start ">
              <div className="flex flex-shrink-0 items-center ">
                <Link to="/" className="cursor-pointer">
                  <img
                    alt="Doctera"
                    src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
                    className="h-8 w-auto"
                  />
                </Link>
              </div>
              <div className="hidden sm:ml-2 md:ml-5 sm:block">
                <div className="flex space-x-2 lg:space-x-4">
                  {navigation.map((item, i) => (
                    <Link
                      key={item.name}
                      to={item.to}
                      className={classNames(
                        location.pathname == item.to
                          ? "bg-gray-900 text-white"
                          : "text-gray-300 hover:bg-gray-700 hover:text-white",
                        `text-lg md:text-lg rounded-md px-2 py-2  font-medium transition ${
                          i > 2 && "sm:hidden md:flex"
                        }`
                      )}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
            <div className="absolute inset-y-0 right-2 flex gap-2 items-center pr-2 sm:static sm:inset-auto sm:ml-5 sm:pr-1 md:pr-2">
              <Search />
              <button
                type="button"
                onClick={() => navigate("/cart")}
                className="relative rounded-full bg-gray-800 p-1 text-gray-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
              >
                <span className="absolute -inset-1.5" />
                <span className="sr-only">View Cart</span>
                {/* <BellIcon aria-hidden="true" className="h-6 w-6" /> */}
                <IoCart
                  aria-hidden="true"
                  className={` text-4xl w-9 ${!isCartEmpty && "text-red-500"}`}
                />
                {!isCartEmpty && (
                  <span className="absolute bottom-1 right-0 font-bold text-xl  text-white">
                    {QuantityInCart}
                  </span>
                )}
              </button>

              {/* Profile dropdown */}
              {loggedUser ? (
                <Menu as="div" className="relative ml-3">
                  <div>
                    <MenuButton className="relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                      <span className="absolute -inset-1.5" />
                      <span className="sr-only">Open user menu</span>
                      <img
                        alt=""
                        src={
                          secureLocalStorage.getItem("logged-user")
                            .profilePic ||
                          "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                        }
                        className="h-9 w-9 rounded-full"
                      />
                    </MenuButton>
                  </div>
                  <MenuItems
                    transition
                    className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
                  >
                    <MenuItem>
                      <Link
                        to="/profile"
                        className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100"
                      >
                        Your Profile
                      </Link>
                    </MenuItem>
                    <MenuItem>
                      <a
                        href="#"
                        className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100"
                      >
                        Shopping History
                      </a>
                    </MenuItem>
                    <MenuItem>
                      <Link
                        to="/"
                        className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100"
                        onClick={handleLogout}
                      >
                        Sign out{" "}
                      </Link>
                    </MenuItem>
                  </MenuItems>
                </Menu>
              ) : (
                <Link
                  to="/login"
                  className="ml-3 px-2 py-1.5 bg-gray-200 hover:bg-white rounded-md"
                >
                  Log in
                </Link>
              )}
            </div>
          </div>
        </div>
      </Disclosure>
    </div>
  );
}
