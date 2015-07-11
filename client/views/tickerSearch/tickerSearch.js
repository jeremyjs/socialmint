
Template.tickerSearch.events({
  'submit form.ticker-search': function (e) {
    e.preventDefault();
    var symbol = $(e.target).find('input.ticker-search-box').val();
    Router.go('/stock/show/' + symbol);
  }
});
