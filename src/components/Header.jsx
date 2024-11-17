import { useState } from "react";
import Link from "next/link";
import { ButtonBorder, ButtonFill } from "./partials";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-prime font-sora">
      <div className="flex flex-col lg:flex-row">
        <div className="flex items-center justify-between px-4 lg:px-8 py-4 lg:py-0 border-b lg:border-b-0">
          <div>
            <Link href={"/"}>
              <a className="uppercase font-semibold text-white text-xl">
                AirAware
              </a>
            </Link>
          </div>
          <div>
            <button
              className="focus:outline-none text-white block lg:hidden"
              onClick={() => setIsOpen(!isOpen)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  className={!isOpen ? "block" : "hidden"}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
                <path
                  className={isOpen ? "block" : "hidden"}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>

        <div
          className={`${
            isOpen ? "block" : "hidden"
          } lg:flex flex-col lg:flex-row justify-end w-full`}
        >
          <div className="flex flex-col items-center justify-center lg:flex-row px-4">
            <Link href={"/"}>
              <a className="block px-4 py-2 lg:py-5 text-white hover:text-teal-300">
                Home
              </a>
            </Link>
            <Link href={"/map"}>
              <a className="block px-4 py-2 lg:py-5 text-white hover:text-teal-300">
                Mapa
              </a>
            </Link>
            <Link href={"/device"}>
              <a className="block px-4 py-2 lg:py-5 text-white hover:text-teal-300">
                Dispositivos
              </a>
            </Link>
            <ButtonFill title={"Iniciar Sesión"}></ButtonFill>
          </div>
        </div>
      </div>
    </div>
  );
}
