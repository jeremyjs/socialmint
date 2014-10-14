
// TODO: implement and test
Template.stockSentiment.events({
  'click #submit-button': function(e) {
    e.preventDefault();
    var which = $('#bulls-or-bears option:selected').val();
    var value = $('#sentiment-value').val();

    // TODO: update Stocks with the new prediction
    if(which === "Bullish") {
      // prediction.high[Meteor.userId] = value;
    }
    else if(which === "Bearish") {
      // prediction.low[Meteor.userId] = value;
    }

  },
  'click #set-button': function(e) {
    // TODO: update Stocks with the new alert instead

    // Meteor.call('setAlert', {
    //   userId: Meteor.userId(),
    //   symbol: this.Symbol,
    //   name: this.Name,
    //   high: $('#high-value').val(),
    //   low: $('#low-value').val()
    // }, function(err, res) {
    //   if(err) { console.log(err); }
    // });
  }
});

Template.stockSentiment.rendered = function () {
  var stock = this.data;
  var num_bull = stock.predictions.high.count;
  var num_bear = stock.predictions.low.count;

  Morris.Donut({
    element: 'donut-example',
    data: [
      {label: '% Bullish', value: num_bull },
      {label: '% Bearish', value: num_bear }
    ],
    colors: [
      '#50B432',
      '#C53030'
    ]
  });
};
