import { create } from "zustand";
import { v4 as uuidv4 } from "uuid";

interface NotifyState {
  type: "error" | "success" | "warning";
  duration?: number;
  id?: string | number;
  messages: string;
}

interface CommonState {
  loading: boolean;
  notify: NotifyState[];
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  showNotifyAction: (payload: any) => void;
  clearNotify: (id?: string | number) => void;
  showLoading: () => void;
  hideLoading: () => void;
}

const initialState = {
  loading: false,
  notify: [],
};

export const modalSate = create<CommonState>()((set) => ({
  ...initialState,
  showNotifyAction: (payload) => {
    set((prev) => {
      const _id = uuidv4();
      const notify = prev.notify;

      notify.push({
        ...payload,
        id: _id,
      });

      return { ...prev, notify: notify };
    });
  },
  clearNotify(id?: string | number) {
    set((prev) => {
      let notify = prev.notify;

      if (!id) notify = [];
      else {
        const index = prev.notify.findIndex((i) => i.id === id);

        notify.splice(index, 1);
      }

      return { ...prev, notify: notify };
    });
  },
  showLoading() {
    set((prev) => ({ ...prev, loading: true }));
  },
  hideLoading() {
    set((prev) => ({ ...prev, loading: true }));
  },
}));
