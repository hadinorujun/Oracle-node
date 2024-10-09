const axios = require('axios');

// Fungsi untuk mengambil harga cryptocurrency dari CoinGecko
async function getCryptoPrices() {
    try {
        const response = await axios.get('https://api.coingecko.com/api/v3/simple/price?ids=bitcoin,ethereum,solana,binancecoin&vs_currencies=usd');
        return response.data;
    } catch (error) {
        console.error('Error fetching cryptocurrency prices:', error);
        return null;
    }
}

module.exports = { getCryptoPrices };
