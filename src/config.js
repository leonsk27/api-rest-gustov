import { config } from 'dotenv';
config();

console.log(process.env.PORT);
console.log(process.env.DB_HOST);
console.log(process.env.DB_USER);
console.log(process.env.DB_PASS);
console.log(process.env.DB_DATABASE);
console.log(process.env.DB_PORT);

console.log(process.env.MYSQL_DATABASE);
console.log(process.env.MYSQL_ROOT_PASSWORD);
console.log(process.env.MYSQLHOST);
console.log(process.env.MYSQLPORT);
console.log(process.env.MYSQLUSER);


export const PORT = process.env.PORT || 3000;
export const DB_HOST = process.env.DB_HOST || "mysql.railway.internal";
export const DB_USER = process.env.DB_USER || "root";
export const DB_PASS = process.env.DB_PASS || "SvvwhSyXfrjuQdWJvomWCmTpyfooBTtO";
export const DB_DATABASE = process.env.DB_DATABASE || "railway";
export const DB_PORT = process.env.DB_PORT || 3306;