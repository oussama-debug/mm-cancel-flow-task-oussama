"use client"


import { Drawer, DrawerContent, DrawerHeader, DrawerTitle } from "@/components/ui/drawer"
import { useMediaQuery } from "../hooks/use-media-query"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { useSubscriptionFlow } from "@/lib/store/subscription"
import InitialSubscriptionStep from "./steps/initial"

export function SubscriptionDrawer() {
  const { is_cancel_flow_open, current_step } = useSubscriptionFlow()
  const isDesktop = useMediaQuery("(min-width: 768px)")

  const content = {
    'initial': <InitialSubscriptionStep />
  };

  if (isDesktop) {
    return (
      <Dialog open={is_cancel_flow_open}>
        <DialogContent className="sm:max-w-[1000px] p-0 overflow-hidden">
          <DialogHeader className="border-b border-zinc-200 p-4 w-full flex flex-row justify-center items-center">
            <DialogTitle className="text-md">Subscription cancellation</DialogTitle>
          </DialogHeader>
          {content[current_step]}
        </DialogContent>
      </Dialog>
    )
  }

  return (
    <Drawer open={is_cancel_flow_open}>
      <DrawerContent className="max-h-[85vh]">
        <DrawerHeader>
          <DrawerTitle>Subscription cancellation</DrawerTitle>
        </DrawerHeader>
        {content[current_step]}
      </DrawerContent>
    </Drawer>
  )
}