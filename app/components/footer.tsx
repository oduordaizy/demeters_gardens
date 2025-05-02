import React from "react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#1d4d4f] text-white py-8 mt-12">
      <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
        <div className="text-center md:text-left mb-4 md:mb-0">
          <h2 className="text-xl font-bold text-white">Demeters Gardens</h2>
          <p className="text-sm">© {new Date().getFullYear()} All rights reserved.</p>
        </div>

        <div className="flex space-x-6 text-xl">
          <a href="https://github.com/oduordaizy" target="_blank" rel="noopener noreferrer">
            <FaGithub className="hover:text-[#a2c11c]" />
          </a>
          <a href="https://linkedin.com/in/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="hover:text-[#a2c11c]" />
          </a>
          <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer">
            <FaTwitter className="hover:text-[#a2c11c]" />
          </a>

        </div>
      </div>
    </footer>
  );
};

export default Footer;
