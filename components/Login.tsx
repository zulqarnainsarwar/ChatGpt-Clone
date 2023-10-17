"use client";
import { signIn, signOut } from "next-auth/react";
import Image from "next/image";
import logo from "../app/logo.png";

const Login = () => {
  return (
    <div className="bg-[#11a37f] h-screen flex flex-col items-center justify-center text-center">
      <Image src={logo} width={300} height={300} alt="Logo" />
      <button
        onClick={() => signIn("google")}
        className="text-white text-3xl font-bold animate-pulse"
      >
        SignIn to use ChatGpt
      </button>
    </div>
  );
};

export default Login;
