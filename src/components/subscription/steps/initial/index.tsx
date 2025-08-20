'use client';

import { useSubscriptionFlow } from "@/lib/store/subscription";
import Image from "next/image";

export default function InitialSubscriptionStep() {
    const { startFoundJob } = useSubscriptionFlow();
    return (<div className="flex flex-col-reverse pb-4 pt-3 lg:space-x-5 space-y-3 px-6 md:flex-row h-full">
        <div className="flex-1 w-full flex flex-col justify-center">
            <div className="space-y-3 w-full py-2">
                <h2 className="text-[24px] md:text-[36px] font-sans font-semibold leading-[32px] md:leading-[42px] text-gray-700 mb-2">Hey mate,<br />
                    Quick one before you go.</h2>
                <div className="space-y-6 border-b pb-4 border-zinc-300">
                    <h3 className="text-[24px] md:text-[36px] mb-3 font-semibold font-sans leading-[42px] italic text-gray-700">Have you found a job yet?</h3>
                    <p className="text-gray-600 text-sm leading-[22px] font-sans font-semibold">
                        Whatever your answer, we just want to help you take the next step.
                        With visa support, or by hearing how we can do better.
                    </p>
                </div>
                <div className="pt-3 space-y-2 pb-3">
                    <button
                        onClick={() => startFoundJob()}
                        className="inline-flex items-center justify-center w-full px-4 py-3 bg-white border border-gray-200 text-gray-600 rounded-lg  transition-all duration-200 shadow-sm group"
                    >
                        <span className="text-sm font-sans font-semibold">Yes, I've found a job</span>
                    </button>
                    <button
                        className="inline-flex items-center justify-center w-full px-4 py-3 bg-white border border-gray-200 text-gray-600 rounded-lg  transition-all duration-200 shadow-sm group"
                    >
                        <span className="text-sm font-sans font-semibold">Not yet - {"I’m"} still looking</span>
                    </button>
                </div>
            </div>
        </div>
        <div className="flex-1 relative min-h-[300px] md:min-h-[200px]">
            <Image
                src="/empire-state-compressed.jpg"
                alt="New York City skyline at dusk"
                className="absolute object-cover rounded-md shadow-md"
                fill
            />
        </div>
    </div>)
}