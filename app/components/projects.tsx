"use client";
import React, { useState, useEffect } from "react";
import { Accordion, AccordionItem, CardFooter } from "@nextui-org/react";
import Link from "next/link";
import project from "../../public/data/projects.json";
import { Card, CardHeader, CardBody, Image } from "@nextui-org/react";
import { Button } from "@nextui-org/react";
export default function Projects() {
  const [projects, setProjects] = useState(project);

  return (
    <section id="projects">
      <h1 className="text-6xl text-center font-extrabold my-16">Projects </h1>
      <div className="gap-12 grid lg:grid-cols-4 md:gap-6  md:grid-cols-3  justify-center items-center ">
        {projects.map((item, index) => (
          <Card
            shadow="sm"
            isPressable
            className="justify-center items-center h-full  "
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
                <Button className="mx-2">View</Button>
                <Button>Code</Button>
              </div>
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  );
}
