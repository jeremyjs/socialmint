// input: takes a Perception object
// output: returns an object containing the number of predictions and the
// average predicted prices or returns undefined if the prediction is undefined,
// the sentiments hash of the prediction is undefined, or the number of
// predictions is zero
calculateSentiment = function (perception) {
  if(!perception) {
    console.log("Error: Tried to calculate sentiment of undefined perception.");
    return;
  }

  var sentiments = perception.Sentiments;

  if(!sentiments) {
    console.log("Error: Tried to calculate sentiment of undefined sentiments \
                 hash for perception with _id: ", perception._id);
    return;
  }

  var num_bear = 0, num_bull = 0, total_bear = 0, total_bull = 0;

  for (var key in sentiments) {
    sentiment = sentiments[key];
    if(sentiment['bull'] !== null) {
      total_bull += sentiment['bull'];
      num_bull++;
    }
    else if(sentiment['bear'] !== null) {
      total_bear += sentiment['bear'];
      num_bear++;
    }
    else {
      console.log("Warning: Both sentiments are null in hash with userId: ", key);
    }
  }

  // avg is undefined if num == 0
  var avg_bear = total_bear / num_bear;
  var avg_bull = total_bull / num_bull;

  return {
    avg_bear: avg_bear,
    avg_bull: avg_bull,
    num_bear: num_bear,
    num_bull: num_bull
  }
}
