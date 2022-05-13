const dotenv = require('dotenv');
dotenv.config();

module.exports = {
  serviceName: process.env.SERVICE_NAME,

  // konfirguasi database
  dbHost: process.env.DB_HOST,
  dbUser: process.env.DB_USER,
  dbPort: process.env.DB_PORT,
  dbPass: process.env.DB_PASS,
  dbName: process.env.DB_NAME,
}
