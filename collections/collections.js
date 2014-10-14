
// TODO: make the initializer depend on this spec
// TODO: calculate count/avg lazily?
/*
stock = {
  name: string,
  symbol: string,
  last_price: number,
  change: number,
  change_percent: number,
  timestamp: string,
  ms_date: number,
  market_cap: number,
  volume: number,
  change_ytd: number,
  change_percent_ytd: number,
  high: number,
  low: number,
  open: number,
  alerts: {
    high: {
      count: number,
      avg: number,
      USERID: number,
      ...
    },
    low: {
      count: number,
      avg: number,
      USERID: number,
      ...
    }
  },
  predictions: {
    high: {
      count: number,
      avg: number,
      USERID: number,
      ...
    },
    low: {
      count: number,
      avg: number,
      USERID: number,
      ...
    }
  }
}
*/

Stocks = new Mongo.Collection('stocks');


// var notifier = function (id, stock) {

//   console.log("stock changed: ", stock);

//   var price = stock.LastPrice;
//   var alerts = Alerts;

//   for (var key in alerts) {
//     var alert = alerts[key];
//     var low = alerts[low];
//     var high = alerts[high];

//     var message = stock.Name + " (" + stock.Symbol + ") ";

//     if (price < low) {
//       message += "has just dropped to \$" + price
//               + ", which is below your alert of \$" + low;
//     }
//     else if (price === low) {
//       message += "has just dropped to \$" + price
//               + ", which is exactly your alert of \$" + low;
//     }
//     else if (price > high) {
//       message += "has just increased to \$" + price
//               + ", which is above your alert of \$" + high;
//     }
//     else if (price === high) {
//       message += "has just increased to \$" + price
//               + ", which is exactly your alert of \$" + high;
//     }
//     else {
//       continue;
//     }

//     Meteor.call('sendText', message);
//   }
// }

// Stocks.find().observeChanges({
//   changed: notifier
// });
