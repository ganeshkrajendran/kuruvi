
require('dotenv').config();

const PGSQL_SERVICE_PORT = process.env.PGSQL_SERVICE_PORT;
const PGSQL_SERVICE_API_ENDPOINT = `0.0.0.0:${PGSQL_SERVICE_PORT}`;
const PGSQL_USERNAME = process.env.PGSQL_USERNAME;
// const PGSQL_HOST = process.env.PGSQL_HOST;
const PGSQL_HOST = '192.168.128.2';
const PGSQL_DATABASE_NAME = process.env.PGSQL_DATABASE_NAME;
const PGSQL_PORT = process.env.PGSQL_PORT;
const PGSQL_PASSWORD = process.env.PGSQL_PASSWORD;

module.exports = {
    PGSQL_SERVICE_PORT,
    PGSQL_SERVICE_API_ENDPOINT,
    PGSQL_USERNAME,
    PGSQL_HOST,
    PGSQL_DATABASE_NAME,
    PGSQL_PORT,
    PGSQL_PASSWORD
}