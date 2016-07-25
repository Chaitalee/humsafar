// JavaScript Document
var firstapp = angular.module('firstapp', [
  'ui.router',
  'phonecatControllers',
  'templateservicemod',
  'navigationservice',
  'pascalprecht.translate',
  'angulartics',
  'angulartics.google.analytics'
]);

firstapp.config(function($stateProvider, $urlRouterProvider, $httpProvider, $locationProvider) {
  // for http request with session
  $httpProvider.defaults.withCredentials = true;
  $stateProvider
    .state('home', {
      url: "/",
      templateUrl: "views/template.html",
      controller: 'HomeCtrl'
    })
    .state('profile', {
      url: "/profile",
      templateUrl: "views/template.html",
      controller: 'ProfileCtrl'
    })
    .state('journey', {
      url: "/journey",
      templateUrl: "views/template.html",
      controller: 'JourneyCtrl'
    })
    .state('moments', {
      url: "/moments",
      templateUrl: "views/template.html",
      controller: 'MomentsCtrl'
    })
    .state('reviews', {
      url: "/reviews",
      templateUrl: "views/template.html",
      controller: 'ReviewsCtrl'
    })
    .state('holidayplanner', {
      url: "/holidayplanner",
      templateUrl: "views/template.html",
      controller: 'HolidayPlannerCtrl'
    })
    .state('otherprofile', {
      url: "/otherprofile",
      templateUrl: "views/template.html",
      controller: 'OtherProfileCtrl'
    })
    .state('otherjourney', {
      url: "/otherjourney",
      templateUrl: "views/template.html",
      controller: 'OtherJourneyCtrl'
    })
    .state('othermoments', {
      url: "/othermoments",
      templateUrl: "views/template.html",
      controller: 'OtherMomentsCtrl'
    })
    .state('otherreviews', {
      url: "/otherreviews",
      templateUrl: "views/template.html",
      controller: 'OtherReviewsCtrl'
    })
    .state('setting', {
      url: "/setting",
      templateUrl: "views/template.html",
      controller: 'SettingCtrl'
    })
    .state('blog', {
      url: "/blog",
      templateUrl: "views/template.html",
      controller: 'BlogCtrl'
    })
    .state('blogdetail', {
      url: "/blogdetail",
      templateUrl: "views/template.html",
      controller: 'BlogDetailCtrl'
    })
    .state('activity', {
      url: "/activity",
      templateUrl: "views/template.html",
      controller: 'ActivityCtrl'
    })
    .state('holiday', {
      url: "/holiday",
      templateUrl: "views/template.html",
      controller: 'HolidayCtrl'
    });
  $urlRouterProvider.otherwise("/home");
  $locationProvider.html5Mode(isproduction);
});


firstapp.directive('img', function($compile, $parse) {
  return {
    restrict: 'E',
    replace: false,
    link: function($scope, element, attrs) {
      var $element = $(element);
      if (!attrs.noloading) {
        $element.after("<img src='img/loading.gif' class='loading' />");
        var $loading = $element.next(".loading");
        $element.load(function() {
          $loading.remove();
          $(this).addClass("doneLoading");
        });
      } else {
        $($element).addClass("doneLoading");
      }
    }
  };
});

firstapp.directive('fancyboxBox', function($document) {
  return {
    restrict: 'EA',
    replace: false,
    link: function(scope, element, attr) {
      var $element = $(element);
      var target;
      if (attr.rel) {
        target = $("[rel='" + attr.rel + "']");
      } else {
        target = element;
      }

      target.fancybox({
        openEffect: 'fade',
        closeEffect: 'fade',
        closeBtn: true,
        helpers: {
          media: {}
        }
      });
    }
  };
});


firstapp.config(function($translateProvider) {
  $translateProvider.translations('en', LanguageEnglish);
  $translateProvider.translations('hi', LanguageHindi);
  $translateProvider.preferredLanguage('en');
});
