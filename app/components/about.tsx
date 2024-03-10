import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@nextui-org/react";
export default function About() {
  return (
    <section id="about" style={{ zIndex: 10 }}>
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
            An enthusiastic and results-driven with a strong passion for machine
            learning and Python development, backed by 6 months of hands-on
            experience as a Data Engineer and 6 months of experience as a front
            end developer intern.I also bring versatility with front-end skills
            in ReactJS, JavaScript, TypeScript, and Node.js. My tech
            contributions include 12+ published articles on GeeksforGeeks and a
            first prize-winning article on CodeChef. Academically, I hold a
            silver medal and a certificate of merit in B.Tech IT, along with
            commendable performance in the Graduate Aptitude Test in Engineering
            (GATE). Additionally, I hold a "Sangeet Prabhakar" degree in
            Synthesizer and have served as a Computer Science Subject Matter
            Expert at Chegg. Currently, I contribute to 4PointX Industrial
            Analytics LLP as a Data Engineer, excelling in enhancing code
            quality, mentoring interns,writing API documenation in RST format,
            building and enhancing front end modules using Typescript and
            resolving critical technical issues. In a recent project, I led the
            development of a front-end module from the ground up using
            TypeScript. Additionally, I authored comprehensive API documentation
            in RST format, ensuring clarity and accessibility for fellow
            developers. With a strong foundation in Python, Typescript, and
            various developer tools, I am passionate about machine learning and
            Python.
          </p>
          <div className="text-center">
            <Button color="secondary" className="mt-4 text-l ">
              <Link
                href="/data/JyotiNigam_ResumeT.pdf"
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
