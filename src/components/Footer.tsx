import { FaInstagram } from "react-icons/fa";
import { FiYoutube } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <>
      <div className="gold w-full h-2 mt-20"></div>
      <footer className="mt-auto w-full  py-10 px-4 sm:px-6 lg:px-8 mx-auto  bg-gradient-to-r from-[#023235] via-[#016f63] to-[#023235]">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-10">
          <div className="col-span-1 lg:block">
            <a
              className="flex-none font-semibold text-xl focus:outline-none focus:opacity-80 text-white"
              href="#"
              aria-label="Brand"
            >
              <img src="/AmprioMainNoBg.png" alt="" className="w-52" />
            </a>
            <p className="mt-1 cursor-default text-xs sm:text-sm text-neutral-200 hover:text-neutral-100 focus:text-neutral-100">
              91+9897003003
            </p>
            <p className="mt-3 cursor-default text-xs sm:text-sm text-neutral-200 hover:text-neutral-100 focus:text-neutral-100">
              © 2025 AMPRIO.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-medium uppercase text-neutral-100 cursor-default">
              Pages
            </h4>

            <div className="mt-3 grid space-y-3 text-sm">
              <a
                className="inline-flex items-center gap-x-2 focus:outline-none text-neutral-200 hover:text-neutral-100 focus:text-neutral-100"
                href="#"
              >
                Our World
              </a>

              <a
                className="inline-flex items-center gap-x-2 focus:outline-none text-neutral-200 hover:text-neutral-100 focus:text-neutral-100"
                href="#"
              >
                FAQs
              </a>

              <a
                className="inline-flex items-center gap-x-2 focus:outline-none text-neutral-200 hover:text-neutral-100 focus:text-neutral-100"
                href="#"
              >
                Refunds / Returns Policy
              </a>

              <a
                className="inline-flex items-center gap-x-2 focus:outline-none text-neutral-200 hover:text-neutral-100 focus:text-neutral-100"
                href="#"
              >
                Contact Us
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-sm font-medium uppercase text-neutral-100 cursor-default">
              Follow Us
            </h4>

            <div className="mt-3 grid space-y-3 text-sm">
              <a
                className="inline-flex items-center gap-x-2 focus:outline-none text-neutral-200 hover:text-neutral-100 focus:text-neutral-100"
                href="#"
              >
                <FaInstagram size={16} />
                Instagram
              </a>
              <a
                className="inline-flex items-center gap-x-2 focus:outline-none text-neutral-200 hover:text-neutral-100 focus:text-neutral-100"
                href="#"
              >
                <FiYoutube size={16} />
                Youtube
              </a>
              <a
                className="inline-flex items-center gap-x-2 focus:outline-none text-neutral-200 hover:text-neutral-100 focus:text-neutral-100"
                href="#"
              >
                <FaLinkedin size={16} />
                Linked In
              </a>
              <a
                className="inline-flex items-center gap-x-2 focus:outline-none text-neutral-200 hover:text-neutral-100 focus:text-neutral-100"
                href="#"
              >
                <FaWhatsapp size={16} />
                Whatsapp
              </a>
            </div>
          </div>
        </div>

        <div className="pt-5 mt-5 border-t border-neutral-700">
          <div className="sm:flex sm:justify-between sm:items-center">
            <div className="flex flex-wrap items-center gap-3">
              <div className="space-x-4 text-sm">
                <a
                  className="inline-flex items-center gap-x-2 focus:outline-none text-neutral-200 hover:text-neutral-100 focus:text-neutral-100"
                  href="#"
                >
                  Terms
                </a>
                <a
                  className="inline-flex items-center gap-x-2 focus:outline-none text-neutral-200 hover:text-neutral-100 focus:text-neutral-100"
                  href="#"
                >
                  Privacy
                </a>
                <a
                  className="inline-flex items-center gap-x-2 focus:outline-none text-neutral-200 hover:text-neutral-100 focus:text-neutral-100"
                  href="#"
                >
                  Status
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
