import connect from 'mysql2/promise';

export const mysql = await connect.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'iot'
});