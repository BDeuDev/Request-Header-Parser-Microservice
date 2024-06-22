const express = require('express');

const router = express.Router();

router.get('/whoami', async (req, res) => {
    try {
        const ipaddress = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
        const language = req.headers['accept-language'];
        const software = req.headers['user-agent'];

        if(!ipaddress){
            return res.status(404).json({message: 'Header not found'})
        }
        if(!language){
            return res.status(404).json({message: 'Header not found'})
        }
        if(!software){
            return res.status(404).json({message: 'Header not found'})
        }

        res.status(200).json({
            ipaddress: ipaddress,
            language: language,
            software: software
        });
    } catch (error) {
        res.status(500).json({err:error})
    }

});

module.exports = router