'use client';

import Image from "next/image";

export default function InitialSubscriptionStep() {
    return (<div className="flex flex-col p-8 md:flex-row h-full">
        <div className="flex-1 w-full flex flex-col justify-center">
            <div className="space-y-3 w-full">
                <h2 className="text-[36px] font-sans font-semibold leading-[42px] text-gray-900 mb-2">Hey mate,<br />
                    Quick one before you go.</h2>
                <div>
                    <h3 className="text-[36px] font-semibold font-sans leading-[42px] italic text-gray-700">Have you found a job yet?</h3>
                    <p className="text-gray-600 text-sm leading-[22px] font-sans font-semibold">
                        Whatever your answer, we just want to help you take the next step.
                        <br />
                        With visa support, or by hearing how we can do better.
                    </p>
                </div>
            </div>
        </div>
        <div className="flex-1 relative min-h-[300px] md:min-h-[400px]">
            <Image
                src="/empire-state-compressed.jpg"
                alt="New York City skyline at dusk"
                width={400}
                height={333}
            />
        </div>
    </div>)
}