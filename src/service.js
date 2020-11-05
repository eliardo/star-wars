var axios = require('axios');

if (process.env.NODE_ENV !== 'production') {
    const dotenv = require("dotenv");
    dotenv.config();
}

async function getHero(id){
    let url = process.env.SW_URL_BASE + "people/"+id;
    const response = await axios.get(url);
    return response.data;
}

module.exports = {
    getHero
}