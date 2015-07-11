
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
        Stocks.upsert({ Symbol: symbol }, { Symbol: symbol, invalid: true });
      }
      console.log('data: ', data);
      stock = JSON.parse(stock);
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
