import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faLinkedin,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";
import Logo from "../assets/logo.png";

export default function Footer() {
  return (
    <div className="bg-gray-200 py-8 mx-auto flex justify-center items-center mt-5">
      <div className="mr-5"> 
        <img src={Logo} alt="Logo" width={150} className="ml-2 mr-5" />
      </div>
      <div className="flex gap-x-36 ml-5">
        <div className="w-1/5">
          <h4 className="text-lg font-semibold">Alamat</h4>
          <ul>
            <li>Gg.Rambutan,</li>
            <li>Semarang Kota,</li>
            <li>Indonesia</li>
          </ul>
        </div>
        <div className="w-1/4">
          <h4 className="text-lg font-semibold">Contact</h4>
          <ul>
            <li>
              <strong>Phone:</strong> +6282134188236
            </li>
            <li>
              <strong>Email:</strong> muhamad.nabil20052003@gmail.com
            </li>
          </ul>
        </div>
        <div className="w-1/4">
          <h4 className="text-lg font-semibold">Our Social Media</h4>
          <a
            href="https://instagram.com/biillskiii"
            target="_blank"
            rel="noopener noreferrer"
            className="mr-3"
          >
            <FontAwesomeIcon
              icon={faInstagram}
              className="text-purple-700 text-2xl"
            />
          </a>
          <a
            href="https://www.linkedin.com/in/mohammad-nabiel/"
            target="_blank"
            rel="noopener noreferrer"
            className="mr-3"
          >
            <FontAwesomeIcon
              icon={faLinkedin}
              className="text-gray-600 text-2xl"
            />
          </a>
          <a
            href="https://github.com/biillskiii/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon
              icon={faGithub}
              className="text-gray-600 text-2xl"
            />
          </a>
        </div>
      </div>
    </div>
  );
}
