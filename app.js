let app = angular.module('myapp', []);

app.controller('MainController', function($scope,$http) {
 let onUserComplete =(response)=>{
   
   $scope.user = response.data;
   $http.get($scope.user.repos_url)
   .then(onRepos,onError)
 };
 
 
 let onRepos = (response)=>{
   $scope.repos =response.data;
 }
 let onError = (reason)=>{$scope.error = "something wrong";}
   $scope.username = "Angular";

$scope.search = ()=>{
  $http.get("https://api.github.com/users/"+$scope.username)
 .then(onUserComplete, onError);
  
};

 $scope.welcome = "Welcome to Github Repository Search";
 $scope.MyOrderBy = "-stargazers_count"
});
