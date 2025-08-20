"use client"

import { create } from "zustand"

type SubscriptionCancelSteps = "initial" | "found-job"
type SubscriptionFoundJob = "show-offer" | "offer-accepted" | "offer-denied"

interface SubscriptionFlowStore {
  current_step: SubscriptionCancelSteps
  found_job_steps: SubscriptionFoundJob

  is_cancel_flow_open: boolean

  startFoundJob: () => void
  acceptDiscountFoundJob: () => void
  denyDiscountFoundJob: () => void
  startNotFoundJob: () => void
  toggleCancelFlow: () => void
}

export const useSubscriptionFlow = create<SubscriptionFlowStore>()((set) => ({
  current_step: "initial",
  found_job_steps: "show-offer",

  is_cancel_flow_open: false,
  startFoundJob: () =>
    set((s) => ({ ...s, is_cancel_flow_open: true, found_job_steps: "show-offer", current_step: "found-job" })),
  acceptDiscountFoundJob: () => set((s) => ({ ...s, found_job_steps: "offer-accepted" })),
  denyDiscountFoundJob: () => set((s) => ({ ...s, found_job_steps: "offer-denied" })),
  startNotFoundJob: () => set((s) => ({ ...s, is_cancel_flow_open: true, current_step: "initial" })),
  toggleCancelFlow: () => set((s) => ({ ...s, is_cancel_flow_open: !s.is_cancel_flow_open })),
}))
