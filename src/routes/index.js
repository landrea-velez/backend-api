const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const compression = require("compression");
require("express-async-errors");
const { NotFoundMiddleWare, ErrorMiddleWare } = require("../middlewares");
const notFoundMiddleware = require("../middlewares/not-found.middleware");
const errorMiddleware = require("../middlewares/error.middleware");


module.exports = function({ HomeRoutes }){
    const router = express.Router();
    const apiRoutes = express.Router();

    apiRoutes
    .use(express.json())
    .use(cors())
    .use(helmet())
    .use(compression());

    apiRoutes.use("/home", HomeRoutes);
    router.use("/v1/api", apiRoutes);

    router.use(notFoundMiddleware);
    router.use(errorMiddleware);

    return router;
};