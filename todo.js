window.onload = function (){
angular.module('myApp', [])
  .controller('myController', function() {
    var employees = this;
    employees.dataL = "HI";
    employees.departments = {};
    employees.getData = function(){
        console.log("HI");
        employees.data = new XMLHttpRequest();
        employees.data.open('GET', 'dataList.json', true);
        employees.data.send();
        employees.data.onreadystatechange = function () {
            if (employees.data.readyState != 4) return;
            if (employees.data.status != 200) {
                alert(employees.data.status + ': ' + employees.data.statusText);
            } else {
                employees.dataList = JSON.parse(employees.data.responseText);
                    for (var i=0; i<employees.dataList.length; i++){
                        employees.departmentName, employees.employeesList;
                        for (var prop in employees.dataList[i]) {
                            if (prop == "_id"){
                                employees.departmentName = employees.dataList[i][prop];
                            }
                            if (prop == "names"){
                                employees.employeesList = employees.dataList[i][prop];     
                            }  
                        }
                        employees.showPersonsCL(employees.departmentName, employees.employeesList);
                    }
            }
        }
    } 
    employees.showPersonsCL = function (departmentName,employeesList) {
        var name = departmentName;
        employees.departments[name] = employeesList;
        
    }
    employees.getData();
    console.log(employees.departments);
   

});
}