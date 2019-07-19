
require('dotenv').config();

const DATABASE_PORT = process.env.DATABASE_PORT;
const PGSQL_SERVICE_API_ENDPOINT = `${process.env.PGSQL_SERVICE}:${DATABASE_PORT}`;
const IMGPROXY_PORT= process.env.IMGPROXY_PORT;
const IMGPROXY_SERVICE = process.env.IMGPROXY_SERVICE;
const IMGPROXY_SERVICE_API_ENDPOINT= `0.0.0.0:${IMGPROXY_PORT}`;
const CADDY_PORT = process.env.CADDY_PORT;
const CADDY_SERVICE = process.env.CADDY_SERVICE;


module.exports = {
    DATABASE_PORT,
    PGSQL_SERVICE_API_ENDPOINT,
    IMGPROXY_PORT,
    IMGPROXY_SERVICE_API_ENDPOINT,
    IMGPROXY_SERVICE,
    CADDY_PORT,
    CADDY_SERVICE
}