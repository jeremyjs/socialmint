
// TODO: convert to a controller
stockHelpers = {
  change: function () {
    return this.change.toFixed(2);
  },
  changeClass: function () {
    return this.change > 0 ? "positive" : "negative";
  },
  changeIsPositive: function () {
    return this.change > 0;
  },
  changePercent: function () {
    return this.change_percent.toFixed(2);
  },
  marketCap: function () {
    return this.market_cap.toPrecision(3);
  },
  volume: function () {
    return this.volume.toPrecision(3);
  },
  changePercentYTD: function () {
    return this.change_percent_ytd.toFixed(2);
  },
  // TODO: calculate count/avg lazily?
  avgBull: function() {
    return this.predictions.high.avg;
  },
  avgBear: function() {
    return this.predictions.low.avg;
  },
  numBull: function() {
    return this.predictions.high.count;
  },
  numBear: function() {
    return this.predictions.low.count;
  }
};

Template.stockStats.helpers(stockHelpers);
Template.stockSentiment.helpers(stockHelpers);

// TODO: rely on IronRouter helper rather than session
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
