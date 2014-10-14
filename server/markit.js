
baseURL = "http://dev.markitondemand.com/Api/v2/Quote/jsonp";
callback = function (res) {
  return res;
};

Meteor.methods({
  getStockData: function(symbol) {
    var stock;
    HTTP.get(baseURL, {
      params: {
        symbol: symbol, // toUpperCase?
        callback: 'callback'
      }
    }, function(err, res) {
      if(err) {
        console.log("GET Markit.js Quote error: ", err);
        return "error";
      }

      var content = res.content;
      var data = JSON.parse(content.substring(9, content.length - 1));

      stock = {
        name: data.Name,
        symbol: data.Symbol,
        last_price: data.LastPrice,
        change: data.Change,
        change_percent: data.ChangePercent,
        timestamp: data.Timestamp,
        ms_date: data.MSDate,
        market_cap: data.MarketCap,
        volume: data.Volume,
        change_ytd: data.ChangeYTD,
        change_percent_ytd: data.ChangePercentYTD,
        high: data.High,
        low: data.Low,
        open: data.Open,
        alerts: {
          high: {},
          low: {}
        },
        predictions: {
          // TODO: calculate sentiment
          high: {
            count: 60 + Math.floor((Math.random() * 20) + 1),
            avg: (stock.LastPrice + stock.LastPrice * ((Math.random() * .2) + .05)).toFixed(2)
          },
          low: {
            count: 100 - stock.num_bull,
            avg: (stock.LastPrice - stock.LastPrice * ((Math.random() * .2) + .05)).toFixed(2)
          }
        }
      }

      // TODO: what and where to return?
      console.log("In HTTP.get, stock for ", symbol, ": ", stock);

      // return stock;
    });
    console.log("In getStockData, stock: ", stock);
    return stock;
  }
});