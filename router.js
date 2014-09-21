Router.map(function() {
  this.route('home', {
    path: '/',
    template: 'home',
    layoutTemplate: 'layout',
    loginRequired: 'login',
    redirectOnLogin: true,
  });

  this.route('login', {
    path: '/login',
    template: 'login',
    layoutTemplate: 'login',
  });
});
