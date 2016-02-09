/**
 * Created by Hu on 2016-02-07.
 */
(function() {
    'use strict';

    angular.module('naf.lecture')
        .factory('Lecture', ['$resource', 'Config', lectureFactory])
        .factory('Vimeo', ['$resource', 'Config', vimeoFactory]);

    //Lecture service

    function lectureFactory($resource, Config) {
        return $resource(Config.api + '/lecture/:lecture_id', {}, {
            //update lecture info*/
            update: {
                url: Config.api + '/lecture',
                method: 'PUT'
            }
        });
    }

    function vimeoFactory($resource, Config){
        return $resource(Config.vimeoApi + '/', {}, {
            getUser: {
                url: Config.vimeoApi + '/me',
                method: 'GET'
            }
        })
    }
})();