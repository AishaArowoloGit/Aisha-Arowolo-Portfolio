import { useState } from "react";
import { FaLinkedin, FaGithub, FaEnvelope, FaWhatsapp, FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

function Contact() {
  const [popup, setPopup] = useState(null);

  const showPopup = (type, message) => {
    setPopup({ type, message });

    setTimeout(() => {
      setPopup(null);
    }, 3000);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const form = e.target;
    const data = new FormData(form);

    const response = await fetch("https://formspree.io/f/mykabvow", {
      method: "POST",
      body: data,
      headers: { Accept: "application/json" },
    });

    if (response.ok) {
      showPopup("success", "Message sent successfully!");
      form.reset();
    } else {
      showPopup("error", "Something went wrong. Try again.");
    }
  };

  return (
    <section id="contact" className="p-8 bg-black text-white scroll-mt-24 pt-10 pb-20 w-full overflow-x-hidden ">

      {/* Popup Modal */}
      {popup && (
        <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50">
          <div
            className={`px-6 py-4 rounded-lg shadow-lg text-white text-center animate-fade
            ${popup.type === "success" ? "bg-green-600" : "bg-red-600"}`}
          >
            {popup.message}
          </div>
        </div>
      )}
      
        {/* Text/Social Links and Form Columns */}
      <div className="grid md:grid-cols-3 gap-12 px-2">

        {/* Lets Connect Text and Social Links */}
        <div className="md:col-span-1 w-full">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold mb-4 text-white">
            LET'S CONNECT
          </h2>

          <p className="text-base md:text-md lg:text-lg text-gray-300 leading-relaxed">
            Feel free to reach out. I would love to hear from you to say hello, ask questions and explore new
            research or collaboration opportunities.
          </p>


          {/* Social Links */}
          <div className="mt-10 flex flex-wrap justify-start gap-6 text-3xl text-green-400">
            <a href="mailto:arowoshola@gmail.com" target="_blank" rel="noopener noreferrer" className="hover:text-green-500 transition">
              <FaEnvelope />
            </a>

            <a href="https://www.linkedin.com/in/aisha-arowolo-316752221/" target="_blank" rel="noopener noreferrer" className="hover:text-green-500 transition">
              <FaLinkedin />
            </a>

            <a href="https://github.com/AishaArowoloGit" target="_blank" rel="noopener noreferrer" className="hover:text-green-500 transition">
              <FaGithub />
            </a>

            <a href="https://wa.me/2347032454696" target="_blank" rel="noopener noreferrer" className="hover:text-green-500 transition">
              <FaWhatsapp />
            </a>

            <a
            href="https://facebook.com/YOUR_USERNAME" target="_blank" rel="noopener noreferrer" className="hover:text-green-500 transition">
            <FaFacebook />
            </a>

            <a
              href="https://twitter.com/YOUR_USERNAME" target="_blank" rel="noopener noreferrer" className="hover:text-green-500 transition">
              <FaXTwitter />
            </a>
          </div>  

        </div>

        {/* Contact Form */}
        <form onSubmit={handleSubmit} className="md:col-span-2 max-w-2xl space-y-6">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
            className="w-full border border-gray-600 rounded-md p-3 bg-black text-white focus:border-green-500"
          />

          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
            className="w-full border border-gray-600 rounded-md p-3 bg-black text-white focus:border-green-500"
          />

          <input
            type="text"
            name="subject"
            placeholder="Subject"
            required
            className="w-full border border-gray-600 rounded-md p-3 bg-black text-white focus:border-green-500"
          />

          <textarea
            name="message"
            placeholder="Your Message"
            required
            className="w-full border border-gray-600 rounded-md p-3 bg-black text-white h-32 focus:border-green-500"
          ></textarea>

          <button
            type="submit"
            className="bg-green-600 text-white px-6 py-3 rounded-md hover:bg-green-500 w-full transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
