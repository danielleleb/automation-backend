const express = require('express');
const router = express.Router();
const axios = require('axios');

/* POST - to get full list of asset pairs. */
router.post('/', function(req, res, next) {
  const url = "https://api.kraken.com/0/public/AssetPairs";

  axios.post(url)
    .then(response => {
      const pairListData = response.data;
      res.json(pairListData);
    })
    .catch(err => {
      next(err);
    });
});

/* POST - to get ticker info for selected pair. */
router.post('/ticker', function(req, res, next) {
  const url = "https://api.kraken.com/0/public/Ticker";

  axios.post(url, req.body)
    .then(response => {
      const selectedPairInfo = response.data;
      console.log(selectedPairInfo)
      res.json(selectedPairInfo);
    })
    .catch(err => {
      next(err);
    });
});

module.exports = router;
