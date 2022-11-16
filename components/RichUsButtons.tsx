import Link from "next/link";
import React from "react";

export default function RichUsButtons(){
    return  <div className="p-10">
    <h2 className="text-3xl text-center font-bold tracking-tight text-gray-900 sm:text-4xl">
      <span className="block py-2">Ready to dive in?</span>
      <span className="block text-blue-600">Contact TechEthio today.</span>
    </h2>
    <div className="flex justify-center py-10">
      <div className="mt-8 flex md:space-x-20 lg:mt-0 lg:flex-shrink-0">
        <div className="inline-flex rounded-md shadow">
          <Link
            href="#"
            className="inline-flex items-center justify-center rounded-md border border-transparent bg-blue-600 px-4 md:px-10 py-2 text-base font-medium text-white hover:bg-blue-700"
          >
            Get started
          </Link>
        </div>
        <div className="ml-3 inline-flex rounded-md shadow">
          <Link
            href="#"
            className="inline-flex items-center justify-center rounded-md border border-transparent bg-white px-4 md:px-10 py-2 text-base font-medium text-blue-600 hover:bg-blue-50"
          >
            Learn more
          </Link>
        </div>
      </div>
    </div>
  </div>
}