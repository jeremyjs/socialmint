var sendText = function (text, callback) {

	twilioClient = Twilio('AC684d54cb44bd455d3ec5e1a49e3f6d09', '53d4184fba04016a5450abac88340323');
	twilioClient.sendSms({
		to:   '+15555555555',
		from: '+15555555555',
		body: text
	}, callback);  // callback(err, data)
};

onResponse = function (argument) {
	// body...
};