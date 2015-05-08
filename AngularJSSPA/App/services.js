'use strict';

// Demonstrate how to register services
// In this case it is a simple value service.
angular.module('app.services', [])

    .value('version', '0.1')

    .service('apiService', ['$http', function ($http) {
        return {
            getStuff: function (id) {
                return $http.get('http://localhost:3000/' + id);
            },
            putStuff: function (id, data) {
                return $http.put('http://localhost:3000/' + id, data);
            },
            postStuff: function (id, data) {
                return $http.post('http://localhost:3000/' + id, data);
            },
            deleteStuff: function(id) {
                return $http.delete('http://localhost:3000/' + id);
            }
        }
    }])

    .service('restApiService', ['$resource', function ($resource) {
        return {
            getStuff: function (id) {
                return $resource.get('http://localhost:3000/' + id);
            },
            putStuff: function (id, data) {
                return $resource.put('http://localhost:3000/' + id, data);
            },
            postStuff: function (id, data) {
                return $resource.post('http://localhost:3000/' + id, data);
            },
            deleteStuff: function (id) {
                return $resource.delete('http://localhost:3000/' + id);
            }
        }
    }])

    .service('resolveTestService', ['$http', function ($http) {
        return {
            getResolveResult: function () {
                return $http.get('http://localhost:3000');
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