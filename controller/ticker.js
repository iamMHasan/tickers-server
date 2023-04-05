const axios= require("axios")
const TickerModel = require("../model/tickerSchema")


exports.getTickersByapi = async (req, res) => {
    try {
        const response = await axios.get("https://api.wazirx.com/api/v2/tickers")
        const tickers = response.data

        // top 10 values
        const top10tickers = Object.values(tickers)
            .sort((a, b) => parseInt(b) - parseInt(a))
            .slice(0, 10)

        // save top 10
        const tickerData = top10tickers.map(ticker => ({
            name: ticker.name,
            last: ticker.last,
            buy: ticker.buy,
            sell: ticker.sell,
            volume: ticker.volume,
            base_unit: ticker.base_unit
        }));

        await TickerModel.insertMany(tickerData);

        res.status(200).json({message : "ticker addes successfull"})
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Unable to fetch top 10 tickers' });
    }
}

exports.getTickers = async(req, res)=>{
    try {
        const response = await TickerModel.find({})

        res.status(200).json({
            message : "ticker fetched successfull",
            result : response
        })
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Unable to fetch top 10 tickers' });
    }
}
exports.delteTickers = async(req, res)=>{
    try {
        const response = await TickerModel.deleteMany()

        res.status(200).json({
            message : "ticker deleted successfull",
            result : response
        })
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Unable to fetch top 10 tickers' });
    }
}