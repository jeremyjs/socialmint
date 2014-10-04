Router.configure({
  layoutTemplate: 'layout'
});

Router.route('/stock/show/:symbol', {
  action: function () {
    this.render('showStock', {
      data: function() {
        symbol = this.params.symbol;
        stock = Stocks.findOne({Symbol: symbol});
        if(stock === undefined) {
          stock = Meteor.call('getStockData', symbol, function (err, res) {
            return res;
          });
        }
        stock = Stocks.findOne({Symbol: symbol});
        return stock;
      }
    });
  },
  onAfterAction: function () {
    symbol = this.params.symbol;
    sym = $.url().param('symbol') || symbol;
    dur = $.url().param('duration') || 3650;

    new Markit.InteractiveChartApi(sym, dur);
  },
  name: "showStock"
});

Router.route('/stock/sentiment/:symbol', {
  action: function () {
    this.render('stockSentiment', {
      data: function() {
        symbol = this.params.symbol;
        stock = Stocks.findOne({Symbol: symbol});
        if(stock === undefined) {
          stock = Meteor.call('getStockData', symbol, function (err, res) {
            return res;
          });
        }
        stock = Stocks.findOne({Symbol: symbol});
        return stock;
      }
    });
  },
  onLoad: function () {
   chart = new Highcharts.Chart({
        chart: {
            plotBackgroundColor: null,
            plotBorderWidth: null,
            plotShadow: false,
            renderTo: '#container'
        },
        title: {
            text: 'Community<br>Sentiment',
            align: 'center',
            verticalAlign: 'middle',
            y: 50
        },
        tooltip: {
            pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
        },
        plotOptions: {
            pie: {
                dataLabels: {
                    enabled: true,
                    distance: -50,
                    style: {
                        fontWeight: 'bold',
                        color: 'white',
                        textShadow: '0px 1px 2px black'
                    }
                },
                startAngle: -90,
                endAngle: 90,
                center: ['50%', '75%']
            }
        },
        series: [{
            type: 'pie',
            name: 'Sentiment',
            innerSize: '50%',
            data: [
                ['Bullish', 25],
                ['Bearish', 25],
            ]
        }]
    });
  },
  name: "stockSentiment"
});