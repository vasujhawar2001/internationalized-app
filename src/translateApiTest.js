import { createRequire } from "module";
const require = createRequire(import.meta.url);

const {Translate} = require('@google-cloud/translate').v2;
require('dotenv').config();

// Your credentials
const CREDENTIALS = require('./constants/stratup.json');

// Configuration for the client
const translate = new Translate({
    credentials: CREDENTIALS,
    projectId: CREDENTIALS.project_id
});

const detectLanguage = async (text) => {

    try {
        let response = await translate.detect(text);
        return response[0].language;
    } catch (error) {
        console.log(`Error at detectLanguage --> ${error}`);
        return 0;
    }
}

// detectLanguage('Oggi è lunedì')
//     .then((res) => {
//         console.log(res);
//     })
//     .catch((err) => {
//         console.log(err);
//     });

export const translateText = async (text, targetLanguage) => {

    try {
        let [response] = await translate.translate(text, targetLanguage);
        return response;
    } catch (error) {
        console.log(`Error at translateText --> ${error}`);
        return 0;
    }
};

translateText('Oggi è lunedì', 'en')
    .then((res) => {
        console.log(res);
    })
    .catch((err) => {
        console.log(err);
    });