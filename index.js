const request = require('request');
const cheerio = require('cheerio');
const { error } = require('console');

request('https://www.saralb.com.np/', (error, response, html) => {
    if(!error && response.statusCode ==200) {
      const $ =  cheerio.load(html);

    //   const inner = $('.inner');
    //   console.log(inner.html());

    // const output = inner.children('span').next().text();
    // console.log(output);
    }
});