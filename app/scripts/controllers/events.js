'use strict';

angular.module('protractorDemoApp')
  .controller('EventsCtrl', function ($scope, Events, Loginservice, $state) {
        var mySession = Loginservice.getSession();
        $scope.isAdmin = false;

        if(!mySession.name){
            $state.go('main');
            console.log('Session.name='+mySession.name);
        } else {

        }
        $scope.events =  Events.getEvents();

        $scope.$watch('mySession',function(){
            console.log('mySession='+JSON.stringify(mySession));
            if(mySession.name === 'admin') {
                $scope.isAdmin = true;
            } else {
                $scope.isAdmin = false;
            }
        })

  });
