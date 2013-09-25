'use strict';

angular.module('todo')
  .controller('ListCtrl', function ($scope, angularFire) {
        var ref = new Firebase("https://astodolist.firebaseio.com/");
        $scope.todos = [];
        angularFire(ref, $scope, "todos");

        $scope.add = function() {
            if($scope.task){
                $scope.todos.push({
                    text: $scope.task,
                    done: false
                });
                $scope.task = '';
            }
        };

        $scope.delete = function($index) {
            $scope.todos.splice($index, 1);
        };

        $scope.clear = function() {
            $scope.todos = $scope.todos.filter(function(todo){
                return todo.done === false;
            });
        };
  });
