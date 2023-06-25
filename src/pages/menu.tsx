import { type NextPage } from "next";
import Head from "next/head";
import Link from "next/link";

import { api } from "~/utils/api";
import { Fragment } from "react";
import {
  MagnifyingGlassIcon,
  ShoppingBagIcon,
} from "@heroicons/react/24/outline";
import { Popover, Transition } from "@headlessui/react";

const menu: NextPage = () => {
  const hello = api.example.hello.useQuery({ text: "from tRPC" });

  return (
    <div>
      {/* Nav bar */}
      <nav className="flex items-center justify-between border-b-2 border-purple-400">
        <img className="m-5 w-32" src="./logo.png" />
        <div className="space-x-5 text-purple-300">
          <a className="p-3 hover:bg-purple-50" href="#">
            Home
          </a>
          <a className="p-3 hover:bg-purple-50" href="#">
            Menu
          </a>
          <a className="p-3 hover:bg-purple-50" href="#">
            Bespoke
          </a>
          <a className="p-3 hover:bg-purple-50" href="#">
            FAQs
          </a>
        </div>
        {/* <input className="w-30 h-10 border-b-2 border-purple-300 placeholder-purple-400" placeholder="Search Product" >
        </input> */}
        <div className="flex items-center justify-end">
          {/* Search */}
          <input
            id="search"
            name="search"
            className="block w-full rounded-md border-0 bg-white py-1.5 pl-10 pr-3 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            placeholder="Search"
            type="search"
          />
          <a href="#" className="p-2 text-gray-400 hover:text-gray-500">
            <span className="sr-only">Search</span>
            <MagnifyingGlassIcon className="h-6 w-6" aria-hidden="true" />
          </a>
          {/* Cart */}
          <Popover className="m-5 ml-4 flow-root text-sm lg:relative lg:ml-8">
            <Popover.Button className="group -m-2 flex items-center p-2">
              <ShoppingBagIcon
                className="h-6 w-6 flex-shrink-0 text-gray-400 group-hover:text-gray-500"
                aria-hidden="true"
              />
              <span className="ml-2 text-sm font-medium text-gray-700 group-hover:text-gray-800">
                0
              </span>
              <span className="sr-only">items in cart, view bag</span>
            </Popover.Button>
          </Popover>
        </div>
      </nav>
    </div>
  );
};

export default menu;
