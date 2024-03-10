import React from "react";
import Typewriter from "typewriter-effect";
import { FaHashnode } from "react-icons/fa6";
import Link from "next/link";
import Image from "next/image";

import { FiGithub, FiLinkedin, FiInstagram } from "react-icons/fi";
export default function Intro() {
  return (
    <>
      <section id="home particles-js" style={{ zIndex: 10 }}>
        <div className="grid grid-cols-1 lg:grid-cols-12  my-4 lg:my-16">
          <div className="col-span-7 place-self-center">
            <h1 className="text-4xl lg:text-6xl  mb-4 font-bold ">Hello, </h1>
            <h1 className="mb-2 text-4xl lg:text-6xl  font-bold">
              I'm Jyoti Nigam
            </h1>
            <h4 className="text-lg lg:text-2xl">
              I am a
              <Typewriter
                options={{
                  strings: [
                    "Front End Developer",
                    "Data Engineer",
                    "Python Developer",
                  ],
                  autoStart: true,
                  loop: true,
                }}
              />
            </h4>
            <div className="socials flex flex-row gap-4 my-4">
              <Link href="https://github.com/phoenix0706">
                <FiGithub />
              </Link>
              <Link href="https://www.linkedin.com/in/jyotinigam-phoenix/">
                {" "}
                <FiLinkedin />
              </Link>
              <Link href="https://phoenixwrites.hashnode.dev/">
                {" "}
                <FaHashnode />
              </Link>
            </div>
          </div>
          {/* </Skeleton> */}
          <div className="col-span-5 place-self-center mt-4 lg:mt-0">
            <div className="rounded-full w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative ">
              <Image
                src="/images/intro.png"
                className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 rounded-full"
                alt="Intro Image"
                width={300}
                height={200}
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
