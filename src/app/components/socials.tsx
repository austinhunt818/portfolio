'use client';

import { useEffect, useState } from "react";

export function Socials(){
    const [isDarkMode, setIsDarkMode] = useState(false); // Initialize with a default value

    useEffect(() => {
        // Set initial state based on document class
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
    

    return(
        <div className="flex gap-10 justify-center items-center spacer-bottom ">
            <a
                href='/AustinHuntResume.pdf'
                className="transition-transform hover:scale-110 resume-button"
                target="_blank"
                rel="noopener noreferrer"
            >
                Resume
            </a>
            <a href="https://github.com/austinhunt818" className="transition-transform hover:scale-125">
                <img src={isDarkMode ? "logos/github-mark-white.svg" : "logos/github-mark.svg"} alt="GitHub" className="h-12 w-12" />
            </a>
            <a href="https://www.linkedin.com/in/austin-hunt-0183342b4/" className="transition-transform hover:scale-125">
                <img src="logos/linkedin.svg" alt="LinkedIn" className="h-12 w-12" />
            </a>
        </div>
    );
}
