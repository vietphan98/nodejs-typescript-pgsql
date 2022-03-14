"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.pool = void 0;
const pg_1 = require("pg");
exports.pool = new pg_1.Pool({
    user: "risk",
    password: "qL4R+ylh1s&@cakA",
    host: "db-postgres-uat-cls-master.cdpeb1g0buju.ap-southeast-1.rds.amazonaws.com",
    port: 5432,
    database: "risk"
});
