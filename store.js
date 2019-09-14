
let mysql = require("mysql");
let inquirer = require("inquirer");

let connection = mysql.createConnection({
  host: "localhost",
  
  port: 3306,

  user: "root",
  
  password: "root",
  database: "bamazon"
});

connection.connect(function (err) {
  if (err) {
    console.error("error connecting: " + err.stack);
  }
  loadProducts();
});

function loadProducts() {

  connection.query("SELECT * FROM products", function (err, res) {
    if (err) throw err;
    
    console.table(res);

    promptCustomerForItem(res);
  });
}




