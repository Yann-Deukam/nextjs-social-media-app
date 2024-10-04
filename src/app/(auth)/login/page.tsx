import { Metadata } from "next";
import LoginImage from "@/assets/login.jpg";
import Image from "next/image";
import LoginForm from "./LoginForm";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Login",
};

const page = () => {
  return (
    <main className="flex h-screen justify-center p-5 items-center">
      <div className="flex h-full max-h-[40rem] w-full w full max-w-[50rem] rounded-lg overflow:hidden shadow-2xl">
        <div className="md:w-1/2 w-full space-y-10 overflow-y-auto p-10">
          <h1 className="text-2xl text-center font-bold  ">
            Login to{" "}
            <span className="bg-gradient-to-b from-purple-700 to-purple-500 text-transparent bg-clip-text">
              Besties
            </span>
          </h1>
          <div className="space-y-5">
            <LoginForm />
            <Link
              href="/signup"
              className=" text-sm block text-center hover:underline"
            >
              Don&apos;t have an account ? Sign up
            </Link>
          </div>
        </div>
        <Image
          src={LoginImage}
          alt="login image"
          className="w-1/2 hidden md:block object-cover"
        />
      </div>
    </main>
  );
};

export default page;
