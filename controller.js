    angular.module('myApp').controller('myController', function($scope, APIservice) {
        APIservice.getData().then(function(response) {
            $scope.departments = response.data;
            $scope.departmentName;
            $scope.departmentForEditOrDelete;

            $scope.addDepartment = function(val) {
                /*angular.forEach($scope.departments, function(value, key) {
                    if ($scope.departments[key]._id == val) {
                        $scope.dataEmployee = $scope.departments[key]._id;
                    }
                });*/
                $scope.departments.push({
                    "_id": val,
                    "index": ($scope.departments.length + 1),
                    "names": []
                });
               // $scope.clearData();
            };
            
            $scope.editDepartment = function(val) {
                if (($scope.departmentName == undefined) || (!angular.isNumber($scope.departmentForEditOrDelete))) {
                    return;
                }
               /* angular.forEach($scope.departments, function(value, key) {
                    if ($scope.departments[key]._id == val) {
                        $scope.departments[key]._id = $scope.dataEmployee;
                        $scope.dataEmployee = undefined;
                    }
                });*/
                //console.log($scope.dataEmployee);
                $scope.departments[$scope.departmentForEditOrDelete]._id = $scope.departmentName;
                //$scope.clearData();
            };

            $scope.delDepartment = function(val) {
                /*angular.forEach($scope.departments, function(value, key) {
                    if ($scope.departments[key]._id == val) {
                        $scope.departments[key]._id = undefined;
                        $scope.dataEmployee = undefined;
                    }
                });*/
                    console.log($scope.departmentForEditOrDelete);
                    $scope.departments[$scope.departmentForEditOrDelete]._id == undefined;
                    //$scope.clearData();
                
            }

            $scope.getIndex = function(val){
                $scope.departmentForEditOrDelete = val;
                //console.log($scope.departmentForEditOrDelete); 
            }
            $scope.clearData = function(){
                $scope.departmentName = undefined;
                $scope.departmentForEditOrDelete = undefined;
                //document.querySelectorAll("departmentGroup").checked = false;
            }
        });
    });