const express = require("express");
const app = express();
const morgan = require("morgan");

const productRoute = require("./routes/products");
const orderRoute = require("./routes/order");

app.use(morgan("dev"));

app.use("/products", productRoute);
app.use("/pedido", orderRoute);

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
