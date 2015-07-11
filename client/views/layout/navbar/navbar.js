
Template.navbar.helpers({
  loggedIn: function () {
    return !!Meteor.userId();
  }
});

Template.navbar.events({
  'click .logout': function () {
    Meteor.logout();
  },

  'submit form.navbar-search': function (e) {
    e.preventDefault();
    var symbol = $('#navbar-search-box').val();
    Router.go('/stock/show/' + symbol);
  }
});
