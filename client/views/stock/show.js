
// TODO: convert to a controller
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
