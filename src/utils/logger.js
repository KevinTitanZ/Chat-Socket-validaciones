// src/utils/logger.js
const winston = require('winston');
module.exports = winston.createLogger({
  transports: [new winston.transports.Console()],
});
