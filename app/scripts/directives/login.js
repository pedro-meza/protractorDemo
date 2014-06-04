'use strict';

angular.module('protractorDemoApp')
  .directive('login', function (Loginservice) {
    return {
      restrict: 'E',
      replace: true,
      template: "<div ng-click='toggleLogin()'><a>{{loginText()}}</a></div>",

      link: function(scope, elem) {

        scope.toggleLogin = function(){
            console.log('toggle');
            console.log('isLogin='+!Loginservice.isLogin);
            scope.$emit('loginEvent', !Loginservice.isLogin);
        }

        scope.loginText = function() {
              if (Loginservice.isLogin)  return 'Logout';
              return 'Login';
              console.log('loginStatus='+scope.loginStatus());
        }
      }
    };
  });
