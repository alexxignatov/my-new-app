'use strict';

/* Controllers */

angular.module("goodsApp", ['ngRoute'])
        .config(['$routeProvider', '$locationProvider',function($routeProvider, $locationProvider) {
          $routeProvider
              .when('#/', {
                templateUrl:"views/goodList.html"
              })
              .when('#/:listId', {
                templateUrl:"views/goodList.html"
              })

              //todo finish here
        }])
        .controller('baseController', ['$scope', function($scope){
          
        }])
        .controller('goodsListCtrl', ['$scope', function($scope){
          $scope.allLists = [{ name:'asdf'}, { name: 'asdfasdf'}, { name: '1'}];
          var newListName = $scope.newListName = '';

          $scope.addList = function(){
            if($scope.newListName === ''){
              console.log('empty string');
              return;
            }

            if(!contains($scope.newListName, $scope.allLists)) {
              $scope.allLists.push({name: $scope.newListName });
              $scope.newListName = '';
            }else {
              console.log('array contain this string');
            }
          };
        }])
    
var contains = function(value, array){
  for(var i = 0; i < array.length; i++){
    if(array[i].name === value) return true;
  }

  return false;
}