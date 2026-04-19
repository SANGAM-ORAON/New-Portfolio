import Resume from '../assets/resume.pdf'
import ContactForm from "./ContactForm";

const Contact = () => {
  return (
    <>
      <section id="contact">
        <h2 className="text-5xl sm:text-3xl md:text-9xl font-semibold font-[naam] h-auto w-auto flex justify-center pt-20 hover:line-through">
          CONTACT
        </h2>

        {/* ONLY CHANGE: removed min-h-screen */}
        <div className="bg-black text-white px-4 py-10 md:py-14 lg:py-16 flex justify-center">
          <div className="w-full max-w-4xl">

            {/* Intro */}
            <p className="text-gray-200 leading-relaxed mb-8 max-w-2xl">
              Feel free to reach out for collaborations, project opportunities, or just to say hello!
              I'm always open to connecting and discussing new ideas.
            </p>

            {/* Contact Cards */}
            <div className="grid gap-5 md:grid-cols-2 mb-10">

              {/* Email */}
              <div className="bg-white/10 p-5 rounded-lg border border-white/10 backdrop-blur-sm">
                <h3 className="text-lg font-semibold text-[#7b2cbf] mb-1">Email</h3>
                <p className="text-gray-200">sangamoraon07@gmail.com</p>
              </div>

              {/* GitHub */}
              <div className="bg-white/10 p-5 rounded-lg border border-white/10 backdrop-blur-sm">
                <h3 className="text-lg font-semibold text-[#7b2cbf] mb-1">GitHub</h3>
                <a
                  href="https://github.com/SANGAM-ORAON/"
                  target="_blank"
                  className="text-gray-200 underline hover:text-[#7b2cbf] transition"
                >
                  github.com/SANGAM-ORAON
                </a>
              </div>

              {/* LinkedIn */}
              <div className="bg-white/10 p-5 rounded-lg border border-white/10 backdrop-blur-sm">
                <h3 className="text-lg font-semibold text-[#7b2cbf] mb-1">LinkedIn</h3>
                <a
                  href="https://www.linkedin.com/in/sangam-oraon-a0a684309/"
                  target="_blank"
                  className="text-gray-200 underline hover:text-[#7b2cbf] transition"
                >
                  linkedin.com/SANGAM-ORAON
                </a>
              </div>

              {/* Location */}
              <div className="bg-white/10 p-5 rounded-lg border border-white/10 backdrop-blur-sm">
                <h3 className="text-lg font-semibold text-[#7b2cbf] mb-1">Location</h3>
                <p className="text-gray-200">Jharkhand, India</p>
              </div>

            </div>

            {/* Resume Button */}
            <div className="mb-10">
              <a
                href={Resume}
                download
                className="inline-block bg-[#3c096c] text-[#faf9f9] px-6 py-2 rounded-4xl font-semibold hover:scale-105 hover:bg-black hover:border-gray-400 hover:border transition"
              >
                Download Resume
              </a>
            </div>

            {/* Contact Form */}
            <h2 className="text-4xl font-bold text-[#7b2cbf] mb-8">
              Send a Message
            </h2>
            <ContactForm />

          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
