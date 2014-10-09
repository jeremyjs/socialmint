Template.navbar.events({
  'keydown enter': function (e) {
    e.preventDefault(); // don't refresh
    console.log('in keydown enter event: ', e)
    var $search = $('#navbar-search-box');
    console.log('$search: ', $search);
    if($search.is(':focus')) {
      console.log('search is focus');
      // Router.go('/stocks/' + $search.val() + '/stats');
    }
  }
})