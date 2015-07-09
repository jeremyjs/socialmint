
Template.introHeader.helpers({
  headerClass: function () {
    var route = Router.current().route.getName();
    return (route === 'about' || route === 'contact') ? 'intro-header-sm' : '';
  }
});
