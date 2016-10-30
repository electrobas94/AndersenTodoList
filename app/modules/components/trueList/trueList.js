(function() {

  angular
    .module('todo_app.components')
    .directive('truelist', trueList);

  function trueList() {
    var directive = {
      restrict: 'E',
      scope: {
        data: '=',
        index: '=',
        Button1Name: '=',
        Button2Name: '=',
        Buton1Click: '&',
        Buton2Click: '&'
      },
      templateUrl: 'app/modules/components/trueList/trueList.html',
      link: link
    };
    return directive;

    function link(scope, element, attrs) {
      //scope.data = ['first', 'second', 'third'];
      console.log(scope);
      console.log(element);
      console.log(attrs);
    }
  }

})();
