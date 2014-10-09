// TODO: remove Stocks and use sentiments and alerts instead
Stocks = new Mongo.Collection('stocks');

Sentiments = new Mongo.Collection('sentiments');
/* perception = {
 *   symbol: string,
 *   predictions: {
 *     userId: {
 *       bear: float,
 *       bull: null
 *     }, ...
 *   }
 * }
 */

Alerts = new Mongo.Collection('alerts');

var notifier = function (id, stock) {

  console.log("stock changed: ", stock);

  var price = stock.LastPrice;
  var alerts = Alerts;

  for (var key in alerts) {
    var alert = alerts[key];
    var low = alerts[low];
    var high = alerts[high];

    var message = stock.Name + " (" + stock.Symbol + ") ";

    if (price < low) {
      message += "has just dropped to \$" + price
              + ", which is below your alert of \$" + low;
    }
    else if (price === low) {
      message += "has just dropped to \$" + price
              + ", which is exactly your alert of \$" + low;
    }
    else if (price > high) {
      message += "has just increased to \$" + price
              + ", which is above your alert of \$" + high;
    }
    else if (price === high) {
      message += "has just increased to \$" + price
              + ", which is exactly your alert of \$" + high;
    }
    else {
      continue;
    }

    Meteor.call('sendText', message);
  }
}

Stocks.find().observeChanges({
  changed: notifier
});
