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
  res.status(201).send({
    message: "Adicionado um novo pedido",
  });
});

// Busca por um pedido específico
router.get("/:id_pedido", (req, res, next) => {
  const id = req.params.id_product;

  res.status(200).send({
    message: "Detalhes do pedido",
    id_pedido: id,
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
