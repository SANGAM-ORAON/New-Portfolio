import React from "react";
import { MapPinHouse, Phone, Mail, User } from "lucide-react";
import { RiArrowLeftLine, RiGithubLine, RiLinkedinFill } from "@remixicon/react";

const Connect = () => {
  return (
    <section id="connect" className="connect-section">

      <div
        id="connect-overlay"
        className="fixed inset-0 bg-black text-white flex flex-col z-50 overflow-hidden"
      >

        {/* Scrollable container */}
        <div className="flex-1 overflow-y-auto overscroll-contain">

          <div className="border-white border-2 m-4 sm:m-6 md:m-10 font-[name]">

            <div className="p-2">
              <RiArrowLeftLine
                onClick={() => {
                  window.location.hash = "";
                }}
                className="size-15 sm:size-20 md:size-30 cursor-pointer text-[#7b2cbf] hover:text-amber-50"
              />
            </div>

            {/* Heading */}
            <div className="text-4xl sm:text-6xl md:text-8xl flex justify-center border-amber-50 border-2 p-4 sm:p-6 md:p-8 text-center text-[#7b2cbf]">
              LET'S CONNECT
            </div>

            {/* TOP GRID */}
            <div className="grid grid-cols-2 text-sm text-center lg:grid-cols-4 w-full">

              <div className="border p-6 flex flex-col justify-between hover:bg-neutral-900">
                <div className="flex justify-between">
                  <div>Name</div><div>→</div>
                </div>
                <div className="flex justify-center py-6">
                  <User size={50} className="text-[#7b2cbf]" />
                </div>
                <div>
                  <p className="font-semibold">SANGAM ORAON</p>
                  <p className="text-gray-400 text-xs mt-4">
                    Proficient in MERN stack development, Tailwind CSS, and UI/UX design.
                  </p>
                </div>
              </div>

              <div className="border p-6 flex flex-col justify-between hover:bg-neutral-900">
                <div className="flex justify-between">
                  <div>Email</div><div>→</div>
                </div>
                <div className="flex justify-center py-6">
                  <Mail size={50} className="text-[#7b2cbf]" />
                </div>
                <div>
                  <p className="break-all">sangamoraon07@gmail.com</p>
                  <p className="text-gray-400 text-xs mt-4">
                    For professional correspondence, kindly reach out via email.
                  </p>
                </div>
              </div>

              <div className="border p-6 flex flex-col justify-between hover:bg-neutral-900">
                <div className="flex justify-between">
                  <div>Phone</div><div>→</div>
                </div>
                <div className="flex justify-center py-6">
                  <Phone size={50} className="text-[#7b2cbf]" />
                </div>
                <div>
                  <p>+91 6287827696</p>
                  <p className="text-gray-400 text-xs mt-4">
                    Call availability is minimal; email remains the primary channel.
                  </p>
                </div>
              </div>

              <div className="border p-6 flex flex-col justify-between hover:bg-neutral-900">
                <div className="flex justify-between">
                  <div>Location</div><div>→</div>
                </div>
                <div className="flex justify-center py-6">
                  <MapPinHouse size={50} className="text-[#7b2cbf]" />
                </div>
                <div>
                  <p>Ranchi, Jharkhand, India</p>
                  <p className="text-gray-400 text-xs mt-4">
                    Ranchi, <br /> Jharkhand - 834001
                  </p>
                </div>
              </div>

            </div>

            {/* BOTTOM SECTION */}
            <div className="flex flex-col md:flex-row w-full">

              <div className="border p-6 w-full md:w-1/2">
                <div className="text-lg font-semibold">SOCIALS</div>

                <div className="mt-6 space-y-3">

                  <p className="flex items-center gap-2">
                    <RiGithubLine className="text-[#7b2cbf]" />
                    <a
                      href="https://github.com/SANGAM-ORAON"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:underline hover:text-[#7b2cbf]"
                    >
                      github.com/SANGAM-ORAON
                    </a>
                  </p>

                  <p className="flex items-center gap-2">
                    <RiLinkedinFill className="text-[#7b2cbf]" />
                    <a
                      href="https://www.linkedin.com/in/sangam-oraon-a0a684309/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:underline hover:text-[#7b2cbf]"
                    >
                      linkedin.com/SANGAM-ORAON
                    </a>
                  </p>

                </div>
              </div>

              <div className="border p-6 w-full md:w-1/2">
                <div className="text-lg font-semibold">RECENTLY ADDED</div>
                <div className="mt-6 text-gray-400 text-sm">
                  New projects and updates will appear here.
                </div>
              </div>

            </div>

          </div>
        </div>
      </div>

    </section>
  );
};

export default Connect;