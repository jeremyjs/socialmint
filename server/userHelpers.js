Meteor.methods({
  setAlert: function(opt) {
    alerts = Meteor.users.findOne({_id: opt.userId }).alerts || {};

    alerts[opt.symbol] = {
      high: opt.high,
      low: opt.low
    };

    Meteor.users.update(opt.userId, { $set: { alerts: alerts } });
  }
})