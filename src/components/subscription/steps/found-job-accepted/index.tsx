'use client';

export default function FoundJobAcceptedrSubscriptionStep() {
    return (<div className="space-y-3 mt-4 w-full py-2">
        <div className="space-y-4 flex flex-col border-b pb-6 border-zinc-200">
            <h3 className="text-[30px] text-pretty md:text-[36px] mb-6 font-semibold font-sans leading-[36px] text-[#41403D]">Great choice, mate!</h3>
            <p className="text-[#41403D] text-[34px] leading-[36px] font-sans font-semibold">
                You're still on the path to your dream role. <span className="text-[#996EFF]">{"Let’s make it happen together!"}</span>
            </p>
            <div className="flex flex-col justify-start items-start">
                <h1 className="text-[22px] leading-[25px] font-sans font-semibold text-[#4B5563]">{"You’ve"} got XX days left on your current plan.<br />Starting from XX date, your monthly payment will be $12.50.</h1>
                <span className="italic text-gray-500 mt-1 text-sm">You can cancel anytime before then</span>
            </div>
        </div>
        <div className="pt-1 space-y-2 pb-3">
        <button className="bg-[#996EFF] rounded-md w-full p-2 mt-2 rounded flex flex-row justify-center items-center">
                        <span className="text-white font-sans font-medium text-[19px]">Launch your dream role</span>
            </button>
        </div>
    </div> 
        ) 
}