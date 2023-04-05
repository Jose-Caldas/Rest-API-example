const express = require("express");
const router = express.Router();

// Retorna todos os pedidos
router.get("/", (req, res, next) => {
  res.status(200).send({
    message: "Todos os pedidos",
  });
});

// Adiciona um novo pedido
router.post("/", (req, res, next) => {
  const order = {
    id_order: req.body.id_order,
    quantity: req.body.quantity,
  };
  res.status(201).send({
    message: "Adicionado um novo pedido",
    createdOrder: order,
  });
});

// Busca por um pedido específico
router.get("/:id_order", (req, res, next) => {
  const id = req.params.id_order;

  res.status(200).send({
    message: "Detalhes do pedido",
    id_order: id,
  });
});

// Modifica/Altera um produto
router.patch("/", (req, res, next) => {
  res.status(201).send({
    message: "Pedido alterado",
  });
});

// Exclui um pedido
router.delete("/", (req, res, next) => {
  res.status(201).send({
    message: "Pedido excluido com sucesso",
  });
});

module.exports = router;
