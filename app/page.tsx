"use client";
import CNavbar from "./components/navbar";
import { Providers } from "./providers";
import Intro from "./components/home";
import About from "./components/about";
import CTimeline from "./components/timeline";
import Skills from "./components/skills";
import Projects from "./components/projects";
import Contact from "./components/Contact";
import Blogs from "./components/blogs";
import { initParticlesEngine } from "@tsparticles/react";
import { loadFull } from "tsparticles";
import { Engine } from "@tsparticles/engine";
import { useEffect, useState } from "react";
import ParticlesComponent from "./components/particles";

export default function Home() {
  const [init, setInit] = useState(false);
  useEffect(() => {
    initParticlesEngine(async (engine: Engine) => {
      await loadFull(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);
  return (
    <Providers>
      <CNavbar></CNavbar>
      <main className="flex min-h-screen flex-col container mx-auto py-4 px-12 ">
        <ParticlesComponent id="tsparticles" done={init} />
        <Intro></Intro>
        <About></About>
        <Skills></Skills>
        <CTimeline></CTimeline>
        <Projects></Projects>
        <Blogs></Blogs>

        <Contact></Contact>
      </main>
    </Providers>
  );
}
