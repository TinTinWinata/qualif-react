import { Link } from "react-router-dom";
import { Fragment } from "react";
import { Menu, Popover, Transition } from "@headlessui/react";
import { EmojiHappyIcon, MenuIcon, XIcon } from "@heroicons/react/outline";
import { GetUser } from "../library/context/UserContext";
import { useTheme } from "../library/context/ThemeContext";
import { Loading } from "./loading";

const navigation = [];
const userNavigation = [
  { name: "My Favorite", href: "/favorite" },
  { name: "Search Repository", href: "/search-repository" },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

function EmojiIcon() {
  const { changeTheme } = useTheme();
  const handleClick = () => {
    changeTheme();
  };

  return (
    <EmojiHappyIcon
      onClick={handleClick}
      className=" h-6 w-6 cursor-pointer"
      aria-hidden="true"
    />
  );
}

export default function Navbar() {
  const { currTheme } = useTheme();

  const { user } = GetUser();
  if (!user) {
    return <Loading></Loading>;
  }

  return (
    <>
      <Popover
        as="header"
        style={{
          backgroundColor: currTheme.background,
          color: currTheme.foreground,
        }}
        className={({ open }) =>
          classNames(
            open ? "fixed inset-0 z-40 overflow-y-auto" : "",
            "shadow-sm lg:static lg:overflow-y-visible"
          )
        }
      >
        {({ open }) => (
          <>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="relative flex justify-between xl:grid xl:grid-cols-12 lg:gap-8">
                <div className="flex md:absolute md:left-0 md:inset-y-0 lg:static xl:col-span-2">
                  <div className="flex-shrink-0 flex items-center">
                    <Link to="/home">
                      <h1 className="font-bold ">Welcome</h1>
                    </Link>
                  </div>
                </div>
                <div className="min-w-0 flex-1 md:px-8 lg:px-0 xl:col-span-6">
                  <div className="flex items-center px-6 py-4 md:max-w-3xl md:mx-auto lg:max-w-none lg:mx-0 xl:px-0">
                    <div className="w-full">
                      <label htmlFor="search" className="sr-only">
                        Search
                      </label>
                      <div className="relative py-3"></div>
                    </div>
                  </div>
                </div>
                <div className="flex items-center md:absolute md:right-0 md:inset-y-0 lg:hidden">
                  {/* Mobile menu button */}
                  <Popover.Button className="-mx-2 rounded-md p-2 inline-flex items-center justify-center  hover:bg-gray-100 hover: focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray-500">
                    <span className="sr-only">Open menu</span>
                    {open ? (
                      <XIcon className="block h-6 w-6" aria-hidden="true" />
                    ) : (
                      <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                    )}
                  </Popover.Button>
                </div>
                <div className="hidden  lg:flex lg:items-center lg:justify-end xl:col-span-4">
                  <span className="sr-only">View notifications</span>

                  <EmojiIcon></EmojiIcon>
                  {/* Profile dropdown */}
                  <Menu as="div" className="flex-shrink-0 relative ml-5">
                    {({ open }) => (
                      <>
                        <div>
                          <Menu.Button
                            style={{
                              backgroundColor: currTheme.background,
                              color: currTheme.foreground,
                            }}
                            className=" rounded-full flex focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
                          >
                            <span className="sr-only">Open user menu</span>
                            <img
                              className="h-8 w-8 rounded-full"
                              src={user.avatarUrl}
                              alt=""
                            />
                          </Menu.Button>
                        </div>
                        <Transition
                          show={open}
                          as={Fragment}
                          enter="transition ease-out duration-100"
                          enterFrom="transform opacity-0 scale-95"
                          enterTo="transform opacity-100 scale-100"
                          leave="transition ease-in duration-75"
                          leaveFrom="transform opacity-100 scale-100"
                          leaveTo="transform opacity-0 scale-95"
                        >
                          <Menu.Items
                            static
                            style={{
                              backgroundColor: currTheme.background,
                              color: currTheme.foreground,
                            }}
                            className="origin-top-right absolute z-10 right-0 mt-2 w-48 rounded-md shadow-lg  ring-1 ring-black ring-opacity-5 py-1 focus:outline-none"
                          >
                            {userNavigation.map((item) => (
                              <Menu.Item key={item.name}>
                                {({ active }) => (
                                  <Link
                                    to={item.href}
                                    className={classNames(
                                      active ? "bg-gray-100" : "",
                                      "block py-2 px-4 text-sm "
                                    )}
                                  >
                                    {item.name}
                                  </Link>
                                )}
                              </Menu.Item>
                            ))}
                          </Menu.Items>
                        </Transition>
                      </>
                    )}
                  </Menu>

                  {/* <a
                    href="#"
                    className="ml-6 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-gray-600 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
                  >
                    New Project
                  </a> */}
                </div>
              </div>
            </div>

            <Popover.Panel as="nav" className="lg:hidden" aria-label="Global">
              <div className="max-w-3xl mx-auto px-2 pt-2 pb-3 space-y-1 sm:px-4">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    aria-current={item.current ? "page" : undefined}
                    className={classNames(
                      item.current ? "bg-gray-100 " : "hover:bg-gray-50",
                      "block rounded-md py-2 px-3 text-base font-medium"
                    )}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
              <div className="border-t border-gray-200 pt-4 pb-3">
                <div className="max-w-3xl mx-auto px-4 flex items-center sm:px-6">
                  <div className="flex-shrink-0">
                    <img
                      className="h-10 w-10 rounded-full"
                      src={user.avatarUrl}
                      alt=""
                    />
                  </div>
                  <div className="ml-3">
                    <div className="text-base font-medium ">{user.name}</div>
                    <div className="text-sm font-medium ">{user.email}</div>
                  </div>
                  <span className="sr-only">View notifications</span>

                  <div className="ml-1">
                    <EmojiIcon></EmojiIcon>
                  </div>
                </div>
                <div className="mt-3 max-w-3xl mx-auto px-2 space-y-1 sm:px-4">
                  {userNavigation.map((item) => (
                    <Link
                      key={item.name}
                      to={item.href}
                      className="block rounded-md py-2 px-3 text-base font-medium  hover:bg-gray-50 hover:text-gray-900"
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              </div>
            </Popover.Panel>
          </>
        )}
      </Popover>
    </>
  );
}
