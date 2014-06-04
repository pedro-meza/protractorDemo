'use strict';

angular.module('protractorDemoApp')
  .controller('LoginCtrl', function ($rootScope, $scope, Loginservice, $state) {
        //******** INIT ************
        $scope.hasError = false;
        $scope.user = {};
        $scope.loginVisible = !Loginservice.isAuthenticated;

        $scope.login = function(user){
            console.log('user='+JSON.stringify(user));
            var session = Loginservice.login(user);
            console.log('session='+JSON.stringify(session));
            if(session) {
                //SUCCESS
                //CHANGE LOGIN DIRECTIVE TEXT
                Loginservice.initSession(user.name, user.token);
                Loginservice.isLogin = true;
                $scope.loginVisible = false;
            } else {
                //ERROR
                $scope.hasError = true;
            }
        }

        $scope.cancel = function(){
            $scope.user = {};
            $scope.loginVisible = false;
        }

        $rootScope.$on('loginEvent', function(event, openLogin){
            if(openLogin){
               $scope.loginVisible = openLogin;
            } else {
                Loginservice.initSession('','');
                Loginservice.isLogin = false;
                $state.go('main');
            }
        });
  });
