Meteor.methods({
	sendText: function (text) {

		twilioClient = Meteor.npmRequire('twilio')('AC684d54cb44bd455d3ec5e1a49e3f6d09', '53d4184fba04016a5450abac88340323');
		console.log(text);
		twilioClient.sendSms({
			to:   '+18152368052',
			from: '+18155069261',
			body: text
		}, function (err, res) {
			if (!err) {
				if (response.trim().toLowerCase().equals(buy)) {
					// buy given stock
				}
				if (response.trim().toLowerCase().equals(sell)) {
					// buy given stock
				}
			}
			else {
				console.log(err.message)
			}
		});
	}
});