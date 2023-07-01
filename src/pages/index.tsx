import { type NextPage } from "next";
import Head from "next/head";
import Link from "next/link";

import { api } from "~/utils/api";
import { Fragment } from 'react';
import { MagnifyingGlassIcon, ShoppingBagIcon } from '@heroicons/react/24/outline';
import { Popover, Transition } from '@headlessui/react';

const products = [
  {
    id: 1,
    name: 'Throwback Hip Bag',
    href: '#',
    color: 'Salmon',
    imageSrc: 'https://tailwindui.com/img/ecommerce-images/shopping-cart-page-04-product-01.jpg',
    imageAlt: 'Salmon orange fabric pouch with match zipper, gray zipper pull, and adjustable hip belt.',
  },
  {
    id: 2,
    name: 'Medium Stuff Satchel',
    href: '#',
    color: 'Blue',
    imageSrc: 'https://tailwindui.com/img/ecommerce-images/shopping-cart-page-04-product-02.jpg',
    imageAlt:
      'Front of satchel with blue canvas body, black straps and handle, drawstring top, and front zipper pouch.',
  },
  // More products...
]


const Home: NextPage = () => {
  const hello = api.example.hello.useQuery({ text: "from tRPC" });
  const backgroundStyles={
    backgroundImage: "url('./Home_Background.jpeg')",
    backgroundSize: "auto",
  };

  return (
    <div className="flex-direction: column ">
      <nav className="flex justify-between items-center border-b-2 border-purple-400">
        <img className="w-32 m-5" src="./logo.png"/>
        <div className="space-x-5 text-purple-300" >
          <a className="hover:bg-purple-50 p-3" href="#">Home</a>
          <a className="hover:bg-purple-50 p-3" href="#">Menu</a>
          <a className="hover:bg-purple-50 p-3" href="#">Bespoke</a>
          <a className="hover:bg-purple-50 p-3" href="#">FAQs</a>
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
                <Popover className="ml-4 flow-root text-sm lg:relative m-5 lg:ml-8">
                <Popover.Button className="group -m-2 flex items-center p-2">
                  <ShoppingBagIcon
                    className="h-6 w-6 flex-shrink-0 text-gray-400 group-hover:text-gray-500"
                    aria-hidden="true"
                  />
                  <span className="ml-2 text-sm font-medium text-gray-700 group-hover:text-gray-800">0</span>
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
                        <a href="#" className="text-sm font-medium text-indigo-600 hover:text-indigo-500">
                          View Shopping Bag
                        </a>
                      </p>
                    </form>
                  </Popover.Panel>
                </Transition>
              </Popover>
        </div>
      </nav>
      <div className="advertisment bg-home-background bg-cover bg-center bg-no-repeat h-576px" >
        <div className="pt-9">
          <img src="/Advert_content.png" className="h-80 mx-auto"></img>
          
        </div>
      </div>
      <div className="bg-gradient-to-br from-pink-200 to-pink-50 h-1044px flex justify-around flex-row">
        <div className="pt-10 flex flex-col">
          <img src="/content_img.jpg" className="basis-1/2 h-576px w-80"></img>
          <div className="basis-1/4 content-info text-center">
            <h1 className="pt-10 text-pink-500 text-4xl ">Name of item 1</h1>
            <p className="text-purple-500 text-xl">Description of item</p>
          </div>
          <button className=" mx-9 rounded-full border-solid border-2 border-black bg-orange-200 ">Get Now</button>
        </div>
        <div className="pt-10 flex flex-col ">
          <img src="/content_img.jpg" className="basis-1/2 h-576px w-80"></img>
          <div className="basis-1/4 content-info text-center ">
            <h1 className="pt-10 text-pink-500 text-4xl px-14">Name of item 2</h1>
            <p className="text-purple-500 text-xl">Description of item</p>
          </div>
          <button className="mx-9 rounded-full border-solid border-2 border-black bg-orange-200 ">Get Now</button>
        </div>
        <div className="pt-10 flex flex-col">
          <img src="/content_img.jpg" className="basis-1/2 h-576px w-80"></img>
          <div className="content-info text-center basis-1/4">
            <h1 className="pt-10 text-pink-500 text-4xl">Name of item 3</h1>
            <p className="text-purple-500 text-xl">Description of item</p>
          </div>
          <button className="mx-9 rounded-full border-solid border-2 border-black bg-orange-200 ">Get Now</button>
        </div>
      </div>
      <div className="bg-content-background bg-cover bg-center bg-no-repeat h-96 relative">
        <div className="float-right text-right pr-96 text-base absolute bottom-32 right-10" >
          <h1 className="pt-10 text-pink-600 text-4xl font-bold">PASTRIES FOR ANY OCCASION!</h1>
          <p className="text-purple-500 text-lg pt-10">Both Savory and Sweet options - we have them both</p>
          <p className="text-purple-500 text-lg pt-10">Do you have a sweet tooth? Vote Now!</p>
        </div>
      </div>
      <footer className="bg-home-background bg-cover bg-center bg-no-repeat h-48 ">
        
      </footer>
    </div>
  );
};

export default Home;
