import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n
  .use(initReactI18next) 
  .init({
    lng: "ko", // 기본 언어
    fallbackLng: "en",
    resources: {
      ko: {
        translation: require("../src/global/locales/ko/translation.json")
      },
      en: {
        translation: require("../src/global/locales/en/translation.json")
      }
    }
  });

export default i18n;
