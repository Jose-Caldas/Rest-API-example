const router = require("express").Router();

//Service routes

const serviceRouter = require("./service");

router.use("/", serviceRouter);

module.exports = router;
