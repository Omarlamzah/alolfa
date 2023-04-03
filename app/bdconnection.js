var mysql= require('mysql');
var connection= mysql.createConnection({
host :'localhost',
user :'root',
password:'',
database:'olfadb'
});


var connection2= mysql.createConnection({
    host :'mysql-118987-0.cloudclusters.net',
    user :'admin',
    password:'r7HMwhfZ',
    database:'olfadb',
    port:12740
    });


module.exports={connection2}
