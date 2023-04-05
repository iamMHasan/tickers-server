const express = require("express")
const { getTickers } = require("../controller/ticker")

const router = express.Router()

router.get("/top10ticker",getTickers)

module.exports =  router;