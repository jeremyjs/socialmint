
baseURL = "http://dev.markitondemand.com/Api/v2/Quote/jsonp";
callback = function (res) {
  return res;
};

Meteor.methods({
  getStockData: function(symbol) {
    HTTP.get(baseURL, {
      params: {
        symbol: symbol, // toUpperCase?
        callback: 'callback'
      }
    }, function(err, res) {
      if(err) console.log("GET Markit error: ", err);
      stock = res.content;
      stock = stock.substring(9, stock.length - 1);
      stock = JSON.parse(stock);
      stock.avg_bull = (stock.LastPrice + stock.LastPrice * ((Math.random() * .2) + .05)).toFixed(2);
      stock.avg_bear = (stock.LastPrice - stock.LastPrice * ((Math.random() * .2) + .05)).toFixed(2);
      stock.num_bull = 60 + Math.floor((Math.random() * 20) + 1);
      stock.num_bear = 100 - stock.num_bull;
      // TODO: what and where to return?
      Stocks.upsert({Symbol: stock.symbol}, stock);
      return stock;
    });
  }
});