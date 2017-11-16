
const axios = require('axios')

module.exports = (device) => {
  return axios
    .get(device.meta.LOCATION)
    .then(res => res.data.state)
}
