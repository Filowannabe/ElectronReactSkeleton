const mysql = require("promise-mysql");

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: ''
});

export default function getConnection() {
    return connection;
}