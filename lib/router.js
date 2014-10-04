Router.configure({
  layoutTemplate: 'layout'
});

Router.route('/stock/show/:symbol', function () {
  console.log(this.params.symbol);
  this.render('showStock', {
    data: function () {
      return Stocks.findOne({Symbol: this.params.symbol});
    }
  });
});