
baseURL = "http://dev.markitondemand.com/Api/v2/Quote/jsonp";
callback = function (res) {
  return res;
};
Meteor.methods({
  createNewStockFromStockData: function(symbol) {
    return HTTP.get(baseURL, {
      params: {
        symbol: symbol,
        callback: 'callback'
      }
    }, function(err, res) {
      stock = res.content;
      stock = stock.substring(9, stock.length - 1);
      stock = JSON.parse(stock);
      console.log(stock);
      stock.Sentiments = {};
      stock.Alerts = {};
      stock.sentimentSum = {};
      stock.avgBull = (stock.LastPrice + stock.LastPrice * ((Math.random() * .2) + .05)).toFixed(2);
      stock.avgBear = (stock.LastPrice - stock.LastPrice * ((Math.random() * .2) + .05)).toFixed(2);
      stock.numBull = 70 + Math.floor((Math.random() * 20) + 1);
      stock.numBear = 100 - stock.numBull;
      Stocks.insert(stock);
      return stock;
    });
  },
  updateStockData: function(opt) {
    return Stocks.upsert({Symbol: opt.symbol}, opt.stock, function(res) {
      return res;
    });
  }
});