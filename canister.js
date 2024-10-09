const axios = require('axios');

// Fungsi untuk mengirim data ke smart contract
async function sendToCanister(type, data) {
    const canisterId = process.env.CANISTER_ID;
    // Logika mengirim data ke canister dengan menggunakan agent dari @dfinity
    // Misalnya dengan dfx-agent atau HTTP endpoint canister
    try {
        console.log(`Mengirim data ${type} ke canister:`);
        console.log(data);
        // Implementasikan pengiriman data ke canister sesuai format
    } catch (error) {
        console.error('Error sending data to canister:', error);
    }
}

module.exports = { sendToCanister };
