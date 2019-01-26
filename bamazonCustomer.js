var mysql = require("mysql");
var inquirer = require("inquirer");

// create the connection information for the sql database
var connection = mysql.createConnection({
  host: "localhost",

  // Your port; if not 3306
  port: 8889,

  // Your username
  user: "root",

  // Your password
  password: "root",
  database: "bamazon"
});

// connect to the mysql server and sql database
connection.connect(function(err) {
  if (err) throw err;
  // display all the items
  console.log("connection made my friend");
});

function itemDisplay() {
	connection.query("SELECT * FROM products", function(err, res) {
        
		if (err) throw err;
		console.log("All Products");
		var products = [];
		for (var i = 0; i < res.length; i++) {
			products.push([res[i].id, res[i].name, res[i].department_name, res[i].price, res[i].stock_quantity]);
		}
		var headings = ["Item ID", "Product", "Department", "Price ($)", "Quantity in Stock"];
        console.log(headings, products);
	});
}


itemDisplay();



function display() {
    var products = "SELECT * FROM products";
  // query the database for all items
  connection.query("SELECT * FROM products", function(err, results) {
    if (err) throw err;
    inquirer
      .prompt([
        {
          name: "choice",
          type: "input",
          message: "What item would you like to purchase today?"
        },
        {
          name: "amount",
          type: "input",
          message: "How many would you like to buy?"
        }
    
 // check to see what the user is looking for 

        ]).then(function(answer) {
            itemID = answer.id;
            itemQuantity = answer.quantity;
    
            connection.query("SELECT * FROM products WHERE item_id=" + itemID, function(err, res) {
                selected = res[0];
    
                if (itemQuantity > selected.stock_quantity && selected.stock_quantity > 1) {
                    response = "Sorry, we only have " + selected.stock_quantity + " " + selected.name + "s available.";
                    console.log(response);
                    productSelection();
                } else if (itemQuantity > selected.stock_quantity && selected.stock_quantity === 1) {
                    
                    promptUser();
           
                }
            });
        });
    }

