
stockHelpers = {
  change: function () {
    return this.Change.toFixed(2);
  },
  changeClass: function () {
    return this.Change > 0 ? "positive" : "negative";
  },
  changeIsPositive: function () {
    return this.Change > 0;
  },
  changePercent: function () {
    return this.ChangePercent.toFixed(2);
  },
  marketCap: function () {
    return this.MarketCap.toPrecision(3);
  },
  volume: function () {
    return this.Volume.toPrecision(3);
  },
  changePercentYTD: function () {
    return this.ChangePercentYTD.toFixed(2);
  },
  avgBull: function() {
    // if(!this.sentimentSum.avgBull) { return this.LastPrice.toFixed(2); }
    // return parseFloat(this.sentimentSum.avgBull).toFixed(2);
    return this.avgBull;
  },
  avgBear: function() {
    // if(!this.sentimentSum.avgBear) { return this.LastPrice.toFixed(2); }
    // return parseFloat(this.sentimentSum.avgBear).toFixed(2);
    return this.avgBear;
  }
};

Template.stockStats.helpers(stockHelpers);
Template.stockSentiment.helpers(stockHelpers);
Template.stockNav.helpers($.extend(stockHelpers, {
  statsClass: function() {
    if(Session.get('currentView') === 'stats')
      return 'active';
    else
      return '';
  },
  sentimentClass: function() {
    if(Session.get('currentView') === 'sentiment')
      return 'active';
    else
      return '';
  }
}));

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
  console.log(this);
  var num_bull = this.data.numBull;
  var num_bear = this.data.numBear;
  console.log(num_bull);
  console.log(num_bear);
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
