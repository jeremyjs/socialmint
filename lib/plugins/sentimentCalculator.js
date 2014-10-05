calculateSentiment = function (stock) {
  if(!stock) { return null; }
  sentiments = stock.Sentiments;
  if(!sentiments || sentiments === {}) {
    return null;
  }
  var bull = 0, bear = 0, num_bull = 0, num_bear = 0;
  for (var key in sentiments) {
    s = sentiments[key];
    console.log(s);
    if(s['bull']) {
      bull += parseInt(s['bull']);
      num_bull++;
    }
    if(s['bear']) {
      bear += parseInt(s['bear']);
      num_bear++;
    }
  }
  return {
    bear: bear,
    bull: bull,
    num_bear: num_bear,
    num_bull: num_bull
  }
}