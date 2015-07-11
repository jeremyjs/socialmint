
Template.navbar.helpers({
  loggedIn: function () {
    return !!Meteor.userId();
  }
});

Template.navbar.events({
  'click .logout': function () {
    Meteor.logout();
  }
});
