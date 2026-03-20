(function() {
  "use strict";

  angular.module("MenuApp")
    .config(RoutesConfig);

  RoutesConfig.$inject = ["$stateProvider", "$urlRouterProvider"];
  function RoutesConfig($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise("/");

    $stateProvider
      .state("home", {
        url:          "/",
        templateUrl:  "src/template/home.template.html"
      })
      .state("categories", {
        url:          "/categories",
        templateUrl:  "src/template/categories-list.template.html",
        controller:   "CategoriesListController as ctrl",
        resolve: {
          categories: [ "MenuDataService", function(MenuDataService) {
            return MenuDataService.getAllCategories();
          }]
        }
      })
      .state("categories.items", {
        url:          "/items/{categoryShortName}",
        templateUrl:  "src/template/items-list.template.html",
        controller:   "ItemsListController as ctrl",
        params:       { categoryShortName: null },
        resolve: {
          items: [ "$stateParams", "MenuDataService", function($stateParams, MenuDataService) {
            return MenuDataService.getItemsForCategory($stateParams.categoryShortName);
          }]
        }
      });
  }
})();
