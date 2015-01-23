'use strict';

/* Controllers */

//var subscribeControllers = angular.module('subscribeControllers');
var subscribeApp = angular.module('subscribeApp', []);
subscribeApp.controller('SubscribeCtrl', ['$scope', function($scope) {
      $scope.cityes = ['Бишкек', 'Ош']; /*запрос на города*/
      $scope.languages = ['ru', 'kg']; /*запрос на языки*/
      //$scope.templates = ['letter1', 'letter2']; /*список из файлов в шаблоне*/
      $scope.templates = function(){
          var fso = new ActiveXObject("Scripting.FileSystemObject");
          var dir = fso.GetFolder("partials/leatter_tmpl/"); // example path only
          var fc = new Enumerator(dir.files);
          var file_name =[];
          for (; ! fc.atEnd(); fc.moveNext())
          {
              file_name.append(fc.item().Name);
          }
          return file_name;
      };
      $scope.head_code = "<head></head>";
      $scope.main_actions = ['Акция 1', 'Акция 2']; /*запрос на акции*/
      $scope.categorys = ['Категория 1', 'Категория 2']; /*запрос на категории*/
      $scope.category_actions = ['Акция 1', 'Акция 2']; /*запрос на акции по категориям*/
      $scope.title = '';
      $scope.message = '';
      $scope.row_templates =['row1', 'row2', 'row3']; /*список из файлов в шаблоне*/
      $scope.body ='';
      $scope.custom_code='';
      $scope.footer_code = '';
  }]);

