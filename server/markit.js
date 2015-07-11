
baseURL = "http://dev.markitondemand.com/Api/v2/Quote/jsonp";

Meteor.methods({
  getStockData: function(symbol) {
    return HTTP.get(baseURL, {
      params: {
        symbol: symbol,
        callback: 'callback'
      }
    }, function(err, res) {
      if(err) {
        console.log('HTTP Error:', err);
        return;
      }
      var data = res.content;
      if(data.substring(21, 38) === "No symbol matches") {
        var stock = { Symbol: symbol, invalid: true };
        Stocks.upsert({ Symbol: symbol }, stock);
        return stock;
      }
      data = data.substring(9, data.length-1);
      stock = JSON.parse(data);
      stock.Sentiments = {};
      stock.Alerts = {};
      stock.sentimentSum = {};
      stock.avgBull = (stock.LastPrice + stock.LastPrice * ((Math.random() * .2) + .05)).toFixed(2);
      stock.avgBear = (stock.LastPrice - stock.LastPrice * ((Math.random() * .2) + .05)).toFixed(2);
      stock.numBull = 70 + Math.floor((Math.random() * 20) + 1);
      stock.numBear = 100 - stock.numBull;
      Stocks.upsert({ Symbol: stock.Symbol }, stock);
      return stock;
    });
  },
  updateStockData: function(opt) {
    return Stocks.upsert({Symbol: opt.symbol}, opt.stock, function(res) {
      return res;
    });
  }
});
