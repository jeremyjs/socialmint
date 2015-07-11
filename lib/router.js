Router.configure({
  layoutTemplate: 'layout'
});

Router.route('/stock/show/:symbol', {
  name: 'stockStats',
  action: function () {
    Session.set('currentView', 'stats');
    this.render('stockStats', {
      data: function() {
        symbol = this.params.symbol.toUpperCase();
        stock = Stocks.findOne({Symbol: symbol});
        if(stock === undefined) {
          stock = Meteor.call('getStockData', symbol, function (err, res) {
            if(err) console.log('error: ', err);
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
    })
  }
});

Router.route('/test/textAlert', {
  action: function () {
    this.render('textAlertTest');
  }
});

Router.route("/", {
  name: "index",
  action: function(){
    this.render("landing");
  },
  layoutTemplate: 'landingLayout'
});

Router.route("/about", {
  name: "about",
  action: function () {
    this.render("about");
  },
  layoutTemplate: 'landingLayout'
});

Router.route("/contact", {
  name: "contact",
  action: function () {
    this.render("contact");
  },
  layoutTemplate: 'landingLayout'
});
