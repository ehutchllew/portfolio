(function(){

angular
  .module('app')
  .controller('IndexController', IndexController);

  function IndexController(){
    var self = this;

    self.hello = 'HELLO';

  }


})();
