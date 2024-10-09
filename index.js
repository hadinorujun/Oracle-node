require('dotenv').config();
const cron = require('node-cron');
const { getFootballSchedule, getFootballResults } = require('./services/football');
const { getCurrentWeather } = require('./services/weather');
const { getLatestNews } = require('./services/news');
const { getCryptoPrices } = require('./services/crypto');
const { sendToCanister } = require('./helpers/canister');

// Fungsi utama untuk menjalankan oracle node
function runOracleNode() {
    // Jadwal sepak bola setiap 1 jam
    cron.schedule('0 * * * *', () => {
        console.log('Mengambil jadwal sepak bola...');
        getFootballSchedule().then(matches => {
            sendToCanister('football_schedule', matches);
        });
    });

    // Hasil sepak bola setiap 1 jam
    cron.schedule('0 * * * *', () => {
        console.log('Mengambil hasil sepak bola...');
        getFootballResults().then(results => {
            sendToCanister('football_results', results);
        });
    });

    // Data cuaca setiap 30 menit
    cron.schedule('*/30 * * * *', () => {
        console.log('Mengambil data cuaca...');
        getCurrentWeather('Jakarta').then(weather => {
            sendToCanister('weather', weather);
        });
    });

    // Berita teknologi setiap 1 jam
    cron.schedule('0 * * * *', () => {
        console.log('Mengambil berita teknologi...');
        getLatestNews('technology').then(articles => {
            sendToCanister('news', articles);
        });
    });

    // Harga cryptocurrency setiap 10 menit
    cron.schedule('*/10 * * * *', () => {
        console.log('Mengambil harga cryptocurrency...');
        getCryptoPrices().then(prices => {
            sendToCanister('crypto_prices', prices);
        });
    });
}

// Jalankan oracle node
runOracleNode();
