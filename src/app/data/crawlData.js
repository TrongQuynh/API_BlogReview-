const axios = require("axios");
const cheerio = require("cheerio");

(async function(){
    try {
        let url = "https://www.foody.vn/";
        const res = await axios(url);
        const html = res.data;
        const $ = cheerio.load(html);
        
        // let a = $(this).find(".home2-panel-right .ng-scope");
        console.log(html);

    } catch (error) {
        console.log(error);
    }
})()