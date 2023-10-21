import i18n from 'i18next';
//import * as i18next from 'i18next';
import i18nBackend from "i18next-http-backend";
import {initReactI18next} from 'react-i18next';
//import useLocation from "react-router-dom";
import LanguageDetector from 'i18next-browser-languagedetector';

//let location = useLocation();
//const getCurrentHost = import.meta.env.MODE === 'development' ? 'http://localhost:5173' : 'cgonzalez26.github.io'
//const getCurrentHost = location.pathname;
//const getCurrentHost = 'http://localhost:3000';
const getCurrentHost =
    process.env.NODE_ENV === "development"
    ? "http://localhost:3000"
    : "https://cgonzalez26.github.io";

i18n
    .use(i18nBackend)
    .use(initReactI18next)
    .use(LanguageDetector)    
    .init({
        fallbackLng: 'es',
        lng: 'es',
        interpolation:{
            escapeValue: false
        },
        backend: {
            loadPath: `${getCurrentHost}/i18n/{{lng}}.json`,
        }
    });

export default i18n;