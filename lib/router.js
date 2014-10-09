Router.configure({
  layoutTemplate: 'layout'
});

Router.route('/stocks/:symbol/stats', {
  name: 'stockStats',
  layoutTemplate: 'showStock',
  action: function () {
    var symbol = this.params.symbol; // controller variable; toUpperCase?
    // TODO: change to rely on IronRouter helper in view rather than session
    Session.set('currentView', 'stats');
    // TODO: is data part of the render obj or the route obj?
    this.render('stockStats', {
      data: function() {
        var stock;
        Meteor.call('getStockData', symbol, function (err, res) {
          if(err) {
            // TODO: handle timeouts, etc. differently
            console.log("getStockData Error: ", err);
            return;
          }
          console.log("call res: ", res);
          stock = res;
          // Stocks.findOne({Symbol: symbol}, function (err, res) {
          //   return res;
          // });
        });
      }
    });
  },
  onAfterAction: function () {
    // TODO: make the view wait on this data and show a spinner
    var symbol = $.url().param('symbol') || this.params.symbol;
    var duration = $.url().param('duration') || 3650;
    new Markit.InteractiveChartApi(symbol, duration);
  }
});

Router.route('/stocks/:symbol/sentiment', {
  name: "stockSentiment",
  layoutTemplate: 'showStock',
  action: function () {
    var symbol = this.params.symbol; // controller variable; toUpperCase?
    // TODO: change to rely on IronRouter helper in view rather than session
    Session.set('currentView', 'stats');
    // TODO: is data part of the render obj or the route obj?
    this.render('stockSentiment', {
      data: function() {
        Meteor.call('getStockData', symbol, function (err, res) {
          if(err) {
            // TODO: handle timeouts, etc. differently
            console.log("getStockData Error: ", err);
            return;
          }
          Stocks.findOne({Symbol: symbol}, function (err, res) {
            return res;
          });
        });
      }
    })
  }
});

Router.route('/test/textAlert', {
  action: function () {
    this.render('textAlertTest');
  }
});

Router.route("/", function () {
  this.render("landing");
}, {
  name: "index",
  layoutTemplate: null
});
