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

                $scope.dataLL;

                $scope.addDepartment = function(val){
                    
                    for (var i=0;i<$scope.departments.length;i++){
                        if ($scope.departments[i]._id == val){
                            console.log($scope.departments[i]._id);
                            $scope.dataLL = $scope.departments[i]._id; 
                        }
                    }
                    
                }

                $scope.editDepartment = function(val){
                    if($scope.dataLL == undefined) {
                        return;
                    }
                    for (var i=0;i<$scope.departments.length;i++){
                        if ($scope.departments[i]._id == val){
                            $scope.departments[i]._id = $scope.dataLL;
                            $scope.dataLL =  undefined;
                        }
                    }
                }

                $scope.delDepartment = function(val){
                    if($scope.dataLL !== val) {
                        return;
                    }
                    for (var i=0;i<$scope.departments.length;i++){
                        if ($scope.departments[i]._id == val){
                            $scope.departments[i]._id = undefined; 
                        }
                    }
                }
            });
        });
}