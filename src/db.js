import { Pool } from 'pg';
import dotenv from 'dotenv';

dotenv.config();

console.log(process.env.PG_DATABASE);

const pool = new Pool({
    user: process.env.PG_USER,
    host: process.env.PG_HOST,
    database: process.env.PG_DATABASE,
    password: process.env.PG_PASSWORD,
    port: Number(process.env.PG_PORT),
});

export const query = (text, params) => pool.query(text, params);