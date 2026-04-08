const axios = require('axios');

const GOOGLE_SPORTS_API_URL = 'https://sports.googleapis.com/v1/scores';

// Function to fetch live football scores
async function fetchLiveFootballScores() {
    try {
        const response = await axios.get(GOOGLE_SPORTS_API_URL);
        return response.data;
    } catch (error) {
        console.error('Error fetching live football scores:', error);
        throw error;
    }
}

module.exports = {
    fetchLiveFootballScores
};