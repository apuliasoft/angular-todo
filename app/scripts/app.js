'use strict';

angular.module('todo', ['firebase'])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/list.html',
        controller: 'ListCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
