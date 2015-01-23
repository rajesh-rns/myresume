/**
 * Created by rajeshs on 1/22/2015.
 */
var todoModule = angular.module("todoApp", []);
todoModule.controller("MainCtrl", function($scope){
    $scope.todos = [];

    $scope.add = function () {
        $scope.todos.push($scope.newtodo);
        $scope.newtodo = {};
    };

    $scope.delete = function(item) {
        var index = $scope.todos.indexOf(item);
        $scope.todos.splice(index, 1);
    };

    $scope.clearCompleted = function() {
        $scope.todos.forEach(function(item) {
            if(item.completed) {
                $scope.delete(item);
            }
        });
    }


});
