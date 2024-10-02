import React from "react";
import { Metadata } from "next";
import signUpImage from "@/assets/sign-up.jpg";
import Image from "next/image";
import Link from "next/link";
import SignUpForm from "./SignUpForm";

export const metadata: Metadata = {
  title: "Sign up",
};

const page = () => {
  return (
    <main className="flex h-screen items-center justify-center p-5">
      <div className="shadow-2xl flex h-full max-h-[40rem] w full max-w-[50rem] rounded-lg overflow:hidden">
        <div className="md:w-1/2 w-full space-y-10 overflow-y-auto p-10">
          <div className="space-y-2 text-center">
            <h1 className="text-2xl font-bold  ">
              Sign up to{" "}
              <span className="bg-gradient-to-b from-purple-700 to-purple-500 text-transparent bg-clip-text">
                Besties
              </span>
            </h1>
            <p className="text-sm text-muted-foreground">
              A place where everybody meets
            </p>
          </div>
          <div className="space-y-5">
            <SignUpForm />
            <Link
              href="/login"
              className=" text-sm block text-center hover:underline"
            >
              Already have an account ? login
            </Link>
          </div>
        </div>
        <Image
          src={signUpImage}
          alt="sign up image"
          className="w-1/2 hidden md:block object-cover"
        />
      </div>
    </main>
  );
};

export default page;
