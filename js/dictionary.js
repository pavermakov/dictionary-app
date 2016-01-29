var dictionary = angular.module('dictionary', []);

dictionary.controller('MainController', function ($scope, $http) {
   $scope.name = 'iDictionary';
   // Holds all the retuned data
   $scope.data = [];

   //Holds result
   $scope.result = false;

   $scope.translate = function () {

      $http({
            method: 'GET',
            url: 'https://dictionary.yandex.net/api/v1/dicservice.json/lookup?',
            params: {
               'key': 'dict.1.1.20151016T152233Z.c91de1181aa0417c.d79ec3b0aa9e62f43259cbf2e0444c6243b03a9b',
               'lang': 'en-en',
               'text': $scope.search
            }
         })
         .then(function (response) {
            $scope.result = true;
            $scope.data = response.data.def;
            console.log(response.data.def);

         }, function (error) {
            alert('Unable to load data. ' + error.status);
         });
   }
});