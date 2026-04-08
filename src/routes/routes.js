// routes.js

const express = require('express');
const router = express.Router();

// Mock data
const liveScores = [
    { matchId: 1, homeTeam: 'Team A', awayTeam: 'Team B', score: '2-1' },
    { matchId: 2, homeTeam: 'Team C', awayTeam: 'Team D', score: '1-3' }
];

const matchDetails = {
    1: { matchId: 1, date: '2026-04-08', time: '15:00', details: 'Exciting match between Team A and Team B.' },
    2: { matchId: 2, date: '2026-04-08', time: '16:00', details: 'Team C faced Team D in a thrilling match.' }
};

// Endpoint for fetching live scores
router.get('/live-scores', (req, res) => {
    res.json(liveScores);
});

// Endpoint for fetching match details
router.get('/match-details/:id', (req, res) => {
    const matchId = req.params.id;
    const matchDetail = matchDetails[matchId];
    if (matchDetail) {
        res.json(matchDetail);
    } else {
        res.status(404).json({ message: 'Match not found' });
    }
});

module.exports = router;