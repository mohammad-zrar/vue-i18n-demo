import state from "./state";

const actions = {
  setLocale(newLocale: string) {
    state.currentLocale = newLocale;
  },
};

export default actions;
