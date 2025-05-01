import React from 'react';
import { Poppins } from 'next/font/google';

const poppins = Poppins({
  weight: ['400', '700'],
  subsets: ['latin'],
});

export default function SignInPage() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50">
      <div className="w-full max-w-md p-6 bg-white border border-stone-300 rounded-2xl shadow-lg">
        <h1 className={`text-3xl font-bold mb-6 text-center ${poppins.className}`}>
          Sign In
        </h1>

        <form className="space-y-4">
          <div>
            <label htmlFor="email" className="block text-sm font-medium mb-1">
              Your email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Email"
              className="w-full px-4 py-2 border border-stone-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-sky-500"
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-medium mb-1">
              Your password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="********"
              className="w-full px-4 py-2 border border-stone-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-sky-500"
            />
          </div>

          <div className="flex items-center">
            <input
              type="checkbox"
              id="remember"
              className="mr-2"
            />
            <label htmlFor="remember" className="text-sm">
              Remember me
            </label>
          </div>

          <button
            type="submit"
            className="w-full bg-sky-800 hover:bg-sky-600 text-white font-semibold py-2 rounded-xl transition"
          >
            Sign In
          </button>

          <div className="text-center mt-4">
            <a
              href="#"
              className="text-sm text-sky-700 hover:underline"
            >
              Forgot your password?
            </a>
          </div>
        </form>
      </div>
    </div>
  );
}
