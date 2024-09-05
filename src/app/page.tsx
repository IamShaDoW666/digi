"use client"
import { Input } from "@/components/ui/input";
import { ChangeEvent, useState } from "react";
import { submitPhoneNumber } from "./actions";
export default function Home() {  
  const [phoneNumber, setPhoneNumber] = useState('');
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPhoneNumber(e.target.value);
  };
  
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="max-w-md w-full bg-white p-8 rounded-lg shadow-md">
        <h1 className="text-2xl text-red-600 font-bold mb-4 text-center">
          Digi Impact
        </h1>
        <form>
          <div className="mb-4">
            <label
              htmlFor="phone"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Phone Number
            </label>
            <Input
              type="tel"
              id="phone"
              value={phoneNumber}
              onChange={handleChange}
              placeholder="Enter your phone number"
              className="w-full border text-zinc-700 border-gray-300 rounded-lg p-2 focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>
          <button
            onClick={() => submitPhoneNumber(phoneNumber)}
            className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
