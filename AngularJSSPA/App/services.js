'use strict';

// Demonstrate how to register services
// In this case it is a simple value service.
angular.module('app.services', [])

    .value('version', '0.1')

    .service('apiService', ['$http', function ($http) {

        var url = 'http://jsonserver.azurewebsites.net/people';

        return {
            getAllStuff: function() {
                return $http.get(url);
            },
            getStuff: function (id) {
                return $http.get(url + '/' + id);
            },
            putStuff: function (id, data) {
                return $http.put(url + '/' + id, data);
            },
            postStuff: function (id, data) {
                return $http.post(url + '/' + id, data);
            },
            deleteStuff: function (id) {
                return $http.delete(url + '/' + id);
            }
        }
    }])

    .service('resolveTestService', ['$http', function ($http) {
        return {
            getResolveResult: function () {
                return $http.get('http://jsonserver.azurewebsites.net/people');
                //return $http.get('http://localhost:3000/people');
                //return $http.get('http://jsonplaceholder.typicode.com/todos');
            }
        }
    }]);

//.service("searchResultService", ['$http', function ($http) {
//    return {
//        getSearchResult: function (queryparams) {
//            return $http.get('https://itunes.apple.com/search?term=' + queryparams);
//        }
//    }
//}])

//.service("lookupResultService", ['$http', function ($http) {
//    return {
//        getlookupResult: function (queryparams) {
//            return $http.get('https://itunes.apple.com/lookup?=' + queryparams);
//        }
//    }
//}]);