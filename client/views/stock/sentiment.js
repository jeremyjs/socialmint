Meteor.template.stockSentiment.rendered = function(){
    var sym = $.url().param('symbol') || 'TSLA';
    var dur = $.url().param('duration') || 3650;
    
    new Markit.InteractiveChartApi(sym, dur);
};

Highcharts.theme = {
    colors: ['#50B432', '#C53030', '#058DC7', '#ED561B', '#DDDF00', '#24CBE5', '#64E572', 
             '#FF9655', '#FFF263', '#6AF9C4']
};

// Apply the theme
Highcharts.setOptions(Highcharts.theme);


function setAlerts () {
    var message = "This is a test. High = "
        +document.getElementById("high-value").value
        +" Low = "
        +document.getElementById("low-value").value;

    alert(message);

    sendText(message);
}
