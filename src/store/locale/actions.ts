import state from "./state";

const actions = {
  setLocale(payload: { lang: string }) {
    if (
      payload.lang === "en" ||
      payload.lang === "ar" ||
      payload.lang === "kr"
    ) {
      state.currentLocale = payload.lang;
    }
  },
};

export default actions;
