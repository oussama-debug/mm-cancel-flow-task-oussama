'use client';

import { useSubscriptionFlow } from "@/lib/store/subscription";
import Image from "next/image";
import FoundJobOfferSubscriptionStep from "../found-job-offer";

export default function FoundJobSubscriptionStep() {
    const { found_job_steps} = useSubscriptionFlow()

    const content = {
        'show-offer': <FoundJobOfferSubscriptionStep />,
        'offer-accepted': null,
        'offer-denied': null
    }

    return (<div className="flex bg-white flex-col-reverse pb-4 pt-3 lg:space-x-5 space-y-3 px-4 md:flex-row h-full">
        <div className="flex-1 w-full flex flex-col justify-center">
            {content[found_job_steps]}
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