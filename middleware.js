const home = require('./middlewares/home.js');
const sendotp = require('./middlewares/sendotp.js');


const middleware = {
    home_get: home.home_get,
    sendotp:sendotp.sendotp
}

module.exports = middleware;