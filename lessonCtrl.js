angular.module('directivePractice').controller('lessonCtrl', function($scope, lessonService){

  $scope.lessons = ['Services', 'Routing', 'Directives', 'Review', 'Firebase', 'No server project', 'Node', 'Express', 'Mongo'];

  $scope.animal = "zebara";

  $scope.test = 'Two-way data binding!';

});
