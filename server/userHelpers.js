Meteor.methods({
  setAlert: function(opt) {
    alerts = Stocks.findOne({ Symbol: opt.symbol }).Alerts || {};

    alerts[opt.userId] = {
      high: opt.high,
      low: opt.low
    };

    Stocks.update({ Symbol: opt.symbol }, { $set: { Alerts: alerts } });
  }
})