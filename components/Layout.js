// components/Layout.js
import React from "react";
import logo from "../assets/logo.png";
import Image from "next/image";
import Link from "next/link";

import Footer from "./Footer";

const Layout = ({ children }) => {
  return (
    <div className="flex h-screen flex-col">
      <header className="mb-12 w-full">
        <div className="ml-10 mt-10 flex h-16 w-16 items-center justify-center md:h-[70px] md:w-[70px]">
          <Link href="/">
            <Image src={logo} alt="GWEI logo" className="rounded-full" />
          </Link>
        </div>
      </header>

      <main className="w-full flex-grow p-5 md:p-0">{children}</main>

      <Footer />
    </div>
  );
};

export default Layout;
