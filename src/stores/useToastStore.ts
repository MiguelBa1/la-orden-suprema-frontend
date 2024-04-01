import { create } from 'zustand'

type ToastType = 'success' | 'error' | 'info';

type Toast = {
  id: number;
  message: string;
  type: ToastType;
}

type ToastMessage = {
  message: string;
  type: ToastType;
}

type ToastStore = {
  toasts: Toast[];
  addToast: ({ message, type }: ToastMessage) => void;
  removeToast: (id: number) => void;
}

const useToastStore = create<ToastStore>((set) => ({
  toasts: [],
  addToast: ({ message, type }: ToastMessage) => set((state) => ({
    toasts: [...state.toasts, { id: Date.now(), message, type }],
  })),
  removeToast: (id) => set((state) => ({
    toasts: state.toasts.filter((toast) => toast.id !== id),
  })),
}))

export default useToastStore
