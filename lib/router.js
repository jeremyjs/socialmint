Router.configure({
  layoutTemplate: 'layout'
});

Router.route('/stock/show/:symbol', {
  action: function () {
    this.render('showStock', {
      data: function() {
        symbol = this.params.symbol;
        stock = Stocks.findOne({Symbol: symbol});
        if(stock === undefined) {
          stock = Meteor.call('getStockData', symbol, function (err, res) {
            return res;
          });
        }
        stock = Stocks.findOne({Symbol: symbol});
        return stock;
      }
    });
  },
  onAfterAction: function () {
    symbol = this.params.symbol;
    sym = $.url().param('symbol') || symbol;
    dur = $.url().param('duration') || 3650;

    new Markit.InteractiveChartApi(sym, dur);
  },
  name: "showStock"
});

Router.route('/stock/sentiment/:symbol', {
  action: function () {
    this.render('stockSentiment', {
      data: function() {
        symbol = this.params.symbol;
        stock = Stocks.findOne({Symbol: symbol});
        if(stock === undefined) {
          stock = Meteor.call('getStockData', symbol, function (err, res) {
            return res;
          });
        }
        stock = Stocks.findOne({Symbol: symbol});
        return stock;
      }
    });
  },
  onAfterAction: function () {
    symbol = this.params.symbol;
    console.log(symbol);
    sym = $.url().param('symbol') || symbol;
    dur = $.url().param('duration') || 3650;

    new Markit.InteractiveChartApi(sym, dur);
  },
  name: "stockSentiment"
});