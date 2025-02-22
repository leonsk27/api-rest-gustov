import { config } from 'dotenv';
config();

export const PORT = process.env.PORT || 3000;
export const DB_HOST = process.env.DB_HOST || "mysql-5x1.railway.internal";
export const DB_USER = process.env.DB_USER || "root";
export const DB_PASS = process.env.DB_PASS || "AIGsNkQSMlRvTNpfKmBiwbFjGRmSrKOs";
export const DB_DATABASE = process.env.DB_DATABASE || "railway";
export const DB_PORT = process.env.DB_PORT || 3306;
export const DATABASE_URL = process.env.DATABASE_URL || `mysql://${DB_USER}:${DB_PASS}@${DB_HOST}:${DB_PORT}/${DB_DATABASE}`;