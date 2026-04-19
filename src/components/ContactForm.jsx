import React from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useForm, ValidationError } from "@formspree/react";

function ContactForm() {
  const [state, handleSubmit] = useForm("xgorazjg");

  useGSAP(() => {
    if (state.succeeded) {
  gsap.to("#mail", {
    x: window.innerWidth + 100,
    duration: 8,
    ease: "power2.out",

    onUpdate: function () {
      const progress = this.progress();

      // very small micro movement (barely visible)
      const y = Math.sin(progress * Math.PI * 2) * 5;
      const rotation = Math.sin(progress * Math.PI) * 3;

      gsap.set("#rocket", { y, rotation });
    },
  });
}
  }, [state.succeeded]);

  if (state.succeeded) {
    return (
      <p className="text-gray-500 font-mono flex items-center gap-2">
        Thanks! Your message has been sent.
        <span id="mail" className="inline-block will-change-transform">
          <img className="w-10 h-10" src="/images/gmail.png" alt="mail_png" />
        </span>
      </p>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="block mb-1" htmlFor="email">Email</label>
        <input
          id="email"
          type="email"
          name="email"
          className="w-full p-3 rounded bg-white/10 text-white border border-white/20"
          required
        />
        <ValidationError prefix="Email" field="email" errors={state.errors} />
      </div>

      <div>
        <label className="block mb-1" htmlFor="message">Message</label>
        <textarea
          id="message"
          name="message"
          rows="5"
          className="w-full p-3 rounded bg-white/10 text-white border border-white/20"
          required
        />
        <ValidationError prefix="Message" field="message" errors={state.errors} />
      </div>

      <button
        type="submit"
        disabled={state.submitting}
        className="bg-[#3c096c] text-[#faf9f9] px-6 py-2 rounded-4xl font-semibold hover:scale-105 hover:bg-black hover:border-gray-400 hover:border"
      >
        Send
      </button>
    </form>
  );
}

export default ContactForm;
