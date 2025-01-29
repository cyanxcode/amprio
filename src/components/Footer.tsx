import { FaInstagram } from "react-icons/fa";
import { FiYoutube } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import Link from "next/link";

export default function Footer() {
  return (
    <>
      <div className="gold w-full h-2 mt-20"></div>
      <footer className=" w-full  py-10 px-4 sm:px-6 lg:px-8 mx-auto  bg-gradient-to-r from-[#023235] via-[#016f63] to-[#023235]">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-10">
          <div className="col-span-1 lg:block">
            <Link
              className="flex-none font-semibold text-xl focus:outline-none focus:opacity-80 text-white"
              href="#"
              aria-label="Brand"
            >
              <img src="/AmprioMainNoBg.png" alt="" className="w-52" />
            </Link>
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
              <Link
                className="inline-flex items-center gap-x-2 focus:outline-none text-neutral-200 hover:text-neutral-100 focus:text-neutral-100"
                href="/OurWorld"
              >
                Our World
              </Link>

              <Link
                className="inline-flex items-center gap-x-2 focus:outline-none text-neutral-200 hover:text-neutral-100 focus:text-neutral-100"
                href="/FAQs"
              >
                FAQs
              </Link>

              <Link
                className="inline-flex items-center gap-x-2 focus:outline-none text-neutral-200 hover:text-neutral-100 focus:text-neutral-100"
                target="_blank"
                href="https://wa.me/919350471371"
              >
                Contact Us
              </Link>
            </div>
          </div>

          <div>
            <h4 className="text-sm font-medium uppercase text-neutral-100 cursor-default">
              Follow Us
            </h4>

            <div className="mt-3 grid space-y-3 text-sm">
              <Link
                className="inline-flex items-center gap-x-2 focus:outline-none text-neutral-200 hover:text-neutral-100 focus:text-neutral-100"
                target="_blank"
                href="https://www.instagram.com/theamprio"
              >
                <FaInstagram size={16} />
                Instagram
              </Link>
              <Link
                className="inline-flex items-center gap-x-2 focus:outline-none text-neutral-200 hover:text-neutral-100 focus:text-neutral-100"
                target="_blank"
                href="https://www.youtube.com/@futurebrighthai"
              >
                <FiYoutube size={16} />
                Youtube
              </Link>
              <Link
                className="inline-flex items-center gap-x-2 focus:outline-none text-neutral-200 hover:text-neutral-100 focus:text-neutral-100"
                target="_blank"
                href="https://www.linkedin.com/company/amprio"
              >
                <FaLinkedin size={16} />
                Linked In
              </Link>
              <Link
                className="inline-flex items-center gap-x-2 focus:outline-none text-neutral-200 hover:text-neutral-100 focus:text-neutral-100"
                target="_blank"
                href="https://wa.me/919350471371"
              >
                <FaWhatsapp size={16} />
                Whatsapp
              </Link>
            </div>
          </div>
        </div>

        <div className="pt-5 mt-5 border-t border-neutral-700">
          <div className="sm:flex sm:justify-between sm:items-center">
            <div className="flex flex-wrap items-center gap-3">
              <div className="space-x-4 text-sm">
                <Link
                  className="inline-flex items-center gap-x-2 focus:outline-none text-neutral-200 hover:text-neutral-100 focus:text-neutral-100"
                  target="_blank"
                  href="https://maps.app.goo.gl/2nTFknz4fJdmUwku6"
                >
                  Map: Ghitorni, New Delhi, Delhi 110030
                </Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
