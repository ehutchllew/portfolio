(function(){

angular
  .module('app')
  .config(IndexRoute);

  IndexRoute.$inject = ['$urlRouterProvider', '$stateProvider'];

  function IndexRoute($urlRouterProvider, $stateProvider){

    $urlRouterProvider.otherwise('/');
    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'home/home.html'
      })
      .state('about', {
        url: '/about',
        templateUrl: 'about/about.html'
      })
      .state('projects', {
        url: '/projects',
        templateUrl: 'projects/projects.html'
      })
      .state('contact', {
        url: '/contact',
        templateUrl: 'contact/contact.html'
      });

  }

})();
