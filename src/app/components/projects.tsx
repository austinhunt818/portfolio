'use client';

import { useEffect, useState } from "react";

export function Projects() {
    // TODO: refactor to have a more global and abstract way to handle dark mode throughout components
    const [isDarkMode, setIsDarkMode] = useState(false);
    
        useEffect(() => {
            const initialIsDark = document.documentElement.classList.contains('dark');
            setIsDarkMode(initialIsDark);
            if (initialIsDark) {
                console.log("Dark mode is enabled");
            }

            const observer = new MutationObserver(mutations => {
                mutations.forEach(mutation => {
                if (mutation.attributeName === 'class') {
                    const currentIsDark = document.documentElement.classList.contains('dark');
                    setIsDarkMode(currentIsDark);
                }
                });
            });
    
            observer.observe(document.documentElement, {
                attributes: true
            });
    
            return () => observer.disconnect();
            }, []);


    return (
        <div id='projects' className="centered-container flex flex-col gap-4 p-8  dark:text-white text-black items-center rounded-lg w-full mx-auto">
            <h1 className="text-4xl font-bold text-center sm:text-left mb-4">
                My Projects
            </h1>

            {/* TODO: Refactor to individual project components? */}
            {/* Cowhub */}
            <div className="bg-gray-300 dark:bg-gray-500 p-12 rounded-lg shadow-lg mb-8">
                <h2 className="text-4xl font-semibold mb-2 self-center">
                    Cowhub
                </h2>
                <br></br>
                <div className="flex flex-col sm:flex-row gap-14 mb-4 w-full">
                    <img src='logos/flutter.svg' alt='Flutter' title='Flutter' className="h-12 w-12 hover:brightness-150 transition-all"/>
                    <img src='logos/rust.svg' alt='Rust' title='Rust' className="h-12 w-12 hover:brightness-150 transition-all"/>
                    <img src='logos/postgresql.svg' alt='Postgresql' title='Postgresql' className="h-12 w-12 hover:brightness-150 transition-all"/>
                    <img src='logos/docker.svg' alt='Docker' title='Docker' className="h-12 w-12 hover:brightness-150 transition-all"/>             
                </div>
                <div className="flex flex-col sm:flex-row gap-4 mb-4 items-center justify-center">
                    <img src='screenshots/cowhub_owner.png' alt='Cowhub Project Screenshot' className='w-3/5 rounded-lg border-2 border-gray-500 dark:border-gray-300' />
                    {/*TODO: Get a better screenshot of video playback*/}
                    <img src='screenshots/cowhub_video.png' alt='Cowhub Project Screenshot' className='w-1/4 sm:h-auto rounded-lg border-2 border-gray-500 dark:border-gray-300' />
                </div>
                <br></br>
                <p className="text-lg text-center sm:text-left mb-4">
                    Cowhub is a video training platform targeted at the agricultural industry. My two teammates and I worked with a sponsor to build this app for our senior capstone project. Key features include user registration and authentication, organization management for farm owners, course creation for administrators, and video playback for viewing courses. The app is cross platfornm, with the web platformn targeted at farm owners, and the mobile platform targeted at farm workers.
                </p>
                <p className="text-lg text-center sm:text-left mb-4">
                    My main contributions to this project included a majority of the ui design, part of the user registration and login logic, the video playback functionality, and various parts of the course creation and management features.
                </p>
            </div>

            {/* Jingle Composer */}
            <div className="bg-gray-300 dark:bg-gray-500 p-12 rounded-lg shadow-lg mb-8">
                <div className="flex items-center justify-start gap-10 mb-4">
                    <h2 className="text-4xl font-semibold mb-2 self-center">
                        Jingle Composer
                    </h2>
                    <a href="https://github.com/austinhunt818/jingle-composer" className="transition-transform hover:scale-125">
                        <img src={isDarkMode ? "logos/github-mark-white.svg" : "logos/github-mark.svg"} alt="Source Code" className="h-20 w-20" />
                    </a>
                </div>
                
                <br></br>
                <div className="flex flex-col sm:flex-row gap-14 mb-4 w-full">
                    
                    <img src='logos/html.svg' alt='HTML' title='HTML' className="h-12 w-12 hover:brightness-150 transition-all"/>
                    <img src='logos/css.svg' alt='CSS' title='CSS' className="h-12 w-12 hover:brightness-150 transition-all"/>
                    <img src='logos/javascript.svg' alt='JavaScript' title='JavaScript' className="h-12 w-12 hover:brightness-150 transition-all"/>
                    <img src='logos/aws.svg' alt='Amazon Web Services' title='Amazon Web Services' className="h-12 w-12 hover:brightness-150 transition-all"/>
                    
                </div>
                <br></br>
                <div className="flex flex-col sm:flex-row gap-10 mb-4">
                    <img src='screenshots/compose_screenshot.png' alt='Screenshot of composition interface' className='w-3/5 rounded-lg border-2 border-gray-500 dark:border-gray-300' />
                    <div className="w-2/5">
                        <p className="text-lg">
                            Jingle Composer is a web app that allows users to create and save short jingles. I built this app for my final project in my web development class. Being a musician, I wanted to make something interactive and related to music, so I thought a music composition app would be a good fit.
                        </p>
                        <br></br>
                        <p className="text-lg">
                            The app uses an interactive music staff to allow users to pick notes to compose their jingles. The staff is made up of a grid of buttons. Each column in the grid represents a rhythmic unit in the jingle, and each row represents a pitch. 
                        </p>
                    </div>
                </div>
                <br></br>
                <div className="flex flex-col sm:flex-row gap-20 mb-4">
                    <div className="w-2/5">
                        <p className="text-lg">
                            Using AWS&apos;s lambdas and dynamoDB, the app allows for the jingles to be saved, loaded, edited, and deleted. The songs are stored as a string, represented by a sequence of note names or dashes. This persistence allows users to come back and listen to jingles the made in the past, and edit them if they desire.
                        </p>
                        <br ></br>
                        <p className="text-lg">
                            The audio portion of the app is handled by a package I found called <a href='https://github.com/danigb/smplr' className='text-blue-600 dark:text-blue-700 hover:underline'>smplr</a>. This package includes a collection of audio samples to use for the notes, as well as a simple interface for playback. Using the different samples, {/* Make sure to implement this feature before publishing */} the user can choose between different instruments, such as piano, guitar, and saxophone.
                        </p>
                    </div>
                    <img src='screenshots/view-songs_screenshot.png' alt='Screenshot of jingle view and search screen' className='w-1/2 rounded-lg border-2 border-gray-500 dark:border-gray-300' />
                </div>
                <h2 className="text-2xl font-semibold mb-2 self-center">
                    Try a <a href='https://jingle-composer.vercel.app/index.html'>demo</a>!
                </h2>
            </div>

            

        </div>
    );
}