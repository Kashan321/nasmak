"use client";
import { Icon } from "@iconify/react/dist/iconify.js";
import Link from "next/link";
import { useState } from "react";
import toast from "react-hot-toast";

function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    interest: "design & branding",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loader, setLoader] = useState(false);
  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const reset = () => {
    setFormData({
      name: "",
      email: "",
      interest: "design & branding",
      message: "",
    });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setLoader(true);

    try {
      const submitData = new FormData();
      submitData.append("type", "contact");
      submitData.append("name", formData.name);
      submitData.append("email", formData.email);
      submitData.append("subject", formData.interest);
      submitData.append("message", formData.message);

      const response = await fetch("/api/contact", {
        method: "POST",
        body: submitData,
      });

      const result = await response.json();

      if (response.ok) {
        setSubmitted(true);
        reset();
        toast.success("Message sent successfully!");
      } else {
        console.error("Error:", result.message);
        toast.error(result.message || "Failed to send message");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      toast.error("An error occurred. Please try again.");
    } finally {
      setLoader(false);
    }
  };

  return (
    <section>
      <div className="relative w-full pt-44 2xl:pb-20 pb-10 before:absolute before:w-full before:h-full before:bg-linear-to-r before:from-[#b2d8c5] before:via-[#e0f2e9] before:to-[#c2ede1] before:rounded-full before:top-24 before:blur-3xl before:opacity-20 before:-z-10 dark:before:from-[#4d6659] dark:before:via-[#009444] dark:before:to-[#38f9d7] dark:before:rounded-full dark:before:blur-3xl dark:before:opacity-20 dark:before:-z-10">
        <div className="container relative z-10">
          <div className="flex flex-col gap-10 md:gap-20">
            <div className="relative flex flex-col text-center items-center">
              <h2 className="font-medium w-full max-w-32">
                Love to hear from you, Get in
                <span className="instrument-font italic font-normal dark:text-white/70">
                  {" "}
                  touch
                </span>
              </h2>
            </div>
            {submitted ? (
              <div className="flex flex-col items-center gap-5 text-center max-w-xl mx-auto p-6 rounded-lg bg-green/20 dark:bg-white/5">
                <div className="flex">
                  <Icon
                    icon="ix:success-filled"
                    width="30"
                    height="30"
                    style={{ color: "#79D45E" }}
                  />
                  <h5 className="text-green dark:text-green">
                    Great!!! Email has been Successfully Sent. We will get in
                    touch asap.
                  </h5>
                </div>

                <Link
                  href="/"
                  className="group w-fit text-black font-medium bg-transparent dark:bg-white/20 dark:hover:bg-white rounded-full flex items-center gap-4 py-2 pl-5 pr-2 hover:bg-transparent border border-dark_black"
                >
                  <span className="group-hover:translate-x-9 group-hover:dark:text-dark_black dark:text-white transform transition-transform duration-200 ease-in-out">
                    Back to home
                  </span>
                  <svg
                    width="32"
                    height="32"
                    viewBox="0 0 32 32"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="group-hover:-translate-x-[125px] transition-all duration-200 ease-in-out group-hover:rotate-45"
                  >
                    <rect
                      width="32"
                      height="32"
                      rx="16"
                      fill="white"
                      className=" transition-colors duration-200 ease-in-out fill-black"
                    />
                    <path
                      d="M11.832 11.3334H20.1654M20.1654 11.3334V19.6668M20.1654 11.3334L11.832 19.6668"
                      stroke="#1B1D1E"
                      strokeWidth="1.42857"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className=" transition-colors duration-200 ease-in-out stroke-white"
                    />
                  </svg>
                </Link>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="flex flex-col bg-white dark:bg-dark_black rounded-2xl p-8 gap-8"
              >
                <div className="flex flex-col md:flex md:flex-row gap-6">
                  <div className="w-full">
                    <label htmlFor="name">Your Name</label>
                    <input
                      className="w-full mt-2 rounded-full border px-5 py-3 outline-hidden transition dark:border-white/20
                                                focus:border-dark_black/50 dark:focus:border-white/50 dark:bg-black/40"
                      id="name"
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Enter your name"
                    />
                  </div>
                  <div className="w-full">
                    <label htmlFor="email">Your Email</label>
                    <input
                      className="w-full mt-2 rounded-full border px-5 py-3 outline-hidden transition dark:border-white/20
                                                focus:border-dark_black/50 dark:focus:border-white/50 dark:bg-black/40"
                      id="email"
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Enter your email"
                    />
                  </div>
                </div>
                <div className="flex flex-col md:flex md:flex-row gap-6">
                  <div className="w-full">
                    <label htmlFor="interest">
                      What are you interested in?
                    </label>
                    <select
                      className="w-full mt-2 rounded-full border pl-5 pr-12 py-3 outline-hidden transition dark:border-white/20
                                                focus:border-dark_black/50 dark:focus:border-white/50 dark:bg-black/40"
                      name="interest"
                      id="interest"
                      value={formData.interest}
                      onChange={handleChange}
                    >
                      <option value="design & branding">
                        Design & Branding
                      </option>
                      <option value="web development">Web Development</option>
                      <option value="mobile app development">
                        Mobile App Development
                      </option>
                      <option value="ui/ux design">UI/UX Design</option>
                      <option value="digital marketing">
                        Digital Marketing
                      </option>
                      <option value="ecommerce">Ecommerce</option>
                      <option value="consulting">Consulting</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  <div className="w-full"></div>
                </div>
                <div className="w-full">
                  <label htmlFor="message">Message</label>
                  <textarea
                    className="w-full mt-2 rounded-3xl border px-5 py-3 outline-hidden transition dark:border-white/20
                                        focus:border-dark_black/50 dark:focus:border-white/50 dark:bg-black/40"
                    name="message"
                    id="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Let tell us know your project about"
                    rows={4}
                  />
                </div>
                <div>
                  {!loader ? (
                    <button
                      type="submit"
                      className="group w-fit text-white dark:text-dark_black font-medium bg-dark_black dark:bg-white rounded-full flex items-center gap-4 py-2 pl-5 pr-2 transition-all duration-200 ease-in-out  hover:bg-transparent border hover:text-dark_black border-dark_black"
                    >
                      <span className="transform transition-transform duration-200 ease-in-out group-hover:translate-x-10">
                        Let’s Collaborate
                      </span>
                      <svg
                        width="32"
                        height="32"
                        viewBox="0 0 32 32"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="transform transition-transform duration-200 ease-in-out group-hover:-translate-x-36 group-hover:rotate-45"
                      >
                        <rect
                          width="32"
                          height="32"
                          rx="16"
                          fill="white"
                          className="fill-white dark:fill-black transition-colors duration-200 ease-in-out group-hover:fill-black "
                        />
                        <path
                          d="M11.832 11.3334H20.1654M20.1654 11.3334V19.6668M20.1654 11.3334L11.832 19.6668"
                          stroke="#1B1D1E"
                          strokeWidth="1.42857"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="stroke-dark_black dark:stroke-white transition-colors duration-200 ease-in-out group-hover:stroke-white"
                        />
                      </svg>
                    </button>
                  ) : (
                    <button className="bg-grey item-center flex gap-2 py-3 px-7 rounded-sm">
                      <div
                        className="animate-spin inline-block size-6 border-[3px] border-current border-t-transparent text-blue-600 rounded-full dark:text-blue-500"
                        role="status"
                        aria-label="loading"
                      >
                        <span className="sr-only">Loading...</span>
                      </div>{" "}
                      Submitting
                    </button>
                  )}
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactForm;
