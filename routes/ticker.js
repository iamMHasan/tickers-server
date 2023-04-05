const express = require("express")
const {  getTickersByapi, getTickers, delteTickers } = require("../controller/ticker")

const router = express.Router()

router.post("/top10ticker",getTickersByapi)
router.get("/top10ticker",getTickers)
router.delete("/top10ticker",delteTickers)

module.exports =  router;