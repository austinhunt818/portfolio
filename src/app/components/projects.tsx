'use client';

export function Projects() {
    return (
        <div id='projects' className="centered-container flex flex-col gap-4 p-8  dark:text-white text-black items-center rounded-lg w-full mx-auto">
            <h1 className="text-4xl font-bold text-center sm:text-left mb-4">
                My Projects
            </h1>

            {/* TODO: Refactor to individual project components? */}
            {/* Cowhub */}
            <div className="bg-gray-300 dark:bg-gray-500 p-12 rounded-lg shadow-lg mb-8">
                <div className="flex flex-col sm:flex-row gap-14 mb-4 w-full">
                    <h2 className="text-3xl font-semibold mb-2 self-center">
                        Cowhub
                    </h2>
                    <img src='/flutter.svg' alt='Flutter' title='Flutter' className="h-12 w-12 hover:brightness-150 transition-all"/>
                    <img src='/rust.svg' alt='Rust' title='Rust' className="h-12 w-12 hover:brightness-150 transition-all"/>
                    <img src='/postgresql.svg' alt='Postgresql' title='Postgresql' className="h-12 w-12 hover:brightness-150 transition-all"/>
                    <img src='/docker.svg' alt='Docker' title='Docker' className="h-12 w-12 hover:brightness-150 transition-all"/>
                    <img src='/cloudflare.svg' alt='Cloudflare' title='Cloudflare' className="h-12 w-12 hover:brightness-150 transition-all"/>
                </div>
                <div className="flex flex-col sm:flex-row gap-4 mb-4">
                    <img src='/cowhub_owner.png' alt='Cowhub Project Screenshot' className='w-3/4 rounded-lg border-2 border-gray-500 dark:border-gray-300' />
                    {/*TODO: Get a better screenshot of video playback*/}
                    <img src='/cowhub_video.png' alt='Cowhub Project Screenshot' className='w-1/4 sm:h-auto rounded-lg border-2 border-gray-500 dark:border-gray-300' />
                </div>
                <br></br>
                <p className="text-lg text-center sm:text-left mb-4">
                    Cowhub is a video training platform targeted at the agricultural industry. My two teammates and I worked with a sponsor to build this app for our senior capstone project. Key features include user registration and authentication, organization management for farm owners, course creation for administrators, and video playback for viewing courses. The app is cross platfornm, with the web platformn targeted at farm owners, and the mobile platform targeted at farm workers.
                </p>
                <p className="text-lg text-center sm:text-left mb-4">
                    My main contributions to this project included a majority of the ui design, part of the user registration and login logic, the video playback functionality, and various parts of the course creation and management features.
                </p>
            </div>

            

        </div>
    );
}