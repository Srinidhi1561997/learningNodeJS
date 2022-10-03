const config = {
    user: process.env.user,
    password: process.env.password,
    server: process.env.server,
    database: process.env.database,
    trustServerCertificate: process.env.trustServerCertificate == 'true' ? true : false
  };

  module.exports = config;