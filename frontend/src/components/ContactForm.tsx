"use client";

import { useState } from "react";

export default function ContactForm() {
  const [sent, setSent] = useState(false);

  if (sent) {
    return (
      <div className="card p-6 text-center">
        <h3 className="text-xl font-semibold text-[--color-charcoal] dark:text-white">Thanks! 🎉</h3>
        <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">
          Your inquiry was captured in this prototype. In the real build, this will email us and store your request. We’ll be in touch shortly.
        </p>
        <button className="btn-primary mt-4" onClick={() => setSent(false)}>Send another</button>
      </div>
    );
  }

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        setSent(true);
      }}
      className="card p-6 grid grid-cols-1 gap-4"
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-slate-700 dark:text-slate-200">Name</label>
          <input required className="mt-1 field" placeholder="Your full name" />
        </div>
        <div>
          <label className="block text-sm font-medium text-slate-700 dark:text-slate-200">Email</label>
          <input type="email" required className="mt-1 field" placeholder="you@example.com" />
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div>
          <label className="block text-sm font-medium text-slate-700 dark:text-slate-200">Event Type</label>
          <select className="mt-1 field">
            <option>Pop-up</option>
            <option>Catering</option>
            <option>Private Class</option>
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium text-slate-700 dark:text-slate-200">Headcount</label>
          <input type="number" min={1} className="mt-1 field" placeholder="e.g. 50" />
        </div>
        <div>
          <label className="block text-sm font-medium text-slate-700 dark:text-slate-200">Date</label>
          <input type="date" className="mt-1 field" />
        </div>
      </div>
      <div>
        <label className="block text-sm font-medium text-slate-700 dark:text-slate-200">Message</label>
        <textarea rows={5} className="mt-1 field" placeholder="Tell us a bit about your event and location in Houston…" />
      </div>
      <div className="flex justify-end">
        <button type="submit" className="btn-primary">Send inquiry</button>
      </div>
    </form>
  );
}
