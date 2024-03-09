import React from "react";
import Image from "next/image";
import CButton from "./button";
import Link from "next/link";
import { Button } from "@nextui-org/react";
export default function About() {
  return (
    <section id="about">
      <h1 className="text-6xl text-center font-extrabold my-16">About </h1>
      <div className="grid grid-cols-1 lg:grid-cols-12  my-4 lg:my-16 ">
        <div className="col-span-6 place-self-center mt-4 lg:mt-0">
          <div className="rounded-full w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative ">
            <Image
              src="/images/about.png"
              className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 rounded-lg"
              alt="Intro Image"
              width={300}
              height={200}
            />
          </div>
        </div>
        <div className="col-span-6 place-self-center  my-8 lg-mt-0">
          <p className="text-justify">
            An enthusiastic and results-driven professional with a strong
            passion for machine learning and Python development, backed by 6
            months of hands-on experience as a Data Engineer. Known for my
            insightful contributions to the tech community through 12+ published
            articles on GeeksforGeeks and a first prize-winning article on
            CodeChef. My academic achievements include a silver medal and a
            certificate of merit in B.Tech IT, as well as a commendable
            performance in the Graduate Aptitude Test in Engineering (GATE).
            Additionally, I hold a ”Sangeet Prabhakar” degree in Synthesizer and
            have served as a Computer Science Subject Matter Expert at Chegg.
            Currently, I am contributing to 4PointX Industrial Analytics LLP as
            a Data Engineer, where I have excelled in enhancing code quality,
            mentoring interns, and resolving critical technical issues. I have a
            strong foundation in Python, Typescript, and a wide range of
            developer tools and frameworks. Eager to leverage my skills and
            knowledge in machine learning and Python to excel in challenging
            roles and make a significant impact
          </p>
          <div className="text-center">
            <Button color="secondary" className="mt-4 text-l ">
              <Link
                href="/pdfs/JyotiNigam_ResumeT.pdf"
                target="_blank"
                download
              >
                Download Resume
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}