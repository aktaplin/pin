Router.map(function() {
  this.route('home', {
    path: '/',
    template: 'home',
    layoutTemplate: 'layout',
    loginRequired: {
      name: 'login',
      shouldRoute: false
    }
  });

  this.route('login', {
    path: '/login',
    template: 'login',
    layoutTemplate: 'login',
    redirectOnLogin: true,
  });

  this.route('tags', {
    path: '/tags',
    template: 'tagBookmarks',
    layoutTemplate: 'layout',
    loginRequired: {
      name: 'login',
      shouldRoute: false
    }
  });
});
