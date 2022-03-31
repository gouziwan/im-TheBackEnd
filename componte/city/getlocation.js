const axios = require('axios');
const { key } = require('../../config');


async function getLocation(req, res) {
    const { value } = req.query

    let result = await axios({
        url: `https://apis.map.qq.com/ws/geocoder/v1/?location=${value}&key=${key}`
    })
    res.send(JSON.stringify(result.data))
}

module.exports = getLocation