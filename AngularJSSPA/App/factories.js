'use strict';

angular.module('app.factories', [])

    .factory('resolveTestResolve', ['resolveTestService', '$q', function (resolveTestService, $q) {
        return function () {
            var resolveresult = resolveTestService.getResolveResult();

            //possible to include multiple http results in $q.all
            return $q.all([resolveresult]).then(function (results) {
                return {
                    data: results[0].data
                };
            });
        }
    }]);

//.factory("searchResultResolve", ['searchResultService', '$route', '$q', function (searchResultService, $route, $q) {
//    return function () {
//        console.log('hit')
//        console.log($route.current.params)

//        var term = $route.current.params.queryparams;
//        var country;
//        var media;
//        var entity;
//        var attribute;
//        var limit;
//        var lang = en_us; //en_us, ja_jp
//        var version = 2; //1, 2
//        var explicit = true; //Yes, No

//        var queryparams = "term=" + term;

//        var data = searchResultService.getSearchResult(queryparams);

//        //possible to include multiple http results in $q.all
//        return $q.all([data]).then(function (results) {
//            return {
//                data: results[0].data
//            };
//        });
//    }
//}])

//.factory("lookupResultResolve", ['lookupResultService', '$route', '$q', function (lookupResultService, $route, $q) {
//    return function () {
//        var id; //iTunes artist ID or iTunes ID
//        var amgArtistId; //AMG artist ID, can lookup multiple by comma separating ID's
//        var entity; //album, song,
//        var limit;
//        var sort;
//        var upc; //look up an album or video by its UPC
//        var amgAlbumId; //AMG Album ID
//        var amgVideoId; //AMG Video ID
//        var isbn; //look up a book by its 13 digit ISBN

//        var queryparams = "";

//        var data = lookupResultService.getLookupResult(queryparams);

//        return $q.all([data]).then(function (results) {
//            return {
//                lookupResult: results[0].data
//            };
//        });
//    }
//}]);