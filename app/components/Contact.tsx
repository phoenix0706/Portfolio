"use client";
import React, { useState } from "react";
import { Input, Textarea } from "@nextui-org/react";
import CButton from "./button";
import Image from "next/image";
export default function Contact() {
  const [value, setValue] = useState("junior2nextui.org");

  const validateEmail = (value: string) =>
    value.match(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i);

  const isInvalid = React.useMemo(() => {
    if (value === "") return false;

    return validateEmail(value) ? false : true;
  }, [value]);

  return (
    <section id="contact">
      <h1 className="text-6xl text-center font-extrabold my-8">Contact </h1>
      <div className=" rounded-md w-full border-divider max-h-100% border-medium px-5 py-6">
        <div className="grid grid-cols-1 lg:grid-cols-12  my-4  ">
          {/* Conditionally render the div based on the device size */}
          <div className="col-span-6 place-self-center mt-4 lg:mt-0 hidden lg:block  ">
            {/* This div will be hidden on small devices and displayed on medium and large devices */}
            <div className="rounded-full w-[450px] h-[450px] lg:w-[500px] lg:h-[500px] relative ">
              <Image
                src="/images/mail-2.jpg"
                className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 rounded-lg"
                alt="Intro Image"
                width={500}
                height={500}
              />
            </div>
          </div>
          <div className="col-span-6 place-self-center w-8/12 my-8 lg-mt-0">
            <div className="my-16">
              <Input
                size="lg"
                type="Name"
                label="Name"
                labelPlacement="outside"
                placeholder="Enter your Name"
              />
            </div>
            <div className="my-4">
              <Input
                size="lg"
                isInvalid={isInvalid}
                // color={isInvalid ? "danger" : "success"}
                type="email"
                label="Email"
                labelPlacement="outside"
                placeholder="Enter your email"
                errorMessage={isInvalid && "Please enter a valid email"}
                onValueChange={setValue}
              />
            </div>
            <div className="my-4">
              <Textarea
                label="Message"
                placeholder="Enter your Message"
                // className="max-w-xs"
                labelPlacement="outside"
              />
            </div>

            <CButton content="Send Message"></CButton>
          </div>
        </div>
      </div>
    </section>
  );
}
