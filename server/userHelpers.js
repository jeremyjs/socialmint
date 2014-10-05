Meteor.methods({
  setAlert: function(opt) {
    alerts = Stocks.findOne({ Symbol: opt.symbol }).Alerts || {};

    alerts[opt.userId] = {
      high: opt.high,
      low: opt.low
    };

    Stocks.update({ Symbol: opt.symbol }, { $set: { Alerts: alerts } });

    var message = "New ";

    if (opt.high && opt.low) {
    	message += "alerts added for " + opt.name + "  (" + opt.symbol + "):\n\nHigh = \$" + opt.high + "\nLow = \$" + opt.low;
    } else {
    	message += "alert added for " + opt.name + "  (" + opt.symbol + "):\n\n";
    	if (opt.high) {
    		message += "High = \$" + opt.high;
    	} else {
    		message += "Low = \$" + opt.low;
    	};
    };
    

    Meteor.call('sendText', message);
  }
})