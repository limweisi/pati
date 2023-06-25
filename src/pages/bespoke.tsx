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
    <div data-theme="acid">
      {/* Nav bar */}
      <nav className="flex items-center justify-between border-b-2 border-purple-400">
        <img className="m-5 w-32" src="./logo.png" />

        <div className="space-x-5 text-purple-300">
          <Link className="p-3 hover:bg-purple-50" href="#">
            Home
          </Link>
          <Link className="p-3 hover:bg-purple-50" href="#">
            Menu
          </Link>
          <Link className="active: p-3 hover:bg-purple-50" href="#">
            Bespoke
          </Link>
          <Link className="p-3 hover:bg-purple-50" href="#">
            FAQs
          </Link>
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
          <Link href="#" className="p-2 text-gray-400 hover:text-gray-500">
            <span className="sr-only">Search</span>
            <MagnifyingGlassIcon className="h-6 w-6" aria-hidden="true" />
          </Link>
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

      {/* Hero */}
      <div>
        <div>
          <div>
            <h1 className="flex justify-center text-4xl font-bold text-black">
              Our pastries
            </h1>
            <p className="flex justify-center text-xl font-bold text-black">
              Because, why not?
            </p>
          </div>
        </div>
        <div className="carousel-center carousel rounded-box flex justify-center space-x-24 pt-10">
          <div className="carousel-item flex-col">
            <img src="./food.jpeg" className="rounded-box ml-16 h-96 w-fit" />
            <div>
              <h1 className="mt-5 flex justify-center text-4xl font-bold text-black">
                French Éclairs
              </h1>
              <p className="mt-10 text-xl font-bold text-black">
                Custom Design French Éclairs.
              </p>
              <p className="text-xl font-bold text-black">
                Looks great, Tastes Great.
              </p>
            </div>
          </div>
          <div className="carousel-item flex-col">
            <img src="./food2.jpeg" className="rounded-box h-96 w-fit" />
            <div>
              <h1 className="mr-24 mt-5 flex justify-center text-4xl font-bold text-black">
                French Macarons
              </h1>
              <p className="mt-10 text-xl font-bold text-black">
                Custom Design French Macarons.
              </p>
              <p className="text-xl font-bold text-black">
                Available in a different design options!
              </p>
            </div>
          </div>
          <div className="carousel-item flex-col">
            <img src="./food2.jpeg" className="rounded-box h-96 w-fit" />
            <div>
              <h1 className="mr-28 mt-5 flex justify-center text-4xl font-bold text-black">
                Event Spreads
              </h1>
              <p className="mt-10 text-xl font-bold text-black">
                In collaboration with our sister company,
              </p>
              <p className="text-xl font-bold text-black">
                we offer events and catering services.
              </p>
            </div>
          </div>
          <div className="carousel-item flex-col">
            <img src="./food2.jpeg" className="rounded-box h-96 w-fit" />
            <div>
              <h1 className="mr-28 mt-5 flex justify-center text-3xl font-bold text-black">
                Bespoke Cakes
              </h1>
              <p className="mt-10 text-xl font-bold text-black">
                Custom Design French Macarons.
              </p>
              <p className="text-xl font-bold text-black">
                Looks great, Tastes Great.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/*footer*/}
      <footer>
        <div className="flex justify-center">
          <div className="flex flex-col justify-center">
            <img className="w-32" src="./logo.png" />
            <p className="text-sm text-gray-400">© 2021 by Cupcake</p>
          </div>
          <div className="flex flex-col justify-center">
            <p className="text-sm text-gray-400">Contact Us</p>
            <p className="text-sm text-gray-400">FAQs</p>
            <p className="text-sm text-gray-400">Privacy Policy</p>
            <p className="text-sm text-gray-400">Terms of Use</p>
          </div>
          <div className="flex flex-col justify-center">
            <p className="text-sm text-gray-400">Instagram</p>
            <p className="text-sm text-gray-400">Facebook</p>
            <p className="text-sm text-gray-400">Twitter</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default menu;
