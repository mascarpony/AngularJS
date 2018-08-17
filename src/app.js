var myApp = angular.module('myApp', []);

myApp.directive('container', function () {
  return {
    restrict: 'EA',
    controllerAs: 'parent',
    controller: function () {
      this.click = function (message) {
        alert(message);
      }
    }
  };
});

myApp.directive('myButton', function () {
  return {
    restrict: 'EA',
    scope: {
      title: '@'
    },
    replace: true,
    template: '<button>{{title}}</button>',
  }
});


