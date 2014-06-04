'use strict';

angular.module('protractorDemoApp')
  .service('Events', function Events() {
    // AngularJS will instantiate a singleton by calling "new" on this function
  });

angular.module('protractorDemoApp')
    .factory('Events', function() {
        var events = [];
        events.push({id:1, title:'Cannes Lions Festival' , eventDate: new Date(2014, 6, 15)})
        events.push({id:2, title:'Carnegie Hall' , eventDate: new Date(2014, 7, 1)})
        events.push({id:3, title:'Pepsi Center' , eventDate: new Date(2014, 8, 13)})


        return {
            getEvents: function(){
                return events;
            },
            addEvent: function(myDate, myTitle){
                events.push({title: myTitle, eventDate: myDate })
            }
        }
    });
