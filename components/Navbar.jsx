import React from "react";
import NavSearch from "./NavSearch";
import Link from "next/link";
const Navbar = () => {
  return (
    <div className="navbar bg-base-100">
      <div className="flex-1">
        <Link href="/" className="btn btn-ghost normal-case text-xl">
          League Match History
        </Link>
      </div>
      <div className="flex-none gap-2">
        <NavSearch />
      </div>
    </div>
  );
};

export default Navbar;
