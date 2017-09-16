    angular.module('myApp')
    .controller('myController', function($scope, APIservice) {
        APIservice.getData($scope.addDepartment = function(val) {
            for (var i = 0; i < $scope.departments.length; i++) {
                if ($scope.departments[i]._id == val) {
                    console.log($scope.departments[i]._id);
                    $scope.dataEmployee = $scope.departments[i]._id;
                }
            }
        }, $scope.editDepartment = function(val) {
            if ($scope.dataEmployee == undefined) {
                return;
            }
            for (var i = 0; i < $scope.departments.length; i++) {
                if ($scope.departments[i]._id == val) {
                    $scope.departments[i]._id = $scope.dataEmployee;
                    $scope.dataEmployee = undefined;
                }
            }
        }, $scope.delDepartment = function(val) {
            if ($scope.dataEmployee !== val) {
                return;
            }
            for (var i = 0; i < $scope.departments.length; i++) {
                if ($scope.departments[i]._id == val) {
                    $scope.departments[i]._id = undefined;
                    $scope.dataEmployee = undefined;
                }
            }
        }).then(function(response) {
            $scope.departments = response.data;
            $scope.dataEmployee;
        });
    });
