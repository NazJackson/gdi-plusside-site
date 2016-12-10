(function () {
    'use strict';

    angular
        .module('plusSideApp')
        .factory('DatabaseService', DatabaseService);

    DatabaseService.$inject = ['$http'];
    function DatabaseService($http) {

        var uri = "http://localhost:3001/journal_entry"
        var config = {
            headers: {
                'Content-Type': 'application/json'
            }
        }
        var service = {
            getEntries: getEntries,
            postEntry: postEntry
        };

        return service;


        function getEntries() {
            return $http.get(uri, config)
                .then(getEntriesSuccess, getEntriesFailed);

            function getEntriesSuccess(response) {
                return response.data.data;
            };

            function getEntriesFailed(error) {
                console.log(error);
            };
        };

        function postEntry(entry) {
            $http.post(uri, entry, config)
                .then(postEntrySuccess, postEntryFailed)

            function postEntrySuccess(response) {
                console.log(response);
            };
            function postEntryFailed(error) {
                console.log(error);
            };
        };
    };
})();
