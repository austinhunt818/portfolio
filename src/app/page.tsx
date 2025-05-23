import { LikeButton } from "./like-button";
import { Socials } from "./socials";

export default function Home() {

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <h1 className="text-4xl font-bold text-center sm:text-left">
          Austin Hunt
        </h1>
        <Socials />
        <p className="text-lg text-center sm:text-left">
          I am a software engineer with a passion for building web applications. I love to learn new technologies and improve my skills. AI generated this text, but I am a real person. I promise!
        </p>
        <p className="text-lg text-center sm:text-left">
          Here's an interactive like button to show that I can code:
        </p>
        <LikeButton />
      </main>
    </div>
  );
}




