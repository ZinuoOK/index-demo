// import { createConnection } from 'mysql';
var mysql = require('mysql');

var connection = mysql.createConnection({
    host: "gldexp.calm-rds-master.cnhz.keruyun.com",
    user: "gld_calm_gateway",
    password: "J2QjKh7boCceaMM",
    port: '3306',                   
    database: 'exp_calm_gld' 
});
var sesql = 'SELECT * FROM order_diversity WHERE brand_identy= 32299 AND third_tran_no = "3058134266448491756"'
var count = 0;

function queryStatement() 
{
    connection.connect();
    connection.query(sesql, function(err, result) {
    if(err) {
        console.log('[SELECT ERROR] - ', err.message);
        return;
    }
    console.log('--------------------------SELECT----------------------------');
    returnnresult;
    console.log('------------------------------------------------------------\n\n');
    });
    connection.end();
}

function sayHello()
{
    return "Hello!!";
}

while (count < 10) {
    console.log("循环第%s次", count);
    console.log(queryStatement());
    count++;
};