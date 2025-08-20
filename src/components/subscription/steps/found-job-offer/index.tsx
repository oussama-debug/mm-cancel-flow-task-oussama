'use client';

import { useSubscriptionFlow } from "@/lib/store/subscription";

export default function FoundJobOfferSubscriptionStep() {
    const { acceptDiscountFoundJob } = useSubscriptionFlow()
    return (<div className="space-y-3 w-full py-2">
        <div className="space-y-6 flex flex-col border-b pb-6 border-zinc-200">
            <h3 className="text-[24px] text-pretty md:text-[36px] mb-6 font-semibold font-sans leading-[36px] text-gray-800">We built this to help you land the job, this makes it a little easier.</h3>
            <p className="text-gray-600 text-[24px] leading-[22px] font-sans font-semibold">
                {"We’ve been there and we’re here to help you."}
            </p>
            <div className="border border-purple-600 p-3 bg-purple-100 rounded-md flex flex-col justify-center items-center">
                <h1 className="text-[30px] font-sans font-semibold">Here’s <span className="underline">50% off</span> until you find a job.</h1>
                <div className="flex flex-row  space-x-3 justify-center items-center">
                    <h2 className="font-sans text-[26px] text-indigo-500 font-semibold">$12.50/month</h2>
                    <span className="line-through text-[20px] font-sans text-zinc-600">$25 /month</span>
                </div>
                <button className="bg-green-400 rounded-md w-full p-2 mt-2 rounded flex flex-row justify-center items-center" onClick={() => acceptDiscountFoundJob()}>
                    <span className="text-white font-sans font-medium text-[19px]">Get 50% off</span>
                </button>
                <span className="italic text-gray-500 mt-1 text-sm">You wont be charged until your next billing date</span>
            </div>
        </div>
        <div className="pt-1 space-y-2 pb-3">
            <button
                className="inline-flex items-center justify-center w-full px-4 py-3 bg-white border border-gray-100 text-gray-600 rounded-lg  transition-all duration-200 shadow-sm group"
            >
                <span className="text-sm font-sans font-semibold">No thanks</span>
            </button>
        </div>
    </div>)
}