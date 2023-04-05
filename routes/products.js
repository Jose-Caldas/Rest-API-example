const express = require("express");
const router = express.Router();

// Retorna todos os produtos
router.get("/", (req, res, next) => {
  res.status(200).send({
    message: "Todos o produtos",
  });
});

// Adiciona um novo produto
router.post("/", (req, res, next) => {
  res.status(201).send({
    message: "Adicionado novo produto",
  });
});

// Busca por um produto específico
router.get("/:id_product", (req, res, next) => {
  const id = req.params.id_product;

  if (id === "especial") {
    res.status(200).send({
      message: "Você acessou o ID especial",
      id: id,
    });
  } else {
    res.status(200).send({
      message: "Você passou um ID na URL",
    });
  }
});

// Modifica/Altera um produto
router.patch("/", (req, res, next) => {
  res.status(201).send({
    message: "Produto alterado",
  });
});

// Exclui um produto
router.delete("/", (req, res, next) => {
  res.status(201).send({
    message: "Produto excluido com sucesso",
  });
});

module.exports = router;
