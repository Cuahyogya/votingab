import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav class="bg-white dark:bg-gray-900 sticky top-0 left-0">
      <div class="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        <div class="md:flex md:justify-between">
          <div class="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3"></div>
        </div>
        <div class="sm:flex sm:items-center sm:justify-between ">
          <a
            href="https://www.instagram.com/sagaratechnology/"
            class="flex items-center"
          >
            <img
              src="/letter-v.png"
              class="h-8 mr-3 hover:scale-105"
              alt="Logo"
            />
            <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white transition hover:scale-105  duration-300">
              Votinggab
            </span>
          </a>
          <div class="sm:flex mt-4 space-x-5 sm:justify-center sm:mt-0">
            <Link
              to="/profile"
              class="self-center text-xl font-semibold whitespace-nowrap dark:text-white transition hover:scale-105 duration-200"
            >
              Profile
            </Link>
            <Link
              to="/voting"
              class="self-center text-xl font-semibold whitespace-nowrap dark:text-white transition hover:scale-105 duration-200"
            >
              Vote
            </Link>
            <Link
              to="/landingpage"
              class="self-center text-xl font-semibold whitespace-nowrap dark:text-white transition hover:scale-105 duration-200"
            >
              Logout
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
