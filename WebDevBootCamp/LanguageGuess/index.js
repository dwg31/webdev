const franc = require("franc");
const langs = require("langs");
const input = process.argv[2];

const langCode = franc(input);
const language = langs.where("3", langCode);
if (language) {
    console.log(language.name);
} else {
    console.log(langCode === "und" ? "Can not determine, try with more text" : langCode);
}