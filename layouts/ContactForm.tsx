"use client"; // react code, render client side

import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import Confetti from "react-confetti";

export default function ContactForm() {
  const form = useRef();
  const [isSubmitted, setSubmitted] = useState(false);

  // send email when the submit button on the form is clicked
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_4uyh4eo", "template_qlrp0pe", form.current, {
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
    <form ref={form} onSubmit={sendEmail} className="flex flex-col gap-8 w-full max-w-sm text-center font-semibold text-md">
      <div className="group py-2">
        <label className="text-gray-700">نام</label>
        <input type="text" name="name" placeholder="نام شما" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"  />
      </div>
      <div className="group py-2">
        <label>ایمیل</label>
        <input type="email" name="email"  placeholder="ایمیل شما" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
      </div>
      <div className="group py-2">
        <label>پیغام</label>
        <textarea name="message"  placeholder="پیغام شما" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"/>
      </div>
      <button type="submit" className="bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded-xl" >ارسال</button>
    </form>
  );
}
