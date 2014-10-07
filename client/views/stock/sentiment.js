
// TODO: implement and test
Template.stockSentiment.events({
  'click #submit-button': function(e) {
    // e.preventDefault();
    // sentiments = this.Sentiments || {};
    // which = $('#bulls-or-bears option:selected').val();

    // if(which === "Bullish") {
    //   value = $('#sentiment-value').val();
    //   sentiments[Meteor.userId()] = {
    //     bull: value,
    //     bear: null
    //   };
    // }
    // else if(which === "Bearish") {
    //   value = $('#sentiment-value').val();
    //   sentiments[Meteor.userId()] = {
    //     bull: null,
    //     bear: value
    //   };
    // }

    // this.Sentiments = sentiments;
    // this.sentimentSum = calculateSentiment(sentiments);

    // Stocks.update(this._id, { $set: { Sentiments: this.Sentiments, sentimentSum: this.sentimentSum } });
    // location.reload();
  },
  'click #set-button': function(e) {
    Meteor.call('setAlert', {
      userId: Meteor.userId(),
      symbol: this.Symbol,
      name: this.Name,
      high: $('#high-value').val(),
      low: $('#low-value').val()
    }, function(err, res) {
      if(err) { console.log(err); }
    });
  }
});

Template.stockSentiment.rendered = function () {
  stock = this.data;
  var num_bull = stock.numBull;
  var num_bear = stock.numBear;
  bull = 70 + Math.floor((Math.random() * 20) + 1);
  bear = 100 - bull;
  Morris.Donut({
    element: 'donut-example',
    data: [
      {label: '% Bullish', value: bull },
      {label: '% Bearish', value: bear }
    ],
    colors: [
      '#50B432',
      '#C53030'
    ]
  });
  thiz = this;
  changePrice = function() {
    change = thiz.data.LastPrice * ((Math.random * .04) - .02);
    thiz.data.LastPrice = thiz.data.LastPrice + change;
    thiz.data.Change = change;
    thiz.data.ChangePercent = change / thiz.data.LastPrice;
  }
  setInterval(changePrice, 1000);
};
