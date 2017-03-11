//Define angular app
var app = angular.module('TaskManager', []); 

//controllers
app.controller('taskController', function($scope) {
    //var dateSaved = $scope.date('');
    $scope.saved = localStorage.getItem('taskItems');
    $scope.taskItem = (localStorage.getItem('taskItems')!==null) ? 
    JSON.parse($scope.saved) : [ {newTaskTitle: "Why not add a task?", date: $scope.today, complete: false}];
    localStorage.setItem('taskItems', JSON.stringify($scope.taskItem));

    $scope.newTaskTitle = null;
    $scope.newTaskDescription = null;
    $scope.newTaskDate = null;
    $scope.newTaskId = null;

    

    $scope.addNew = function () {
        
        $scope.newTaskId++;
        
        if ($scope.newTaskDate == null || $scope.newTaskDate == '') {
            $scope.taskItem.push({
                title: $scope.newTaskTitle,
                description: $scope.newTaskDescription,
                date: "No deadline",
                complete: false,
                id: $scope.newTaskId
            }) 
        } else {
            $scope.taskItem.push({
                title: $scope.newTaskTitle,
                description: $scope.newTaskDescription,
                date: $scope.newTaskDate,
                complete: false,
                id: $scope.newTaskId
            })
        };
        $scope.newTaskTitle = '';
        $scope.newTaskDescription = '';
        $scope.newTaskDate = '';
        $scope.newTaskId = '';
        localStorage.setItem('taskItems', JSON.stringify($scope.taskItem));
    };
    
    $scope.deleteTask = function (item) {
        
        var index = $scope.taskItem.indexOf(item);
        $scope.taskItem.splice(index, 1  );
//    $scope.taskItem.splice( $scope.taskItem.indexOf('taskItems'), 1 );
//    $scope.taskItemFinish.splice( $scope.taskItem.indexOf('taskItems.complete'), 1 );
//       $scope.taskItem.splice(this.$index, 1);
//      $scope.taskItemFinish.splice(this.$index, 1);
//        var completedTask = $scope.taskItem;
//        $scope.taskItem = [];
//        angular.forEach(completedTask, function (taskItem) {
//            if (!taskItem.complete) {
//                $scope.taskItem.push(taskItem);
//            }
//        });
        localStorage.setItem('taskItems', JSON.stringify($scope.taskItem));
    };
    
    $scope.editTask = function () {
        
        localStorage.setItem('taskItems', JSON.stringify($scope.taskItem));
        
    }
    

    
    $scope.save = function () {
        
        localStorage.setItem('taskItems', JSON.stringify($scope.taskItem));
        
    }
});