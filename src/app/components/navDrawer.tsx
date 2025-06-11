'use client';

import React, { useState, useEffect } from 'react';

// Main App component that renders the navigation drawer
export function NavDrawer() {
  // State to manage the open/closed status of the navigation drawer
  const [isOpen, setIsOpen] = useState(false);
  // State to manage the current theme mode (true for dark, false for light)
  const [isDarkMode, setIsDarkMode] = useState(false); // Default to false, will be updated client-side

  // useEffect hook to initialize dark mode from localStorage or system preference
  // and to apply the dark mode class to the HTML element
  // and save the preference to local storage whenever isDarkMode changes.
  useEffect(() => {
    // Initialize dark mode from local storage or default to system preference
    const savedMode = localStorage.getItem('isDarkMode');
    if (savedMode !== null) {
      setIsDarkMode(JSON.parse(savedMode));
    } else if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setIsDarkMode(true);
    }
  }, []); // Empty dependency array: runs only once on mount

  // useEffect hook to apply the dark mode class to the HTML element
  // and save the preference to local storage whenever isDarkMode changes.
  useEffect(() => {
    const html = document.documentElement;
    if (isDarkMode) {
      html.classList.add('dark'); // Add 'dark' class for dark mode
    } else {
      html.classList.remove('dark'); // Remove 'dark' class for light mode
    }
    // Save the current dark mode preference to local storage
    // Ensure this only runs client-side where localStorage is available
    if (typeof window !== 'undefined') {
      localStorage.setItem('isDarkMode', JSON.stringify(isDarkMode));
    }
  }, [isDarkMode]); // Dependency array: runs when isDarkMode changes

  // Function to open the drawer
  const openDrawer = () => {
    setIsOpen(true);
  };

  // Function to close the drawer
  const closeDrawer = () => {
    setIsOpen(false);
  };

  // Function to toggle between light and dark mode
  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  // Calculate the pixel value for peeking: drawer width (w-64 = 256px) minus the peek amount (e.g., 8px)
  // This value will be used in the inline style for transform
  const peekAmountPx = 16; // How many pixels of the drawer should be visible when closed
  const drawerWidthPx = 256; // w-64 is 16rem = 256px
  const closedTranslateX = drawerWidthPx - peekAmountPx;

  return (
    <>
      {/* Overlay for when the drawer is open, to close it on click outside */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={closeDrawer} // Closes the drawer when clicking the overlay
          aria-hidden="true" // Hides the overlay from assistive technologies when drawer is closed
        ></div>
      )}

      {/* Navigation Drawer - Now also acts as the peeking element and hover trigger */}
      <nav
        id="nav-drawer" // ID for accessibility linking
        className={`fixed top-0 right-0 h-full w-64 bg-gray-400 dark:bg-gray-800 shadow-xl z-50 transform transition-transform duration-300 ease-in-out rounded-l-lg`}
        style={{ transform: `translateX(${isOpen ? 0 : closedTranslateX}px)` }} // Controls slide in/out animation using inline style
        onMouseEnter={openDrawer} // Opens the drawer when mouse enters the peeking part
        onMouseLeave={closeDrawer} // Closes the drawer when mouse leaves it
        aria-label="Main navigation" // Accessibility label for the navigation
      >
        <div className="p-6 flex flex-col h-full">
          {/* Close button for the drawer - still useful for explicit closing */}
          <button
            onClick={closeDrawer}
            className="self-end p-2 mb-4 rounded-full text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-300 transition duration-300 ease-in-out"
            aria-label="Close navigation drawer"
          >
            {/* X icon for the close button */}
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          </button>

          {/* Navigation links */}
          <ul className="flex-grow space-y-4">
            <li>
              <a
                className="block p-3 rounded-md text-gray-800 dark:text-gray-200 hover:bg-blue-100 dark:hover:bg-blue-900 transition duration-200 ease-in-out text-lg font-medium"
                onClick={() => {
                  closeDrawer();
                  const element = document.getElementById('profile');
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
              >
                Profile
              </a>
            </li>
            <li>
                <a
                className="block p-3 rounded-md text-gray-800 dark:text-gray-200 hover:bg-blue-100 dark:hover:bg-blue-900 transition duration-200 ease-in-out text-lg font-medium"
                onClick={() => {
                  closeDrawer();
                  const element = document.getElementById('projects');
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                >
                Projects
                </a>
            </li>
          </ul>

          {/* Dark Mode Toggle */}
          <div className="mt-8 pt-4 border-t border-gray-200 dark:border-gray-700 flex items-center justify-between">
            <span className="text-gray-800 dark:text-gray-200 text-lg font-medium">Dark Mode</span>
            <button
              onClick={toggleDarkMode}
              className={`relative inline-flex h-7 w-14 items-center rounded-full transition-colors duration-300 ease-in-out focus:outline-none focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-800
                ${isDarkMode ? 'bg-blue-600' : 'bg-gray-300'}`}
              aria-label="Toggle dark mode"
            >
              <span
                className={`inline-block h-5 w-5 transform rounded-full bg-white transition-transform duration-300 ease-in-out
                  ${isDarkMode ? 'translate-x-7' : 'translate-x-1'}`}
              ></span>
            </button>
          </div>
        </div>
      </nav>
    </>
  );
}
