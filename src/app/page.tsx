import { LikeButton } from "./like-button";
import { Profile } from "./profile";
import { Socials } from "./socials";

export default function Home() {

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 font-fira-code">
        <h1 className="text-6xl font-bold text-center">
          Hi, I'm <br></br>Austin Hunt
        </h1>
        <Socials />
        <Profile />
        {/* <p className="text-lg text-center sm:text-left">
          Here's an interactive like button to show that I can code:
        </p>
        <LikeButton /> */}
      </main>
    </div>
  );
}




