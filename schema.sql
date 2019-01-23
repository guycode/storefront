CREATE DATABASE bamazon;
USE bamazon;

-- Created the table "schools" 
CREATE TABLE products
(
  id int
  AUTO_INCREMENT,
  name varchar (30) NOT NULL,
  department_name VARCHAR (50) NOT NULL,
  price INT NOT NULL,
  stock_quantity INT NOT NULL,
  PRIMARY KEY (id)
);

  -- Inserted a set of records into the table
  INSERT INTO products
    (name, department_name, price, stock_quantity)
  VALUES
    ("macbook pro", "electronics", 2400, 10);
  INSERT INTO products
    (name, department_name, price, stock_quantity)
  VALUES
    ("Beats Headphones", "electronics", 150, 30);
  INSERT INTO products
    (name, department_name, price, stock_quantity)
  VALUES
    ("Hockey Jersey", "athletics", 250, 25);
  INSERT INTO products
    (name, department_name, price, stock_quantity)
  VALUES
    ("Bauer Skates", "athletics", 450, 5);
    INSERT INTO products
    (name, department_name, price, stock_quantity)
  VALUES
    ("Gucci Watch", "accessories", 4000, 2);
  INSERT INTO products
    (name, department_name, price, stock_quantity)
  VALUES
    ("Nike Shoes", "clothing", 175, 20);
  INSERT INTO products
    (name, department_name, price, stock_quantity)
  VALUES
    ("Nike Hat", "clothing", 30, 40);
  INSERT INTO products
    (name, department_name, price, stock_quantity)
  VALUES
    ("Golf Clubs", "athletics", 1000, 5);
      INSERT INTO products
    (name, department_name, price, stock_quantity)
  VALUES
    ("Golf Shoes", "athletics", 90, 10);
  INSERT INTO products
    (name, department_name, price, stock_quantity)
  VALUES
    ("Wallet", "accessories", 50, 3);