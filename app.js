const express = require("express");
const app = express();
const port = 3000;

// Hardcoded products
const products = [
  { id: 1, name: "Product 1", price: 10.99 },
  { id: 2, name: "Product 2", price: 15.49 },
  { id: 3, name: "Product 3", price: 8.99 },
  { id: 4, name: "Product 4", price: 12.99 },
  { id: 5, name: "Product 5", price: 20.0 },
  { id: 6, name: "Product 6", price: 5.5 },
  { id: 7, name: "Product 7", price: 7.25 },
  { id: 8, name: "Product 8", price: 18.75 },
  { id: 9, name: "Product 9", price: 14.0 },
  { id: 10, name: "Product 10", price: 25.99 },
];

// Products route
app.get("/products", (req, res) => {
  res.json(products);
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
