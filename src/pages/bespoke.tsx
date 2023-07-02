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

const bespoke: NextPage = () => {
  const hello = api.example.hello.useQuery({ text: "from tRPC" });

  const navigation = {
    main: [
      { name: 'Home', href: '#' },
      { name: 'Menu', href: '#' },
      { name: 'Bespoke', href: '#' },
      { name: 'FAQs', href: '#' },

    ],
    social: [
      {
        name: 'Facebook',
        href: '#',
        icon: ""
      },
      {
        name: 'Instagram',
        href: '#',
        icon: ""
        
      },
      {
        name: 'Twitter',
        href: '#',
        icon: ""
      },
      {
        name: 'GitHub',
        href: '#',
        icon: ""
      },
      {
        name: 'YouTube',
        href: '#',
        icon: ""
       
      },
    ],
  }

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
            <h1 className="flex justify-center pt-5 font-serif text-4xl text-pink-400">
              Our Pastries
            </h1>
            <p className="flex justify-center pt-3 font-mono text-lg text-purple-400">
              Because, why not?
            </p>
          </div>
        </div>
        <div className="carousel-center carousel rounded-box flex justify-evenly space-x-24 pt-10">
          <div className="carousel-item flex-col">
            <img src="./food2.jpeg" className="rounded-box  h-96 w-fit" />
            <div>
              <h1 className="mt-5 flex justify-center font-serif text-4xl text-pink-400">
                French Éclairs
              </h1>
              <p className="mt-10 text-center text-lg text-purple-400">
                Custom Design French Éclairs.
              </p>
              <p className="text-center text-lg text-purple-400">
                Looks great, Tastes Great.
              </p>
            </div>
          </div>
          <div className="carousel-item flex-col">
            <img src="./food2.jpeg" className="rounded-box ml-5 h-96 w-fit" />
            <div>
              <h1 className="mt-5 flex justify-center font-serif text-4xl text-pink-400">
                French Macarons
              </h1>
              <p className="mt-10 text-center text-lg text-purple-400">
                Custom Design French Macarons.
              </p>
              <p className="text-center text-lg text-purple-400">
                Available in different design options!
              </p>
            </div>
          </div>
          <div className="carousel-item flex-col">
            <img src="./food2.jpeg" className="rounded-box ml-8 h-96 w-fit" />
            <div>
              <h1 className="mt-5 flex justify-center font-serif text-4xl text-pink-400">
                Event Spreads
              </h1>
              <p className="mt-10 text-center text-lg text-purple-400">
                In collaboration with our sister company,
              </p>
              <p className="text-center text-lg text-purple-400">
                we offer events and catering services.
              </p>
            </div>
          </div>
          <div className="carousel-item flex-col">
            <img src="./food2.jpeg" className="rounded-box h-96 w-fit" />
            <div>
              <h1 className="mt-5 flex justify-center font-serif text-3xl text-pink-400">
                Bespoke Cakes
              </h1>
              <p className="mt-10 text-center text-lg text-purple-400">
                Custom Design French Macarons.
              </p>
              <p className="text-center text-lg text-purple-400">
                Looks great, Tastes Great.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-content-background mt-10 bg-cover bg-center bg-no-repeat h-96 relative">
        <div className="float-right text-right pr-96 text-base absolute bottom-32 right-10" >
          <h1 className="pt-10 text-pink-600 text-4xl font-bold">PASTRIES FOR ANY OCCASION!</h1>
          <p className="text-purple-500 text-lg pt-10">Both Savory and Sweet options - we have them both</p>
          <p className="text-purple-500 text-lg pt-10">Do you have a sweet tooth? Vote Now!</p>
        </div>
      </div>

      </div>

      {/*footer*/}
      <footer className="bg-home-background bg-cover bg-center bg-no-repeat h-full">
      <div className="mx-auto max-w-7xl overflow-hidden px-6 py-20 sm:py-24 lg:px-8">
        <nav className="-mb-6 columns-2 sm:flex sm:justify-center sm:space-x-12" aria-label="Footer">
          {navigation.main.map((item) => (
            <div key={item.name} className="pb-6">
              <Link href={item.href} className="text-sm leading-6 text-gray-600 hover:text-gray-900">
                {item.name}
              </Link>
            </div>
          ))}
        </nav>
          <p className="flex justify-center mt-5 text-red-500 underline">Legal Notice | Privacy Policy</p>
        <div className="mt-8 flex justify-center space-x-6">

        <p className="mt-5text-center text-xs leading-5 text-gray-500">
          &copy; 2022 Your Company, Inc. All rights reserved.
        </p>
        </div>
      </div>
      </footer>
    </div>
  );
};

export default bespoke;
