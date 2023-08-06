'use client';
import { Button } from "@/components/button";
import { useState } from "react";
import { BsCheck } from "react-icons/bs";

export default function Form() {
  const encode = (data: any) => {
    return Object.keys(data)
      .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
      .join("&");
  };

  const [state, setState] = useState<FormPost>();
  const [submitted, setSubmitted] = useState(false);

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {

    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "contact", ...state })
    }).catch(error => console.log(error));

    event.preventDefault();
    setSubmitted(true);
  }

  const handleChange = (e: React.FormEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setState({
      ...state,
      [e.currentTarget.id]: e.currentTarget.value,
    });
  };

  return (
    <form name="contact" method="POST" data-netlify="true" onSubmit={onSubmit} data-netlify-honeypot="bot-field" className="h-full flex flex-col gap-8 bg-bglightcol p-8 relative z-10 grain">
      {/* <input type="hidden" name="subject" value="mattausgretzinger.com form submission" /> */}
      <input type="hidden" name="form-name" value="contact" />

      <label hidden>
        Bot field, don’t fill this out: <input name="bot-field" />
      </label>

      <label>
        <p className="after:content-['*'] after:ml-0.5 after:text-red-400">Name</p>
        <input type="text" id="name" name="name" className="w-full bg-transparent border-b border-accentcol px-3 py-2 placeholder-textcol/50 focus:border-transparent focus:outline-none focus:ring-1 ring-accentcol block" placeholder="First Last" required onChange={handleChange} />
      </label>

      <label>
        <p className="after:content-['*'] after:ml-0.5 after:text-red-400">Email</p>
        <input type="email" id="email" name="email" className="w-full bg-transparent border-b border-accentcol px-3 py-2 placeholder-textcol/50 focus:border-transparent focus:outline-none focus:ring-1 ring-accentcol block" placeholder="example@gmail.com" required onChange={handleChange} />
      </label>

      <label>
        <p className="after:content-['*'] after:ml-0.5 after:text-red-400">Message</p>
        <textarea id="message" name="message" rows={8} className="w-full bg-transparent border-b border-accentcol px-3 py-3 placeholder-textcol/50 focus:border-transparent focus:outline-none focus:ring-1 ring-accentcol block resize-none" placeholder="Write a message..." required onChange={handleChange} />
      </label>

      <div className="flex gap-5 items-center">
        <Button type="submit" styleType="Primary" text="Send" widthClass="w-36" />
        {submitted && <div className="">
          <div className="h-full flex text-accentcol items-center text-xl">
            <p className="">Success!</p>
            <BsCheck size={25} />
          </div>
          <p className="">I will be in contact shortly.</p>
        </div>}
      </div>
    </form>
  )
}

interface FormPost {
  name?: string
  email?: string
  message?: string
}