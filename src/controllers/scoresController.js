'use strict';

const express = require('express');
const router = express.Router();

// Sample data to mimic live scores
let liveScores = [
    { matchId: 1, teamA: 'Team A', teamB: 'Team B', scoreA: 1, scoreB: 2, status: 'Finished' },
    { matchId: 2, teamA: 'Team C', teamB: 'Team D', scoreA: 3, scoreB: 1, status: 'Ongoing' }
];

// Route to handle live score requests
router.get('/live-scores', (req, res) => {
    res.json({
        status: 'success',
        data: liveScores
    });
});

module.exports = router;