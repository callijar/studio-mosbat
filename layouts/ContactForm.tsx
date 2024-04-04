// displays the form
// emails the form data to admin
// after the form is successfully submitted, displays "پیغام شما دریافت شد" and throws confetti

"use client"; // render client side

import { useState } from "react";
import emailjs from "@emailjs/browser";
import Confetti from "react-confetti";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  
  const handleChange = (event: any) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const [isSubmitted, setSubmitted] = useState(false);

  // send email when the submit button on the form is clicked
  const sendEmail = (e: any) => {
    e.preventDefault();

    emailjs
      .send("service_4uyh4eo", "template_qlrp0pe", formData, {    // keys does not need to be moved to .env.local because if someone accesses them , they can only submit forms to admin
        publicKey: "zHYi8vCno_av-II6o",
      })
      .then(
        () => {
          setSubmitted(true);
          console.log("SUCCESS!");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  // shows form
  // shows the submitted message after the form is submitted (isSubmitted is true)
  return isSubmitted ? (
    <div>
      <h1
        className="text-center font-semibold text-3xl
      "
      >
        پیغام شما دریافت شد
      </h1>
      <Confetti />
    </div>
  ) : (
    <form
      onSubmit={sendEmail}
      className="flex flex-col gap-8 w-full max-w-sm text-center font-semibold text-md"
    >
      <div className="group py-2">
        <label>نام</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="نام شما"
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>
      <div className="group py-2">
        <label>ایمیل</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="ایمیل شما"
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>
      <div className="group py-2">
        <label>پیغام</label>
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="پیغام شما"
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>
      <button
        type="submit"
        className="bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded-xl"
      >
        ارسال
      </button>
    </form>
  );
}
