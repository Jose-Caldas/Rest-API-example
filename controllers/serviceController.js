const express = require("express");
const { Service: ServiceModel } = require("../models/Service");

//funções para manipulação dos serviços nas rotas
const serviceController = {
  create: async (req, res) => {
    try {
      const service = {
        name: req.body.name,
        description: req.body.description,
        price: req.body.price,
        image: req.body.image,
      };

      const response = await ServiceModel.create(service);
      res.status(201).json({ response, msg: "Serviço criado com sucesso!" });
    } catch (error) {
      console.log(error);
    }
  },
  getAll: async (req, res) => {
    try {
      const services = await ServiceModel.find();
      if (!services) {
        res.status(404).json({ msg: "Nenhum serviço localizado!" });
        return;
      }
      res
        .status(200)
        .json({ services, msg: "Serviços carregados com sucesso!" });
    } catch (error) {
      console.log(error);
    }
  },
  getOne: async (req, res) => {
    try {
      const id = req.params.id;
      const service = await ServiceModel.findById(id);

      if (!service) {
        res.status(404).json({ msg: "Serviço não encontrado!" });
        return;
      }
      res.status(200).json({ service, msg: "Serviço carregado com sucesso!" });
    } catch (error) {
      console.log(error);
    }
  },
  deleteOne: async (req, res) => {
    try {
      const id = req.params.id;
      const service = await ServiceModel.findById(id);
      if (!service) {
        res.status(404).json({ msg: "Serviço não encontrado!" });
        return;
      }
      const deletedService = await ServiceModel.findByIdAndDelete(id);
      res
        .status(200)
        .json({ deletedService, msg: "Serviço excluído com sucesso!" });
    } catch (error) {
      console.log(error);
    }
  },
  update: async (req, res) => {
    try {
      const id = req.params.id;
      const service = {
        name: req.body.name,
        description: req.body.description,
        price: req.body.price,
        image: req.body.image,
      };

      const updateService = await ServiceModel.findByIdAndUpdate(id, service);

      if (!updateService) {
        res.status(404).json({ msg: "Serviço não encontrado!" });
        return;
      }

      res.status(200).json({ service, msg: "Serviço atualizado com sucesso!" });
    } catch (error) {
      console.log(error);
    }
  },
};

module.exports = serviceController;
