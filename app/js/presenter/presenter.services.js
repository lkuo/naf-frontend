/**
 * Created by Hu on 2016-02-06.
 */
(function() {
    'use strict';

    angular.module('naf.presenter')
        .factory('Presenter', ['$resource', 'Config', presenterFactory]);

    //Presenter service

    function presenterFactory($resource, Config) {
        return $resource(Config.api + '/presenter/:presenter_id', {}, {
           /* // get presenter profile
            get: {
                method: 'GET',
                params: {presenter_id: '@presenter_id'}
            },
            //update presenter profile*/
            update: {
                url: Config.api + '/presenter',
                method: 'PUT'
            },
            // get teacher list of the presenter
            getTeachers: {
                url: Config.api + '/presenter/:presenter_id/teachers',
                method: 'GET',
                params: {presenter_id: '@presenter_id'},
                isArray: true
            },
            // get courses list of the presenter
            getCourses: {
                url: Config.api + '/presenter/:presenter_id/courses',
                method: 'GET',
                params: {presenter_id: '@presenter_id'},
                isArray: true
            },
            //get upcoming lectures list of the presenter
            getLectures: {
                url: Config.api + '/presenter/:presenter_id/lectures',
                method: 'GET',
                params: {presenter_id: '@presenter_id'},
                isArray: true
            }
        });
    }

})();