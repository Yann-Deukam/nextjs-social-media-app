import UserButton from "@/components/UserButton";
import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <header className="sticky-top top-0 z-10 bg-card shadow-md">
      <div className="max-w-7xl mx-auto flex items-center justify-center flex-wrap gap-5 px-5 py-3">
        <Link href="/" className="text-2xl font-bold text-primary ">
          <span className="bg-gradient-to-b from-purple-700 to-purple-500 text-transparent bg-clip-text">
            besties
          </span>
        </Link>
        <UserButton />
      </div>
    </header>
  );
};

export default Navbar;
