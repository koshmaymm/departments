    angular.module('myApp').controller('myController', function($scope, APIservice) {
        APIservice.getData($scope.addDepartment = function(val) {
            angular.forEach($scope.departments, function(value, key) {
                if ($scope.departments[key]._id == val) {
                    $scope.dataEmployee = $scope.departments[key]._id;
                }
            });
        }, $scope.editDepartment = function(val) {
            if ($scope.dataEmployee == undefined) {
                return;
            }
            angular.forEach($scope.departments, function(value, key) {
                if ($scope.departments[key]._id == val) {
                    $scope.departments[key]._id = $scope.dataEmployee;
                    $scope.dataEmployee = undefined;
                }
            });
        }, $scope.delDepartment = function(val) {
            if ($scope.dataEmployee !== val) {
                return;
            }
            angular.forEach($scope.departments, function(value, key) {
                if ($scope.departments[key]._id == val) {
                    $scope.departments[key]._id = undefined;
                    $scope.dataEmployee = undefined;
                }
            });
        }).then(function(response) {
            $scope.departments = response.data;
            $scope.dataEmployee;
        });
    });