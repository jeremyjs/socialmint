calculateSentiment = function (perception) {
  if(!perception) { return null; }
  sentiments = stock.Sentiments;
  if(!sentiments || sentiments === {}) {
    return {};
  }
  var total_bull = 0, total_bear = 0, num_bull = 0, num_bear = 0;
  for (var key in sentiments) {
    s = sentiments[key];
    console.log(s);
    if(s['bull']) {
      total_bull += parseFloat(s['bull']);
      num_bull++;
    }
    if(s['bear']) {
      total_bear += parseFloat(s['bear']);
      num_bear++;
    }
  }
  var avgBear = total_bear / num_bear;
  var avgBull = total_bull / num_bull;
  return {
    avgBear: avgBear,
    avgBull: avgBull,
    num_bear: num_bear,
    num_bull: num_bull
  }
}