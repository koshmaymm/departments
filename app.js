window.onload = function () {
    angular.module('myApp', [])
        .service('APIservice', function APIService($http) {
            this.getData = function () {
                return $http.get('dataList.json');
            }
        })
        .controller('myController', function ($scope, APIservice) {
            APIservice.getData().then(function (response) {
                $scope.departments = response.data;
                $scope.dataL = "HI";
            });
        });
}