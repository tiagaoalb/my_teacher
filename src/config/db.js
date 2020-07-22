const { Pool } = require("pg");

module.exports = new Pool({
    user: "tiago",
    password: "piorb81982",
    host: "localhost",
    port: "5432",
    database: "my_teacher",
});
