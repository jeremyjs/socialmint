// Meteor.methods({
//   setAlert: function(opt) {
//     alerts = Stocks.findOne({ Symbol: opt.symbol }).Alerts || {};

//     alerts[opt.userId] = {
//       high: opt.high,
//       low: opt.low
//     };

//     Stocks.update({ Symbol: opt.symbol }, { $set: { Alerts: alerts } });

//     var message = "New alert added for " + opt.name + "  (" + opt.symbol + "):\n\n";
//     if (opt.high) {
//         message += "High = \$" + opt.high;
//     }
//     if (opt.low) {
//         message += "Low = \$" + opt.low;
//     };

//     Meteor.call('sendText', message);
//   }
// })