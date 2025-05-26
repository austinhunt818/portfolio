'use client';

export function Profile() {
    return (
        <div className="centered-container flex flex-col gap-4 p-8 bg-gray-100 text-black rounded-lg shadow-lg w-4/5 mx-auto">
            <h1 className="text-4xl font-bold text-center sm:text-left mb-4">
                About Me
            </h1>
            <p className="text-lg text-center sm:text-left">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
        </div>
    );
}