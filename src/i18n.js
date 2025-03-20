import i18n from "i18next"
import { initReactI18next } from "react-i18next";
import enTranslation from "./locales/en/translation.json";
import ukTranslation from "./locales/uk/translation.json";
import jpTranslation from "./locales/jp/translation.json";

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: enTranslation },
      uk: { translation: ukTranslation },
      jp: { translation: jpTranslation }
    },
    lng: "uk", // Мова за замовчуванням
    fallbackLng: "uk", // Якщо переклад відсутній
    interpolation: {
      escapeValue: false, // React уже захищає від XSS
    },
  });

export default i18n;