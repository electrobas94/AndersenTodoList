( function () {
    'use strict';

    angular.module( 'todo_app' ).controller( 'TodoListController', TodoListController );

    //TodoListController.$inject = [ 'helperService', 'dataservice', '$q' ];

    function TodoListController() {
        var vm = this;

        vm.active_user = {};

        // lists include files list(meetings and task list)
        vm.file_todo_list = [ ];
        vm.file_meet_list = [ ];

        // list include task and meeting active file
        vm.todo_l = [ ];
        vm.meet_l = [ ];

        // Link on todo or meeting list
        vm.active_list = vm.todo_l;

        vm.newTodoList = function (){
            vm.file_todo_list.push( 1 );
        };

        vm.newMeetingList = function (){
            vm.file_meet_list.push( 1 );
        };

        vm.newItem = function (){
            vm.active_list.push( 1 );
        };
    }
} )();