import { configDotenv } from 'dotenv';
configDotenv();

console.log(process.env.PORT);
console.log(process.env.DB_HOST);
console.log(process.env.DB_USER);
console.log(process.env.DB_PASS);
console.log(process.env.DB_DATABASE);
console.log(process.env.DB_PORT);


export const PORT = process.env.PORT || 3000;
export const DB_HOST = process.env.DB_HOST || "localhost";
export const DB_USER = process.env.DB_USER || "root";
export const DB_PASS = process.env.DB_PASS || "root";
export const DB_DATABASE = process.env.DB_DATABASE || "db";
export const DB_PORT = process.env.DB_PORT || 3306;