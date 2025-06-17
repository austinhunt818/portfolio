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
            <p className="text-lg text-center sm:text-left">
                In addition to software development, I also enjoy music. I play many intstruments, but by far the most notable is saxophone. I have gotten to perform for thousands of people with the Blue Thunder Marching Band at Boise State.
            </p>
            <div className="flex justify-center">
                <img
                    src="/images/btmb.jpg"
                    alt="Austin Hunt"
                    width={350}
                    className=" border-2 border-gray-500 dark:border-gray-800"
                />
                <img
                    src="/images/sax.jpg"
                    alt="Austin Hunt with Saxophone"
                    width={550}
                    className=" border-2 border-gray-500 dark:border-gray-800 ml-4"
                />
            </div>
            <p className="text-lg text-center sm:text-left">
                I love to try to combine my passions for software and music, as demonstrated by my Jingle Composer project.
            </p>
            
            
        </div>
    );
}