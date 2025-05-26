
'use client';

import { useEffect, useState } from "react";

export function Socials(){
    const [isDarkMode, setIsDarkMode] = useState(() => {
        if(document.documentElement.classList.contains('dark')) {
            console.log("Dark mode is enabled");
            return true; // Dark mode is enabled
        }
    });

    useEffect(() => {
        const observer = new MutationObserver(mutations => {
            mutations.forEach(mutation => {
            if (mutation.attributeName === 'class') {
                setIsDarkMode(document.documentElement.classList.contains('dark'));
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
            <a href='/AustinHuntResume.pdf' className={isDarkMode ? "transition-transform hover:scale-110 dark-resume-button" :"transition-transform hover:scale-110 resume-button"} target="_blank" rel="noopener noreferrer">
                Resume
            </a>
            <a href="https://github.com/austinhunt818" className="transition-transform hover:scale-125">
                <img src={isDarkMode ? "/github-mark-white.svg" : "/github-mark.svg"} alt="GitHub" className="h-12 w-12" />
            </a>
            <a href="https://www.linkedin.com/in/austin-hunt-0183342b4/" className="transition-transform hover:scale-125">
                <img src="/linkedin.svg" alt="LinkedIn" className="h-12 w-12" /> 
            </a>
        </div>
    );
}