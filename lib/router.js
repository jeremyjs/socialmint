Router.configure({
  layoutTemplate: 'layout'
});

Router.route('/stock/show/:symbol', {
  name: 'stockStats',
  action: function () {
    Session.set('currentView', 'stats');
    this.render('stockStats', {
      data: function() {
        console.log(this);
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
  }
});

Router.route('/stock/sentiment/:symbol', {
  name: "stockSentiment",
  action: function () {
    Session.set('currentView', 'sentiment');
    this.render('stockSentiment', {
      data: function() {
        symbol = this.params.symbol;
        stock = Stocks.findOne({Symbol: symbol});
        if(stock === undefined) {
          stock = Meteor.call('getStockData', symbol, function (err, res) {
            return res;
          });
        }
        else {
          stock = Stocks.findOne({Symbol: symbol});
          console.log(stock);
          sentiment = calculateSentiment(stock);
          console.log(sentiment);
          stock.sentimentSum = sentiment;
          stock = Meteor.call('updateStockData', {symbol: symbol, stock: stock}, function (err, res) {
            if(err)
              console.log(err);
            return res;
          });
          return stock;
        }
      }
    });
  }
});
