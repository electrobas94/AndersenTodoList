(function() {

  angular
    .module('todo_app.components')
    .directive('trueList', trueList);

  function trueList() {
    var directive = {
      restrict: 'E',
      scope: {
        dataList: '=list',
        dataBtnName1: '@btnName1',
        dataBtnName2: '@btnName2'
      },
      templateUrl: 'app/modules/components/trueList/trueList.html',
      link: link
    };
    return directive;

    function link(scope, element, attrs) 
    {
        console.log(scope);
        console.log(attrs);
        console.log(element);
        //scope.dataBtnName1 = attrs.dataBtnName1;
    }
    
  }

})();
