let myapp=angular.module("Myapp",[]);

let mycontroller=function($scope){
$scope.message="Hello World";

}
myapp.controller("MyController",mycontroller);

let JSONController=function($scope){
    let Student={

        FirstName: "Sai Kiran",
        LastName: "Doddapaneni",
        Email: "s534736@nwmissouri.edu"
    }
    $scope.Student=Student;
}
myapp.controller("JSONController",JSONController);