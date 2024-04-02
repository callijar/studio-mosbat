'use client'

import { FormEvent, useState } from 'react'
import Confetti from 'react-confetti'

export default function ContactForm() {
  const [isSubmitted, setSubmitted] = useState(false)
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault()

    try {
      const res = await fetch('../helpers/sendEmail', {
        method: 'POST',
        body: JSON.stringify({
          name,
          email,
          message,
        }),
        headers: {
          'content-type': 'application/json',
        },
      })
      if (res.status === 200) {
        setSubmitted(true)
      }
    } catch (err: any) {
      console.error('Err', err)
    }
  }

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
    <form onSubmit={onSubmit} className="flex flex-col gap-8">
      <div className="">
        <label className="label font-semibold">
          <span className="label-text">نام</span>
        </label>
        <input
          className="input w-full input-bordered input-primary"
          value={name}
          onChange={(e) => setName(e.target.value)}
          type="text"
          placeholder="نام شما"
          required 
        />
      </div>
      <div>
        <label className="label font-semibold">
          <span className="label-text">ایمیل</span>
        </label>
        <input
          className="input w-full input-bordered input-primary"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          placeholder="name@example.com"
          required 
        />
      </div>
      <div>
        <label className="label font-semibold">
          <span className="label-text">پیغام</span>
        </label>
        <textarea
          className="textarea w-full textarea-primary"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        ></textarea>
      </div>
      <button className="bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded-xl" type="submit">
        ارسال
      </button>
    </form>
  )
}