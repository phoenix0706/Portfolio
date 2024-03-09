import CNavbar from "./components/navbar";
import { Providers } from "./providers";
import { ThemeSwitcher } from "./components/ThemeSwitcher";
import Intro from "./components/home";
import About from "./components/about";
import CTimeline from "./components/timeline";
import Skills from "./components/skills";
import Projects from "./components/projects";
import Contact from "./components/Contact";
export default function Home() {
  return (
    <Providers>
      <CNavbar></CNavbar>
      <main className="flex min-h-screen flex-col container mx-auto py-4 px-12 ">
        <Intro></Intro>
        <About></About>
        <Skills></Skills>
        <CTimeline></CTimeline>
        <Projects></Projects>
        <Contact></Contact>
      </main>
    </Providers>
  );
}
