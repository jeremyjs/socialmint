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
  'click #submit-button': function(a, b, c) {
    sentiments = this.Sentiments;

    bull = $('#bull-value').val();
    bear = $('#bear-value').val();
    console.log(bull);
    console.log(bear);

    sentiments[Meteor.userId] = {
      bull: bull,
      bear: bear
    };

    Stocks.update({_id: this._id}, {
      Sentiments: sentiments
    });
  }
})