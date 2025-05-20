import React from 'react';

const Contact = () => {
  return (
    <div className='bg-[#e9f1ff] min-h-screen flex items-center justify-center'>
      <div className='bg-white rounded-2xl shadow-md p-10 w-full max-w-xl'>
        <h2 className='font-bold text-3xl text-blue-900 text-center mb-6'>Contact</h2>
        <p className='text-center text-gray-700 mb-8'>
          Whether you're looking to collaborate, have an opportunity you'd like to discuss,
          or just want to say hello — I’d love to hear from you!
          <br />
          Feel free to reach out through the form below. I’ll get back to you as soon as possible.
        </p>

        <form
          action="https://formsubmit.co/24f2aa27b3f151dbd70b809b814e24c0"
          method="POST"
          className="flex flex-col gap-5"
        >
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
            className="p-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-300"
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
            className="p-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-300"
          />
          <textarea
            name="message"
            placeholder="Your Message"
            required
            rows="5"
            className="p-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-300"
          ></textarea>

          {/* Hidden Inputs */}
          <input type="hidden" name="_captcha" value="false" />
          <input type="hidden" name="_template" value="box" />

          <button
            type="submit"
            className="bg-blue-900 text-white font-semibold py-3 rounded-xl hover:bg-blue-800 transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
