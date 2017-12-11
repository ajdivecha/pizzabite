-- Put your database and initial table configuration here
CREATE DATABASE pizzaDB;
USE pizzaDB;

CREATE TABLE slice (
  id INT AUTO_INCREMENT NOT NULL,
  pizzatype VARCHAR(50) NOT NULL,
  nommed BOOLEAN NOT NULL DEFAULT 0,
  date DATE TIMESTAMP,
  PRIMARY KEY (id)
);
