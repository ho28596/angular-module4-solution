(function() {
  "use strict";

  angular.module("MenuApp")
    .controller("ItemsController", ItemsController);

  ItemsListController.$inject = ["$stateParams", "items"];
  function ItemsController($stateParams, items) {
    var ctrl = this;

    ctrl.items = items;
  }

})();