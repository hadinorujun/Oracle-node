const axios = require('axios');

// Fungsi untuk mengambil jadwal sepak bola
async function getFootballSchedule() {
    const apiKey = process.env.FOOTBALL_API_KEY;
    try {
        const response = await axios.get(`https://api.football-data.org/v4/matches`, {
            headers: { 'X-Auth-Token': apiKey }
        });
        return response.data.matches;
    } catch (error) {
        console.error('Error fetching football schedule:', error);
        return null;
    }
}

// Fungsi untuk mengambil hasil sepak bola
async function getFootballResults() {
    const apiKey = process.env.FOOTBALL_API_KEY;
    try {
        const response = await axios.get(`https://api.football-data.org/v4/matches`, {
            headers: { 'X-Auth-Token': apiKey }
        });
        return response.data.matches.filter(match => match.status === 'FINISHED');
    } catch (error) {
        console.error('Error fetching football results:', error);
        return null;
    }
}

module.exports = { getFootballSchedule, getFootballResults };
