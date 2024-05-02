"use client";
// import { ConnectWallet } from "@thirdweb-dev/react";
// import { useApp } from "@/Context/AppContext";
// import {
//   Dialog,
//   DialogClose,
//   DialogContent,
//   DialogFooter,
//   DialogHeader,
//   DialogTitle,
//   DialogTrigger,
// } from "@/components/ui/dialog";
// import useLocalStorage from "@/hooks/use-local-storage-state";
// import { UserInfo } from "@/types";
// import { LogOut, Plus } from "lucide-react";
// import Image from "next/image";
import Link from "next/link";
import { useState, type FC } from "react";
// import { toast } from "react-toastify";
// import SignIn from "./SignIn";
// import { Button } from "./ui/button";
// import SearchBar from "./SearchBar";

export const Header: FC = () => {
  // const { userData } = useApp();
  // const [user, _1, removeItem] = useLocalStorage<UserInfo>("user");
  // const [isOpened, setIsOpened] = useState(false);
  // const [text, setText] = useState("");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // const handleSignout = () => {
  //   removeItem();
  //   window.location.reload();
  // };

  // const createCast = async () => {
  //   if (!user.signerUuid) {
  //     return;
  //   }

  //   const req = await fetch("/api/casts", {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify({
  //       signerUid: user.signerUuid,
  //       text,
  //     }),
  //   });

  //   if (req.ok) {
  //     toast("Cast created successfully!", {
  //       type: "success",
  //       autoClose: 5000,
  //       position: "bottom-right",
  //     });

  //     setText("");
  //   } else {
  //     toast("Error creating cast", {
  //       type: "error",
  //       autoClose: 5000,
  //       position: "bottom-right",
  //     });
  //   }

  //   setIsOpened(false);
  // };

  return (
    <nav className="bg-gray-900 border-gray-200 dark:bg-gray-900">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Link
          href="/"
          className="flex items-center space-x-3 rtl:space-x-reverse"
        >
          <img
            src="https://flowbite.com/docs/images/logo.svg"
            className="h-8"
            alt="Flowbite Logo"
          />
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
            Only Base
          </span>

          {/* <div className="px-4 pt-2">
            {userData?.displayName ? (
              <div className={"flex items-center gap-4"}>
                {userData?.pfp.url && (
                  <Image
                    src={userData?.pfp.url}
                    alt="User profile picture"
                    width={32}
                    height={32}
                    className="rounded-full"
                  />
                )}
                <p className="text-sm font-semibold">{userData?.displayName}</p>

                <Dialog open={isOpened} onOpenChange={setIsOpened}>
                  <DialogTrigger asChild>
                    <Button
                      variant="secondary"
                      className="bg-[#0091FF] text-white gap-2 rounded-lg h-8 w-28 hover:bg-blue-700 focus:ring-2 focus:ring-blue-500"
                    >
                      <Plus
                        width={24}
                        height={24}
                        className="!w-8 !h-8 fill-current text-white"
                      />
                      New Cast
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="sm:max-w-md bg-[#131417] border-[0.5px] border-[#2B2B2B]">
                    <DialogHeader>
                      <DialogTitle className="text-white font-semibold text-lg text-center">
                        New cast
                      </DialogTitle>
                    </DialogHeader>

                    <div className="flex items-center gap-4 p-4">
                      <Image
                        src={userData?.pfp.url}
                        alt="User profile picture"
                        width={32}
                        height={32}
                        className="rounded-full"
                      />

                      <input
                        type="text"
                        placeholder="What's happening?"
                        className="w-full h-12 p-4 bg-[#1A1C1F] border-[1px] border-[#2B2B2B] rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        value={text}
                        onChange={(e) => setText(e.target.value)}
                      />
                    </div>
                    <DialogFooter className="border-t-2 border-[#2B2B2B] justify-end pt-4 align-end">
                      <DialogClose asChild>
                        <Button
                          variant="destructive"
                          size="sm"
                          className="border-[#2B2B2B] text-white hover:bg-[#2B2B2B] hover:text-white"
                        >
                          Cancel
                        </Button>
                      </DialogClose>
                      <Button
                        variant="default"
                        size="sm"
                        className="bg-[#0091FF] text-white hover:bg-blue-700"
                        onClick={createCast}
                      >
                        Post
                      </Button>
                    </DialogFooter>
                  </DialogContent>
                </Dialog>

                <Button
                  onClick={handleSignout}
                  className=" text-white hover:bg-[#2B2B2B] hover:text-white border-[#2B2B2B] border-2 rounded-lg h-8 w-28 gap-2"
                >
                  <LogOut width={16} height={16} />
                  Sign out
                </Button>
              </div>
            ) : (
              <SignIn />
            )}
          </div> */}
        </Link>
        <div className="flex md:order-2">
          <button
            type="button"
            data-collapse-toggle="navbar-search"
            aria-controls="navbar-search"
            aria-expanded="false"
            className="md:hidden text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5 me-1"
          >
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
              />
            </svg>
            <span className="sr-only">Search</span>
          </button>

          <div className="relative hidden md:block">
            <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
              <svg
                className="w-4 h-4 text-gray-500 dark:text-gray-400"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                />
              </svg>
              <span className="sr-only">Search icon</span>
            </div>
            <input
              type="text"
              id="search-navbar"
              className="block w-full p-2 ps-10 text-sm text-gray-900 border border-gray-700 rounded-lg shadow-lg bg-gray-800 shadow-gray-800 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Search..."
            />
          </div>

          <button
            data-collapse-toggle="navbar-search"
            type="button"
            onClick={toggleMenu}
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-search"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
        </div>
        <div
          className={`items-center justify-between w-full md:flex md:w-auto md:order-1 ${
            !isMenuOpen && "hidden"
          }`}
          id="navbar-search"
        >
          {isMenuOpen && (
            <div className="relative mt-3 md:hidden">
              <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                <svg
                  className="w-4 h-4 text-gray-500 dark:text-gray-400"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 20"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                  />
                </svg>
              </div>
              <input
                type="text"
                id="search-navbar"
                className="block w-full p-2 ps-10 text-sm text-gray-50 border border-gray-300 rounded-lg bg-gray-800 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Search..."
              />
            </div>
          )}
          <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0">
            <li>
               <Link
          href="/"
                
                className="block py-2 px-3 text-white rounded hover:bg-gray-800 md:hover:bg-transparent  md:p-0 "
                aria-current="page"
              >
                Home
              </Link>
            </li>
            <li>
                <Link
                href="/new-project"
                className="block py-2 px-3 rounded text-white hover:bg-gray-800 md:hover:bg-transparent  md:p-0"
              >
                Add project
              </Link>
            </li>
            {/* <li>
              <Link
                href="/about"
                className="block py-2 px-3 text-white rounded hover:bg-gray-800 md:hover:bg-transparent md:p-0"
              >
                About
              </Link>
            </li> */}
          </ul>
        </div>
      </div>
    </nav>
  );
};
