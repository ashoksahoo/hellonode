var hellonode = angular.module('hellonode', []);

hellonode.controller('PostsCtrl', function ($scope) {

    $.ajax({url:'http://localhost:3000/api/posts', success:function(response){
        $scope.$apply(function(){
            $scope.posts = response;
        });
    }});
    console.log($scope.posts);

});

