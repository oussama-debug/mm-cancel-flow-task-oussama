"use client"


import { Drawer, DrawerContent, DrawerHeader, DrawerTitle } from "@/components/ui/drawer"
import { useMediaQuery } from "../hooks/use-media-query"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { useSubscriptionFlow } from "@/lib/store/subscription"
import InitialSubscriptionStep from "./steps/initial"
import { ChevronLeft } from "lucide-react"
import FoundJobSubscriptionStep from "./steps/found-job"
import { cn } from "@/lib/utils"

export function SubscriptionDrawer() {
  const { is_cancel_flow_open, current_step, found_job_steps, toggleCancelFlow } = useSubscriptionFlow()
  const isDesktop = useMediaQuery("(min-width: 768px)")

  const content = {
    'initial': <InitialSubscriptionStep />,
    'found-job': <FoundJobSubscriptionStep />
  };

  if (isDesktop) {
    return (
      <Dialog open={is_cancel_flow_open} onOpenChange={() => toggleCancelFlow()}>
        <DialogContent className="sm:max-w-[1280px] p-0 overflow-hidden">
          <DialogHeader className="border-b border-zinc-200 p-4 w-full flex flex-row justify-between items-center">
            {current_step !== 'initial' ? <button className="text-gray-600 font-sans font-semibold font-sans flex flex-row justify-start text-sm items-center"><ChevronLeft size={18} /><span>Back</span></button> : <div></div>}
            <DialogTitle className="text-md flex flex-row space-x-3 justify-center items-center">
              <span>Subscription cancellation</span>
              {current_step !== 'initial' && (<div className="flex mt-0.5 flex-row justify-center items-center space-x-2">
                <div className={cn("bg-gray-200 w-6 h-2 rounded-full")}></div>
                <div className={cn("bg-gray-200 w-6 h-2 rounded-full")}></div>
                <div className={cn("bg-gray-200 w-6 h-2 rounded-full")}></div>
                <span className="text-zinc-600 ml-2 -mt-0.5 text-sm font-sans font-normal">Step 1 of 3</span>
              </div>)
              }
            </DialogTitle>
            <div></div>
          </DialogHeader>
          <section className="overflow-y-auto w-full bg-zinc-100">
            {content[current_step]}
          </section>
        </DialogContent>
      </Dialog>
    )
  }

  return (
    <Drawer open={is_cancel_flow_open} onOpenChange={() => toggleCancelFlow()}>
      <DrawerContent className="max-h-[85vh]">
        <DrawerHeader className="border-b border-zinc-200 p-4">
          <DrawerTitle>Subscription cancellation</DrawerTitle>
        </DrawerHeader>
        <section className="overflow-y-auto w-full bg-zinc-100">
          {content[current_step]}
        </section>
      </DrawerContent>
    </Drawer>
  )
}