
baseURL = "http://dev.markitondemand.com/Api/v2/Quote/jsonp";
callback = function (res) {
  return res;
};
Meteor.methods({
  getStockData: function(symbol) {
    return HTTP.get(baseURL, {
      params: {
        symbol: symbol,
        callback: 'callback'
      }
    }, function(err, res) {
      content = res.content;
      content = content.substring(9, content.length - 1);
      content = JSON.parse(content);
      Stocks.insert(content, function(stock) {
        return stock;
      });
    });
  }
});