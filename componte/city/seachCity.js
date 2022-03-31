const { key } = require('../../config');
const axios = require('axios')

async function searchCity(req, res) {
    const { value, city } = req.query

    let url = `https://apis.map.qq.com/ws/place/v1/suggestion/?region=${encodeURI(city)}&keyword=${encodeURI(value)}&key=${key}`

    let result = await axios({
        url
    })

    res.send(JSON.stringify(result.data))
}



module.exports = searchCity