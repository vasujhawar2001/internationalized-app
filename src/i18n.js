import i18n from 'i18next';
import Backend from 'i18next-http-backend';  // default path -> public/locales/{lang}/transalation.json

import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';
// import LocalStorageBackend from "i18next-localstorage-backend";

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
    debug: 'true'
  })

  export default i18n;