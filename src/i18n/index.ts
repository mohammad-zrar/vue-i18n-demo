import { createI18n } from "vue-i18n";
import en from "./locales/en.json";
import kr from "./locales/kr.json";
import ar from "./locales/ar.json";

type MessageSchema = typeof en;

export const i18n = createI18n<[MessageSchema], "en" | "kr" | "ar">({
  locale: "en",
  legacy: false,
  messages: {
    en: en,
    kr: kr,
    ar: ar,
  },
});
