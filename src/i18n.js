import i18n from 'i18next';
// import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';
// import middleware from 'i18next-express-middleware';
// import LocalStorageBackend from "i18next-localstorage-backend";
import Backend from 'i18next-locize-backend';

const getCurrentHost =
  import.meta.env.MODE === "development"
    ? "http://localhost:5173"
    : "LINK TO PROD";

const locizeOptions = {
  projectId : import.meta.env.VITE_LOCIZE_PROJECTID,
  apiKey: import.meta.env.VITE_LOCIZE_API_KEY,
  refLng: import.meta.env.VITE_LOCIZE_REFLNG,
  version: import.meta.env.VITE_LOCIZE_VERSION
}

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: 'en',
    detection: {
        order: ['querystring', 'path', 'cookie', 'navigator', 'localStorage', 'sessionStorage', 'htmlTag'],
        caches: ['cookie', 'localStorage'],
        lookupQuerystring: 'lang',
    },
    preload: ['en'],
    debug: 'true',
    // backend: {
    //   loadPath: `${getCurrentHost}/locales/{{lng}}/translation.json`,
    // },
    backend : locizeOptions
  })

  export default i18n;