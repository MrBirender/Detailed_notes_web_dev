import React from "react";

const Footer = () => {
  return (
    <footer className="bg-orange-700 text-gray-100 py-6">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        <div className="text-sm md:text-base">
          © {new Date().getFullYear()} MyBrand. All rights reserved.
        </div>
        <ul className="flex space-x-4 mt-4 md:mt-0">
          <li>
            <a
              href="#privacy"
              className="hover:text-white transition duration-200"
            >
              Privacy Policy
            </a>
          </li>
          <li>
            <a
              href="#terms"
              className="hover:text-white transition duration-200"
            >
              Terms of Service
            </a>
          </li>
          <li>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition duration-200"
            >
              LinkedIn
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
