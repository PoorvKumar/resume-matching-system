import React from 'react'
import { FaGithub } from 'react-icons/fa';

const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4 flex items-center justify-between">
      <div className="flex items-center">
        <span className="text-white text-2xl font-bold">Poorv Kumar, S20210010178</span>
      </div>
      <div className="flex items-center">
        <a
          href="https://github.com/your-github-profile"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white flex gap-2"
        >
          <FaGithub className="text-2xl ml-4" /> Github
        </a>
      </div>
    </nav>
  );
};

export default Navbar