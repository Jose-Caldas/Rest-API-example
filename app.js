const express = require("express");
const app = express();
const morgan = require("morgan");
const bodyParcer = require("body-parser");

const productRoute = require("./routes/products");
const orderRoute = require("./routes/order");

app.use(morgan("dev"));
app.use(bodyParcer.urlencoded({ extended: false })); // Apenas dados simples
app.use(bodyParcer.json()); // Apenas formato json de entrada no body
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Header",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );

  if (req.method === "OPTIONS") {
    res.header("Access-Control-Allow-Methods", "GET, POST, PUT, PATCH, DELETE");
    return res.status(200).send({});
  }

  next();
});

app.use("/products", productRoute);
app.use("/pedidos", orderRoute);

// Caso não encontre nenhuma rota
app.use((req, res, next) => {
  const error = new Error("Rota não encontrada");
  error.status = 404;
  next(error);
});

app.use((error, req, res, next) => {
  res.status(error.status || 500);
  return res.send({
    error: {
      message: error.message,
    },
  });
});

module.exports = app;
