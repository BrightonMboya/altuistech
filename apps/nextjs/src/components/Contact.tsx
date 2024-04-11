import { useState } from "react";

import { Input } from "./Input";

export default function Contact() {
  const [message, setMessage] = useState("");
  const [email, setEmail] = useState("");
  const [fullNames, setFullNames] = useState("");

  return (
    <div className="mx-auto mt-10">
      <div className="text-center ">
        <p className="mx-auto mb-10 mt-3 max-w-4xl px-4 text-xl ">
          We'd love to hear from you. Simply fill in the form below or reach out
          directly to us through one of our contacts listed below.
        </p>

        <p className=" text-xl ">
          Email:&nbsp;
          <a
            href="mailto:Info@altruistechinnovations.com"
            className="hover:underline"
          >
            {" "}
            Info@altruistechinnovations.com
          </a>
        </p>
        <p className=" text-xl">
          Phone:&nbsp;
          <a href="tel:+250786468892" className="hover:underline">
            +250786468892
          </a>
        </p>
      </div>

      <div className="mx-auto my-20 max-w-4xl px-4">
        <h3 className="text-4xl">Contact Us</h3>
        <p className=" mt-8 text-black md:mt-12">
          Please complete the form below
        </p>

        <form
          action="https://formsubmit.co/Info@altruistechinnovations.com"
          method="POST"
          className="mx-auto mt-8 flex w-full flex-col gap-8"
        >
          <Input
            required
            type="text"
            name="fullName"
            value={fullNames}
            label="Full Names*"
            placeholder="Enter your full Names"
            onChange={(e) => setFullNames(e.target.value)}
          />

          <Input
            required
            type="email"
            name="email"
            value={email}
            label="Email Address*"
            placeholder="Enter your email address"
            onChange={(e) => setEmail(e.target.value)}
          />

          <div className="flex w-full flex-col gap-2">
            <label htmlFor="message" className="text-[#484848]">
              Message*
            </label>
            <textarea
              className=" placeholder:text-gray-300 h-36 rounded-lg border-2 border-gray-500 px-4 py-3 shadow-sm focus:ring-[#A87133]"
              placeholder="Write your message here"
              required
              name="Message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            ></textarea>
          </div>

          <button
            type="submit"
            className=" w-[10rem] rounded-lg bg-[#3372F2] px-4 py-2 text-white"
          >
            Submit Form
          </button>
        </form>
      </div>
    </div>
  );
}
