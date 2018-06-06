var app = angular.module('myApp', []); 
app.controller('todoCtrl', function($scope) {
    $scope.todoList = [{todoText:'First Item', done:false}];


    $scope.todoAdd = function() {
        $scope.todoList.push({todoText:$scope.todoInput, done:false});
        $scope.todoInput = "";
    };

    $scope.done = function() {
        var oldList = $scope.todoList;
        var discardedList = $scope.removeList;
        $scope.todoList = [];
        $scope.removeList = [];
        angular.forEach(oldList, function(x) {
            if (!x.done) $scope.todoList.push(x);
            if (x.done) $scope.removeList.push(x);

        });
        angular.forEach(discardedList, function(x) {
            $scope.removeList.push(x);

        });
    };


    $scope.remove = function() {
        var oldList = $scope.todoList;
        $scope.todoList = [];
        angular.forEach(oldList, function(x) {
            if (!x.done) $scope.todoList.push(x);
        });
    };
});
