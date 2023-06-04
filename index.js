const request = require('request');
const cheerio = require('cheerio');
const { error } = require('console');

request('https://puginarug.com', (error, response, html) => {
    if(!error && response.statusCode ==200) {
      const $ =  cheerio.load(html);

      const timerFrame = $('.timer frame');
      console.log(timerFrame);
    }
});