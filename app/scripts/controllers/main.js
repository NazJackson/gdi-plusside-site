(function () {
  'use strict';

  angular
    .module('plusSideApp')
    .controller('MainCtrl', MainCtrl);

  MainCtrl.$inject = ['DatabaseService'];
  function MainCtrl(DatabaseService) {
    var vm = this;
    vm.entries = [];
    vm.city = '';
    vm.state = '';
    vm.appreciation = '';
    vm.postEntry = postEntry;

    activate();

    ////////////////

    function activate() {
      DatabaseService.getEntries().then(function (data) {
        vm.entries = data;
      });
    }

    function postEntry() {
      if (vm.city.length > 0 && vm.state.length > 0 && vm.appreciation.length > 0){
        var entry = {
          city: vm.city,
          state: vm.state,
          appreciation: vm.appreciation
        };
        console.log(entry);
        DatabaseService.postEntry(entry);
        vm.city = '';
        vm.state = '';
        vm.appreciation = '';
        activate();
      }
      else{
        console.log("there an empty entry");
      }
    }
  }
})();

