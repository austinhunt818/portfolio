export function Socials(){
    return(
        <div className="flex gap-10 justify-center items-center spacer-bottom">
            <a href='/AustinHuntResume.pdf' className="transition-transform hover:scale-110 resume-button" target="_blank" rel="noopener noreferrer">
                Resume
            </a>
            <a href="https://github.com/austinhunt818" className="transition-transform hover:scale-125">
                <img src="/github-mark-white.svg" alt="GitHub" className="h-12 w-12" />
            </a>
            <a href="https://www.linkedin.com/in/austin-hunt-0183342b4/" className="transition-transform hover:scale-125">
                <img src="/linkedin.svg" alt="LinkedIn" className="h-12 w-12" /> 
            </a>
        </div>
    );
}