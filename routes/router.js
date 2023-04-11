const router = require("express").Router();

//Service routes
const serviceRouter = require("./services");
router.use("/", serviceRouter);

//Party routes
const partyRouter = require("./parties");
router.use("/", partyRouter);

module.exports = router;
