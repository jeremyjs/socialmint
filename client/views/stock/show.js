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
    sentiments = this.Sentiments || {};
    which = $('#bulls-or-bears option:selected').val();

    if(which === "Bullish") {
      value = $('#sentiment-value').val();
      sentiments[Meteor.userId()] = {
        bull: value,
        bear: null
      };
    }
    else if(which === "Bearish") {
      value = $('#sentiment-value').val();
      sentiments[Meteor.userId()] = {
        bull: null,
        bear: value
      };
    }

    Stocks.update(this._id, { $set: { Sentiments: sentiments } });
  },
  'click #set-button': function(e) {
    Meteor.call('setAlert', {
      userId: Meteor.userId(),
      symbol: this.Symbol,
      high: $('#high-value').val(),
      low: $('#low-value').val()
    }, function(err, res) {
      console.log(err);
      console.log(res);
    });
  }
});
