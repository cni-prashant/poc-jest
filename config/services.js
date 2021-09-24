require('dotenv').config();
const ENV = process.env.ENV;
const environmentUrl = process.env.HOST;

module.exports = {
  build: {
    env: ENV,
    url: environmentUrl
  }
}