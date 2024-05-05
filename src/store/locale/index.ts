import { defineStore } from "pinia";
import state from "./state";
import actions from "./actions";
export const useLocaleStore = defineStore({
  id: "locale",
  state: () => state,
  actions: actions,
});
