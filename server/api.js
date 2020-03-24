import express from 'express';
import request from 'request';

const router = express.Router();

router.get('/latestExchangeData', (req, res) => {   
  request('https://openexchangerates.org/api/latest.json?app_id=37640a2b8f5c4bb3a5afa25a4a272cfe', function (error, response, body) {
    if (!error && response.statusCode == 200) {      
      res.status(200).json(response);     
    } else {
      console.log("error");
      res.status(404).json(error);
    }
  })
});

module.exports = router;
