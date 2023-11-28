import i18n from 'i18next';
import Backend from 'i18next-http-backend';

import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';
// import LocalStorageBackend from "i18next-localstorage-backend";

const getCurrentHost =
  import.meta.env.MODE === "development"
    ? "http://localhost:5173"
    : "LINK TO PROD";

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: 'en',
    detection: {
        order: ['querystring', 'path', 'cookie', 'header', 'localStorage', 'sessionStorage', 'htmlTag'],
        caches: ['cookie', 'localStorage'],
        lookupQuerystring: 'lang', 
    },
    preload: ['en'],
    debug: 'true',
    backend: {
      loadPath: `${getCurrentHost}/locales/{{lng}}/translation.json`,
    },
  })

  export default i18n;