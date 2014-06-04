'use strict';

angular
  .module('protractorDemoApp', [
    'ui.router',
    'ngCookies',
    'ngResource',
    'ngSanitize'
  ])
  .config(function ($urlRouterProvider, $stateProvider) {
    $urlRouterProvider.otherwise('/main');

    $stateProvider.state('main', {
            url: '/main',
            templateUrl: "views/main.html",
            controller: "MainCtrl"
        }).state('events', {
        url: '/events',
        templateUrl: "views/events.html",
        controller: "EventsCtrl"
    });
  });
