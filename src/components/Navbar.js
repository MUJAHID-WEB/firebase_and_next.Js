"use client";

import Link from "next/link";

import { useRouter } from "next/navigation";
import React from "react";
import { auth } from "../app/firebaseConfig";

function Navbar({ user }) {
  const router = useRouter();

  const logout = async () => {
    try {
      await auth.signOut();
      router.push("login");
    } catch (error) {
      console.error(" error logging out: ", error);
    }
  };

  return (
    <div
      className="main lg:flex md:flex flex-wrap justify-between items-center 
     px-4 bg-[#2a056f] py-4 shadow-md"
    >
      <div className="left">
        <div className="logo font-bold text-2xl text-white text-center"></div>
      </div>
      <div className="right">
        {user ? (
          <div className="flex space-x-4 text-yellow-300 justify-center items-center">
            <p>Welcome, {user.email}</p>
            <button onClick={logout} className="cursor-pointer">
              Logout
            </button>
          </div>
        ) : (
          <ul className="flex space-x-4 text-white justify-center items-center">
            <Link href={"/"}>
              <li className="cursor-pointer">Home</li>
            </Link>

            <Link href={"/login"}>
              <li className="cursor-pointer">Login</li>
            </Link>
            <Link href={"/signup"}>
              <li className="cursor-pointer">Signup</li>
            </Link>
          </ul>
        )}
      </div>
    </div>
  );
}

export default Navbar;
