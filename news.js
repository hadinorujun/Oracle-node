const axios = require('axios');

// Fungsi untuk mengambil berita terkini
async function getLatestNews(keyword) {
    const apiKey = process.env.NEWS_API_KEY;
    try {
        const response = await axios.get(`https://newsapi.org/v2/everything?q=${keyword}&apiKey=${apiKey}`);
        return response.data.articles;
    } catch (error) {
        console.error('Error fetching news:', error);
        return null;
    }
}

module.exports = { getLatestNews };
