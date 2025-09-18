"use client";

import { useState } from "react";

export default function NewsletterForm() {
  const [done, setDone] = useState(false);
  return (
    <div className="card p-6">
      {!done ? (
        <form
          className="flex flex-col sm:flex-row gap-3"
          onSubmit={(e) => {
            e.preventDefault();
            setDone(true);
          }}
        >
          <input
            type="email"
            required
            placeholder="you@example.com"
            className="field rounded-full sm:w-72"
          />
          <button type="submit" className="btn-primary">Subscribe</button>
        </form>
      ) : (
        <div className="text-center">
          <h3 className="text-lg font-semibold text-[--color-charcoal] dark:text-white">You’re subscribed! 🎉</h3>
          <p className="mt-1 text-sm text-slate-600 dark:text-slate-300">Check your inbox for your 5 free recipes.</p>
        </div>
      )}
    </div>
  );
}
