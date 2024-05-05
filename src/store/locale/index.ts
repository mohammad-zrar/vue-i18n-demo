import { defineStore } from "pinia";
import state from "./state";

export const useLocaleStore = defineStore({
  id: "locale",
  state: () => state,
  actions: {
    setLocale(newLocale: string) {
      this.currentLocale = newLocale;
    },
  },
});
