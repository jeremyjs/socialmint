Stocks = new Mongo.Collection('stocks');

var notifier = function (id, stock) {
	
	console.log(stock);
	
	var alerts = stock.Alerts;
	for (var key in alerts) {
		var alert = alerts[key];
		if (stock.LastPrice < alert[low]) {

			var message = stock.Name + "  (" + stock.Symbol + ")  " + "has just dropped to $" + stock.LastPrice 
							+ ", which is below your alert of $" + alert[low];
		} else if (stock.LastPrice == alert[low]) {

			var message = stock.Name + "  (" + stock.Symbol + ")  " + "has just dropped to $" + stock.LastPrice 
							+ ", which is exactly your alert of $" + alert[low];
		} else if (stock.LastPrice > alert[high]) {

			var message = stock.Name + "  (" + stock.Symbol + ")  " + "has just dropped to $" + stock.LastPrice 
							+ ", which is above your alert of $" + alert[high];
		} else if (stock.LastPrice == alert[high]) {

			var message = stock.Name + "  (" + stock.Symbol + ")  " + "has just dropped to $" + stock.LastPrice 
							+ ", which is exactly your alert of $" + alert[high];
		} else {	continue;	};
		
		Meteor.call('sendText', message);
	}
}

Stocks.find().observeChanges({

	added: notifier,
	changed: notifier
});