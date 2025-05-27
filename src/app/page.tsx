import { LikeButton } from "./components/like-button";
import { Projects } from "./components/projects";
import { NavDrawer } from "./components/navDrawer";
import { Profile } from "./components/profile";
import { Socials } from "./components/socials";

export default function Home() {

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)] dark:bg-gray-900 dark:text-white bg-gray-100 text-black">
      <main className="flex flex-col gap-8 row-start-2 font-fira-code">
        <h1 className="text-6xl font-bold text-center">
          Hi, I'm <br></br>Austin Hunt
        </h1>
        <Socials />
        <Profile />
        <br></br>
        <Projects />

        <NavDrawer />
        {/* <p className="text-lg text-center sm:text-left">
          Here's an interactive like button to show that I can code:
        </p>
        <LikeButton /> */}
      </main>
    </div>
  );
}




