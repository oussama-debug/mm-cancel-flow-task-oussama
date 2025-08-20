"use client"

import { create } from 'zustand'

type SubscriptionCancelSteps = 'initial';

interface SubscriptionFlowStore {
    current_step: SubscriptionCancelSteps;
    is_cancel_flow_open: boolean;

    toggleCancelFlow: () => void;
}

export const useSubscriptionFlow = create<SubscriptionFlowStore>()((set) => ({
    current_step: 'initial',
    is_cancel_flow_open: false,
    toggleCancelFlow: () => set((s) => ({ ...s, is_cancel_flow_open: !s.is_cancel_flow_open}))
}))