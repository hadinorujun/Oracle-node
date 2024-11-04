const axios = require('axios');



// Fungsi untuk mengambil data statistic

async function getCurrentStatistic(city) {

    const apiKey = process.env.STATISTIC_API_KEY;

    try {

        const response = await axios.get(`https://api.hgsb.xyz/data/5/statistic?q=${city}&appid=${apiKey}&units=metric`);

        return response.data;

    } catch (error) {

        console.error('Error fetching statistic data:', error);

        return null;

    }

}



module.exports = { getCurrentStatistic }
