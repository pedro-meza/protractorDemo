'use strict';

angular.module('protractorDemoApp')
    .factory('Loginservice', function() {

        var isAuthenticated = false;
        var hasError = false;
        var session = {};
        session.token = '';
        session.name = '';

        return {
            isLogin: false,
            login: function(user){
                if(user.name === 'admin' && user.password === 'password'){
                    return {name:'admin', token: '777'}
                } else if(user.name === 'fanboy' && user.password === 'password'){
                    return {name:'fanboy', token: '111'}
                } else {
                    return null;
                }
            },
            initSession: function(name, token) {
                session.name = name;
                session.token = token;
            },
            getSession: function(){
               return session;
            }
        }
    });
