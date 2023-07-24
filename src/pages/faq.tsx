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
import {
  AiOutlineInstagram,
  AiOutlineMail,
  AiOutlinePhone,
} from "react-icons/ai";

const products = [
  {
    id: 1,
    name: "Throwback Hip Bag",
    href: "#",
    color: "Salmon",
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/shopping-cart-page-04-product-01.jpg",
    imageAlt:
      "Salmon orange fabric pouch with match zipper, gray zipper pull, and adjustable hip belt.",
  },
  {
    id: 2,
    name: "Medium Stuff Satchel",
    href: "#",
    color: "Blue",
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/shopping-cart-page-04-product-02.jpg",
    imageAlt:
      "Front of satchel with blue canvas body, black straps and handle, drawstring top, and front zipper pouch.",
  },
  // More products...
];

const faq: NextPage = () => {
  const hello = api.example.hello.useQuery({ text: "from tRPC" });
  const backgroundStyles = {
    backgroundImage: "url('./Home_Background.jpeg')",
    backgroundSize: "auto",
  };

  return (
    <div data-theme="acid" className="flex-direction: column ">
      <nav className="flex items-center justify-center border-b-2 border-purple-400">
        <img className="m-5 w-32" src="./logo.png" />
        <div className="space-x-5 text-purple-300">
          <Link className="p-3 hover:bg-purple-50" href="#">
            Home
          </Link>
          <Link className="p-3 hover:bg-purple-50" href="#">
            Menu
          </Link>
          <Link className="p-3 hover:bg-purple-50" href="#">
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
            <Transition
              as={Fragment}
              enter="transition ease-out duration-200"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="transition ease-in duration-150"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Popover.Panel className="absolute inset-x-0 top-16 mt-px bg-white pb-6 shadow-lg sm:px-2 lg:left-auto lg:right-0 lg:top-full lg:-mr-1.5 lg:mt-3 lg:w-80 lg:rounded-lg lg:ring-1 lg:ring-black lg:ring-opacity-5">
                <h2 className="sr-only">Shopping Cart</h2>

                <form className="mx-auto max-w-2xl px-4">
                  <ul role="list" className="divide-y divide-gray-200">
                    {products.map((product) => (
                      <li key={product.id} className="flex items-center py-6">
                        <img
                          src={product.imageSrc}
                          alt={product.imageAlt}
                          className="h-16 w-16 flex-none rounded-md border border-gray-200"
                        />
                        <div className="ml-4 flex-auto">
                          <h3 className="font-medium text-gray-900">
                            <a href={product.href}>{product.name}</a>
                          </h3>
                          <p className="text-gray-500">{product.color}</p>
                        </div>
                      </li>
                    ))}
                  </ul>

                  <button
                    type="submit"
                    className="w-full rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-50"
                  >
                    Checkout
                  </button>

                  <p className="mt-6 text-center">
                    <a
                      href="#"
                      className="text-sm font-medium text-indigo-600 hover:text-indigo-500"
                    >
                      View Shopping Bag
                    </a>
                  </p>
                </form>
              </Popover.Panel>
            </Transition>
          </Popover>
        </div>
      </nav>
      <img src="Home_Background.jpeg" className="h-96 w-full" />
      <div className="item-center flex justify-center">
        <div className="flex flex-col items-center justify-center">
          <h1 className="text-5xl font-bold text-purple-300">FAQs</h1>
          <div className="flex flex-col items-center justify-center">
            <div className="flex flex-col items-center justify-center">
              <p className="text-2xl mt-10 font-bold text-red-300">
              Min. Spend $80 for Delivery. Self Pickup is available on weekdays, 9AM - 5PM
              </p>
              <p className="text-2xl mt-5 font-bold text-red-300">Same Day Delivery For Orders Placed Before 6PM. </p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default faq;
