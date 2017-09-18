    angular.module('myApp').controller('myController', function($scope, APIservice) {
        $scope.dataDepartment;
        $scope.departmentForEditOrDelete;
        $scope.chekedDepartment = myForm;
        APIservice.getData().then(function(response) {
            $scope.departments = response.data;
        });

        $scope.addDepartment = function(val) {
            $scope.departments.push({
                "_id": val,
                "index": ($scope.departments.length + 1),
                "names": []
            });
            $scope.clearData();
        };

        $scope.editDepartment = function(val) {
            if (!$scope.dataDepartment) {
                return;
            }

            angular.forEach($scope.departments, function(value, key) {
                if ($scope.departments[key]._id === $scope.departmentForEditOrDelete) {
                    $scope.departments[key]._id = $scope.dataDepartment;
                    
                }
            });
            $scope.clearData();
        };

        $scope.delDepartment = function(val) {
            if (!$scope.departmentForEditOrDelete) {
                return;
            }

            angular.forEach($scope.departments, function(value, key) {
                if ($scope.departments[key]._id === $scope.departmentForEditOrDelete) {
                    $scope.departments[key]._id = undefined;
                }

            });
            $scope.clearData();
        }

        $scope.getIndex = function(val) {
            $scope.departmentForEditOrDelete = val;
        }

        $scope.clearData = function() {
            $scope.dataDepartment = undefined;
            $scope.chekedDepartment.reset();          
        }
    });