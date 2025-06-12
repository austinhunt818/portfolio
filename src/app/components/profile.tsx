'use client';

export function Profile() {
    return (
        <div id='profile' className="centered-container flex flex-col gap-4 p-8 dark:bg-gray-100 bg-gray-900 dark:text-black text-white rounded-lg shadow-lg w-4/5 mx-auto">
            <h1 className="text-4xl font-bold text-center sm:text-left mb-4">
                About Me
            </h1>
            <p className="text-lg text-center sm:text-left">
                I am a recent college graduate with a passion for software and web development. I am currently seeking a full-time position where I can apply my skills and continue to grow as a developer.
            </p>
            
        </div>
    );
}