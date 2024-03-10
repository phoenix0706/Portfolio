import React, { useState } from "react";
import projects from "../../public/data/projects.json";
import {
  Card,
  CardHeader,
  CardBody,
  Image,
  CardFooter,
} from "@nextui-org/react";

import CButton from "./button";

interface Projectdetails {
  name: string;
  desc: string;
  category: string;
  image: string;
  links: {
    view: string;
    code: string;
  };
}
export default function Projects() {
  const handleClick = (url: string) => {
    if (url != "") {
      window.open(url, "_blank");
    }
  };

  const renderProjects = () => {
    return projects.map((item: Projectdetails, index) => (
      <Card
        shadow="sm"
        isPressable
        className="justify-center items-center h-full  "
        key={index}
      >
        <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
          <h4 className="font-bold text-large">{item.name}</h4>
        </CardHeader>
        <CardBody
          className="flex justify-center items-center    "
          style={{ overflow: "hidden" }}
        >
          <Image
            alt="Card background"
            className="object-cover rounded-xl"
            src={item.image}
            width={270}
          />
        </CardBody>
        <CardFooter className="text-sm flex flex-col  ">
          <p className="text-justify ">{item.desc}</p>
          <div className="flex flex-row justify-center items-center m-2">
            <CButton
              className="mx-2"
              onClick={() => handleClick(item.links.view)}
              color="default"
            >
              {" "}
              View{" "}
            </CButton>
            <CButton
              className="mx-2"
              onClick={() => handleClick(item.links.code)}
              color="default"
            >
              {" "}
              Code{" "}
            </CButton>
          </div>
        </CardFooter>
      </Card>
    ));
  };

  return (
    <section id="projects" style={{ zIndex: 10 }}>
      <h1 className="text-6xl text-center font-extrabold my-16">Projects </h1>
      <div className="gap-12 grid lg:grid-cols-4 md:gap-6  md:grid-cols-3  justify-center items-center ">
        {renderProjects()}
      </div>
    </section>
  );
}
