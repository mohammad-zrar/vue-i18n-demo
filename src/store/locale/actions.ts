import state from "./state";

const actions = {
  setLocale(newLocale: string) {
    if (["en", "kr", "ar"].includes(newLocale)) {
      state.currentLocale = newLocale;
    } else {
      throw new Error("This language is not supported");
    }
  },
  setDefault() {
    state.currentLocale = "en";
  },
  testLocale(): void {
    console.log("test");
  },
};

export default actions;
