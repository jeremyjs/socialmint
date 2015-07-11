
Template.tickerSearch.events({
  'submit form.ticker-search': function (e) {
    e.preventDefault();
    var symbol = $('#navbar-search-box').val();
    Router.go('/stock/show/' + symbol);
  }
});
