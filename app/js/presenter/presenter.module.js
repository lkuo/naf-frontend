/**
 * Created by Leon on 2016/2/5.
 */
(function() {
    'use strict';

    angular.module('naf.presenter', [])
        .config(['$routeProvider', config]);

    function config($routeProvider){
        $routeProvider
            .when('/presenter/profile', {
                templateUrl: 'views/presenter/profile.html',
                controller: 'PresenterEditController'
            })
            .when('/presenter/teacher', {
                templateUrl: 'views/presenter/teacher.html',
                controller: 'PresenterEditController'
            })
            .when('/presenter/course', {
                templateUrl: 'views/presenter/course.html',
                controller: 'PresenterEditController'
            })
            .when('/presenter/:presenter_id', {
                templateUrl: 'views/presenter/show.html',
                controller: 'PresenterEditController'
            });
    }
})();
