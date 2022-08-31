import React from 'react'
import Image from "next/image";

interface msgProps {
  message: string,
};

export const Header = ({ message }: msgProps) => {
  return (
    <header className="mx-auto mt-12 justify-center">
      <h1 className="text-2xl mt-8 md:text-4xl font-bold font-redhat text-green-500 font- text-center mx-auto ">
        {message ? message : "KAVUŞMAMIZA ÇOK AZ KALDI :)"}
      </h1>
    </header>
  )
}
