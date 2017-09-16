    angular.module('myApp')
    .service('APIservice', function APIService($http) {
        this.getData = function() {
            return $http.get('dataList.json');
        }
    })