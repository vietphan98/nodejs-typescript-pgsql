import { Pool } from "pg";

export const pool = new Pool({
    user : "risk",
    password : "qL4R+ylh1s&@cakA",
    host : "db-postgres-uat-cls-master.cdpeb1g0buju.ap-southeast-1.rds.amazonaws.com",
    port : 5432,
    database :"risk"
})