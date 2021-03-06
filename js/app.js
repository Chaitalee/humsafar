// JavaScript Document
var initMap = {};
var backgroundClick = {
  object: undefined,
  close: function () {
    backgroundClick.object.backgroundClick = false;
    backgroundClick.scope.$apply();
  }
};

var imageTestingCallback = function (dataURI, type) {

  // convert base64 to raw binary data held in a string
  var byteString = atob(dataURI.split(',')[1]);

  // separate out the mime component
  var mimeString = dataURI.split(',')[0].split(':')[1].split(';')[0]

  // write the bytes of the string to an ArrayBuffer
  var ab = new ArrayBuffer(byteString.length);
  var ia = new Uint8Array(ab);
  for (var i = 0; i < byteString.length; i++) {
    ia[i] = byteString.charCodeAt(i);
  }

  // write the ArrayBuffer to a blob, and you're done
  var blob = new Blob([ab], {
    type: type
  });
  console.log(blob);
  // Blob to File
  var file = new File([blob], 'photo-' + "1" + '.png');
  console.log(file);
  // File to FormData
  var formData = new FormData();
  console.log(formData, "before appending");
  formData.append('file', file, file.name);
  console.log(formData, "after appending");
  return formData;
};

$(document).ready(function () {
  $("body").click(function () {
    if (backgroundClick.object) {
      backgroundClick.close();
    }
  });

});

var firstapp = angular.module('firstapp', [
  'ui.router',
  'phonecatControllers',
  'templateservicemod',
  'navigationservice',
  'pascalprecht.translate',
  'imageupload',
  'angulartics',
  'angulartics.google.analytics',
  'fileuploadservicemod',
  'angularFileUpload'
]);

firstapp.config(function ($stateProvider, $urlRouterProvider, $httpProvider, $locationProvider, cfpLoadingBarProvider) {
  // for http request with session
  $httpProvider.defaults.withCredentials = true;
  cfpLoadingBarProvider.includeSpinner = true;
  cfpLoadingBarProvider.latencyThreshold = 2000;
  cfpLoadingBarProvider.includeBar = true;
  cfpLoadingBarProvider.spinnerTemplate = '<div class="travelibro-loader"><img src="img/travelibro-loader.gif" alt="Travelibro" class="img-responsive" /></div>';

  $stateProvider
    .state('home', {
      url: "/",
      templateUrl: "views/template.html",
      controller: 'HomeCtrl'
    })
    .state('about', {
      url: "/about-travelibro",
      templateUrl: "views/template.html",
      controller: 'AboutCtrl'
    })
    .state('forgot-password', {
      url: "/forgot-password/:token/:email",
      templateUrl: "views/template.html",
      controller: 'ForgotPasswordCtrl'
    })
    .state('forgot-password-email', {
      url: "/forgot-password-email",
      templateUrl: "views/template.html",
      controller: 'ForgotPasswordEmailCtrl'
    })
    .state('contact', {
      url: "/contact",
      templateUrl: "views/template.html",
      controller: 'ContactCtrl'
    })
    .state('booking', {
      url: "/booking",
      templateUrl: "views/template.html",
      controller: 'BookingCtrl'
    })
    .state('advertise', {
      url: "/advertise",
      templateUrl: "views/template.html",
      controller: 'AdvertiseCtrl'
    })
    .state('login', {
      url: "/login",
      templateUrl: "views/template.html",
      controller: 'LoginCtrl'
    })
    .state('mainpage', {
      url: "/mainpage",
      templateUrl: "views/template.html",
      controller: 'MainPageCtrl'
    })
    .state('profile', {
      url: "/profile",
      templateUrl: "views/template.html",
      controller: 'ProfileCtrl'
    })
    .state('mylifeWithOut', {
      url: "/mylife",
      templateUrl: "views/template.html",
      controller: 'MylifeCtrl',
      reloadOnSearch: false
    })
    .state('mylife', {
      url: "/mylife/:name",
      templateUrl: "views/template.html",
      controller: 'MylifeCtrl',
      reloadOnSearch: false
    })
    .state('popularblogger', {
      url: "/popular-blogger",
      templateUrl: "views/template.html",
      controller: 'PopularBloggerCtrl'
    })
    .state('popularjourney', {
      url: "/popular-journey",
      templateUrl: "views/template.html",
      controller: 'PopularJourneyCtrl'
    })
    .state('popularagent', {
      url: "/popular-agent",
      templateUrl: "views/template.html",
      controller: 'PopularAgentCtrl'
    })
    .state('popularitinerary', {
      url: "/popular-itinerary",
      templateUrl: "views/template.html",
      controller: 'PopularItineraryCtrl'
    })
    .state('destination', {
      url: "/destination",
      templateUrl: "views/template.html",
      controller: 'DestinationCtrl'
    })
    .state('destinationcountryWithOut', {
      url: "/destination-country",
      templateUrl: "views/template.html",
      controller: 'DestinationCountryCtrl',
      reloadOnSearch: false
    })
    .state('destinationcountry', {
      url: "/destination-country/:name/:url",
      templateUrl: "views/template.html",
      controller: 'DestinationCountryCtrl',
      reloadOnSearch: false
    })
    .state('destinationcity', {
      url: "/destination-city/:name/:url",
      templateUrl: "views/template.html",
      controller: 'DestinationCityCtrl',
      reloadOnSearch: false
    })
    .state('destinationcityWithOut', {
      url: "/destination-city",
      templateUrl: "views/template.html",
      controller: 'DestinationCityCtrl',
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
    .state('activitytest', {
      url: "/activity-test",
      templateUrl: "views/template.html",
      controller: 'ActivityTestCtrl'
    })
    .state('holiday', {
      url: "/holiday",
      templateUrl: "views/template.html",
      controller: 'HolidayCtrl'
    })
    .state('ongojourney', {
      url: "/ongojourney/:id",
      templateUrl: "views/template.html",
      controller: 'OnGoJourneyCtrl'
    })
    .state('tripsummary', {
      url: "/tripsummary/:id",
      templateUrl: "views/template.html",
      controller: 'TripSummaryCtrl'
    })
    .state('detailitinerary', {
      url: "/detail-itinerary/:flag/:urlSlug",
      templateUrl: "views/template.html",
      controller: 'DetailedItineraryCtrl'
    })
    .state('quickitinerary', {
      url: "/quick-itinerary/:flag/:urlSlug",
      templateUrl: "views/template.html",
      controller: 'QuickItineraryCtrl'
    })
    .state('editoritinerary', {
      url: "/editor-itinerary",
      templateUrl: "views/template.html",
      controller: 'EditorItineraryCtrl'
    })
    .state('userquickitinerary', {
      url: "/user-quickitinerary/:id",
      templateUrl: "views/template.html",
      controller: 'UserQuickItineraryCtrl'
    })
    .state('userdetailitinerary', {
      url: "/user-detailitinerary/:id",
      templateUrl: "views/template.html",
      controller: 'UserDetailItineraryCtrl'
    })
    .state('agentitinerary', {
      url: "/agent-itinerary",
      templateUrl: "views/template.html",
      controller: 'AgentItineraryCtrl'
    })
    .state('itinerary', {
      url: "/itinerary",
      templateUrl: "views/template.html",
      controller: 'ItineraryCtrl'
    })
    .state('agent-login', {
      url: "/agent-login",
      templateUrl: "views/template.html",
      controller: 'AgentloginCtrl'
    })
    .state('agent-setting', {
      url: "/agent-setting",
      templateUrl: "views/template.html",
      controller: 'AgentsettingCtrl'
    })
    .state('agent-user-without', {
      url: "/agent-user",
      templateUrl: "views/template.html",
      controller: 'AgentuserCtrl'
    })
    .state('agent-home-without', {
      url: "/agent-home",
      templateUrl: "views/template.html",
      controller: 'AgenthomeCtrl'
    })

    .state('agent-user', {
      url: "/agent-user/:name",
      templateUrl: "views/template.html",
      controller: 'AgentuserCtrl',
      reloadOnSearch: false
    })
    .state('agent-home', {
      url: "/agent-home/:name",
      templateUrl: "views/template.html",
      controller: 'AgenthomeCtrl',
      reloadOnSearch: false
    })
    .state('agent-upgrade', {
      url: "/agent-upgrade",
      templateUrl: "views/template.html",
      controller: 'AgentupgradeCtrl'
    })
    .state('message', {
      url: "/message",
      templateUrl: "views/template.html",
      controller: 'MessageCtrl'
    })
    .state('notification', {
      url: "/notification",
      templateUrl: "views/template.html",
      controller: 'NotificationCtrl'
    })
    .state('ProfileList', {
      url: "/profile-list/:active",
      templateUrl: "views/template.html",
      controller: 'ProfileListCtrl'
    });
  $urlRouterProvider.otherwise("/");
  $locationProvider.html5Mode(isproduction);
});


// firstapp.directive('img', function ($compile, $parse) {
//   return {
//     restrict: 'E',
//     replace: false,
//     link: function ($scope, element, attrs) {
//       var $element = $(element);
//       if (!attrs.noloading) {
//         $element.after("<img src='img/loading.gif' class='loading' />");
//         var $loading = $element.next(".loading");
//         $element.load(function () {
//           $loading.remove();
//           $(this).addClass("doneLoading");
//         });
//       } else {
//         $($element).addClass("doneLoading");
//       }
//     }
//   };
// });

firstapp.directive('autoHeight', function ($compile, $parse) {
  return {
    restrict: 'EA',
    replace: false,
    link: function ($scope, element, attrs) {
      var $element = $(element);
      var windowHeight = $(window).height();

      $element.css("min-height", windowHeight);
      setTimeout(function () {
        $element.css("min-height", windowHeight);
      });
    }
  };
});

firstapp.directive('fancyboxBox', function ($document) {
  return {
    restrict: 'EA',
    replace: false,
    link: function (scope, element, attr) {
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


firstapp.config(function ($translateProvider) {
  $translateProvider.translations('en', LanguageEnglish);
  $translateProvider.translations('hi', LanguageHindi);
  $translateProvider.preferredLanguage('en');
});

firstapp.directive('scrolldown', function ($compile, $parse) {
  return {
    restrict: 'EA',
    replace: false,
    link: function ($scope, element, attrs) {
      var $element = $(element);
      $scope.scrollDown = function () {
        $('html,body').animate({
            scrollTop: $(".second").offset().top
          },
          'slow');
      };
    }
  };
});


firstapp.directive('scroll', function ($window) {
  return {
    restrict: 'EA',
    replace: false,
    link: function ($scope, element, attrs) {
      var $element = $(element);
      var divslide5 = $('#slide5')[0].scrollHeight;
      var winTop = $(window).scrollTop();
      console.log(winTop);
      console.log(divslide5);
      angular.element($window).bind("scroll", function () {
        console.log(divslide5 - 1);
        if (winTop > divslide5) {
          scope.active = true;
          console.log("all done");
        }
      });
    }
  };
});

firstapp.directive("scrolladdclass", function ($window) {
  return function (scope, element, attrs) {
    angular.element($window).bind("scroll", function () {
      var windowHeight = $(window).height() - 120;
      if (this.pageYOffset >= windowHeight) {
        // console.log(windowHeight);
        element.addClass('addfixed');
      } else {
        element.removeClass('addfixed');
      }
    });
  };
});

firstapp.directive("scrolladd1class", function ($window) {
  return function (scope, element, attrs) {
    angular.element($window).bind("scroll", function () {
      var windowHeight = $(window).height();
      if (this.pageYOffset >= 50) {
        // console.log(windowHeight);
        element.addClass('addfixed');
      } else {
        element.removeClass('addfixed');
      }
    });
  };
});

firstapp.directive("scrolladd2class", function ($window) {
  return function (scope, element, attrs) {
    angular.element($window).bind("scroll", function () {
      var windowHeight = $(window).height();
      if (this.pageYOffset >= 370) {
        // console.log(windowHeight);
        element.addClass('addfixed2');
      } else {
        element.removeClass('addfixed2');
      }
    });
  };
});

firstapp.directive('imageonload', function () {
  return {
    restrict: 'A',
    link: function (scope, element, attrs) {
      element.bind('load', function () {
        scope.$apply(attrs.imageonload);
      });
    }
  };
});

firstapp.directive('uploadImage', function ($http, $filter, $timeout) {
  return {
    templateUrl: 'views/directive/uploadFile.html',
    scope: {
      model: '=ngModel',
      type: "@type",
      callback: "&ngCallback"
    },
    link: function ($scope, element, attrs) {
      $scope.showImage = function () {
        console.log($scope.image);
      };
      $scope.check = true;
      if (!$scope.type) {
        $scope.type = "image";
      }
      $scope.isMultiple = false;
      $scope.inObject = false;
      if (attrs.multiple || attrs.multiple === "") {
        $scope.isMultiple = true;
        $("#inputImage").attr("multiple", "ADD");
      }
      if (attrs.noView || attrs.noView === "") {
        $scope.noShow = true;
      }
      // if (attrs.required) {
      //     $scope.required = true;
      // } else {
      //     $scope.required = false;
      // }

      $scope.$watch("image", function (newVal, oldVal) {
        isArr = _.isArray(newVal);
        if (!isArr && newVal && newVal.file) {
          $scope.uploadNow(newVal);
        } else if (isArr && newVal.length > 0 && newVal[0].file) {
          $timeout(function () {
            console.log(oldVal, newVal);
            console.log(newVal.length);
            _.each(newVal, function (newV, key) {
              if (newV && newV.file) {
                $scope.uploadNow(newV);
              }
            });
          }, 100);
        }
      });

      if ($scope.model) {
        if (_.isArray($scope.model)) {
          $scope.image = [];
          _.each($scope.model, function (n) {
            $scope.image.push({
              url: n
            });
          });
        } else {
          if (_.endsWith($scope.model, ".pdf")) {
            $scope.type = "pdf";
          }
        }

      }
      if (attrs.inobj || attrs.inobj === "") {
        $scope.inObject = true;
      }
      $scope.clearOld = function () {
        $scope.model = [];
      };
      $scope.uploadNow = function (image) {
        $scope.uploadStatus = "uploading";

        var Template = this;
        image.hide = true;
        var formData = new FormData();
        formData.append('file', image.file, image.name);
        $http.post(uploadurl, formData, {
          headers: {
            'Content-Type': undefined
          },
          transformRequest: angular.identity
        }).success(function (data) {

          $scope.uploadStatus = "uploaded";
          if ($scope.isMultiple) {

            if ($scope.inObject) {
              $scope.model.push({
                "image": data.data[0]
              });
            } else {
              if (!$scope.model) {
                $scope.clearOld();
              }
              $scope.model.push(data.data[0]);
            }
          } else {
            if (_.endsWith(data.data, ".pdf")) {
              $scope.type = "pdf";
            } else {
              $scope.type = "img";
            }
            $scope.model = data.data[0];

          }
          $scope.callback({
            'data': data.data[0]
          });
          // $timeout(function () {
          //    $scope.callback({'data':$scope.model});
          // }, 100);

        });
      };
    }
  };
});
firstapp.directive('uploadImageOtg', function ($http, $filter, $timeout) {
  return {
    templateUrl: 'views/directive/uploadFile.html',
    scope: {
      model: '=ngModel',
      type: "@type",
      callback: "&ngCallback"
    },
    link: function ($scope, element, attrs) {
      $scope.showImage = function () {
        console.log($scope.image);
      };
      $scope.check = true;
      $scope.length = 0;
      if (!$scope.type) {
        $scope.type = "image";
      }
      $scope.isMultiple = false;
      $scope.inObject = false;
      if (attrs.multiple || attrs.multiple === "") {
        $scope.isMultiple = true;
        $("#inputImage").attr("multiple", "ADD");
      }
      if (attrs.noView || attrs.noView === "") {
        $scope.noShow = true;
      }
      // if (attrs.required) {
      //     $scope.required = true;
      // } else {
      //     $scope.required = false;
      // }

      $scope.$watch("image", function (newVal, oldVal) {
        console.log(newVal);
        console.log(oldVal);
        isArr = _.isArray(newVal);
        if (!isArr && newVal && newVal.file) {
          $scope.uploadNow(newVal);
        } else if (isArr && newVal.length > 0 && newVal[0].file) {
          $timeout(function () {
            console.log(oldVal, newVal);
            console.log(newVal.length);
            $scope.length = newVal.length;
            _.each(newVal, function (newV, key) {
              if (newV && newV.file) {
                $scope.uploadNow(newV);
              }
            });
          }, 100);
        }
      });

      if ($scope.model) {
        if (_.isArray($scope.model)) {
          $scope.image = [];
          _.each($scope.model, function (n) {
            $scope.image.push({
              url: n
            });
          });
        } else {
          if (_.endsWith($scope.model, ".pdf")) {
            $scope.type = "pdf";
          }
        }

      }
      if (attrs.inobj || attrs.inobj === "") {
        $scope.inObject = true;
      }
      $scope.clearOld = function () {
        $scope.model = [];
      };
      $scope.uploadNow = function (image) {
        $scope.uploadStatus = "uploading";

        var Template = this;
        image.hide = true;
        var formData = new FormData();
        formData.append('file', image.file, image.name);
        $http.post(uploadurl, formData, {
          headers: {
            'Content-Type': undefined
          },
          transformRequest: angular.identity
        }).success(function (data) {

          $scope.uploadStatus = "uploaded";
          if ($scope.isMultiple) {

            if ($scope.inObject) {
              $scope.model.push({
                "image": data.data[0]
              });
            } else {
              if (!$scope.model) {
                $scope.clearOld();
              }
              $scope.model.push(data.data[0]);
            }
          } else {
            if (_.endsWith(data.data, ".pdf")) {
              $scope.type = "pdf";
            } else {
              $scope.type = "img";
            }
            $scope.model = data.data[0];

          }
          $scope.callback({
            'data': data.data[0],
            'length': $scope.length
          });
          // $timeout(function () {
          //    $scope.callback({'data':$scope.model});
          // }, 100);

        });
      };
    }
  };
});

firstapp.filter('uploadpath', function () {
  return function (input, width, height, style) {
    var other = "";
    if (width && width !== "") {
      other += "&width=" + width;
    }
    if (height && height !== "") {
      other += "&height=" + height;
    }
    if (style && style !== "") {
      other += "&style=" + style;
    }
    if (input) {
      if (input.indexOf('https://') == -1) {
        return imgpath + "?file=" + input + other;
      } else {
        return input;
      }
    }
  };
});

firstapp.filter('capitalize', function () {
  return function (input) {
    return (!!input) ? input.charAt(0).toUpperCase() + input.substr(1).toLowerCase() : '';
  }
});

firstapp.filter('kindOfJourney', function () {
  return function (input, color) {
    var input = input.toLowerCase();
    var returnVal = "";
    switch (input) {
      case "friends":
        returnVal = "img/kindofjourney/" + color + "-friends.png";
        break;
      case "backpacking":
        returnVal = "img/kindofjourney/" + color + "-backpacking.png";
        break;
      case "business":
        returnVal = "img/kindofjourney/" + color + "-business.png";
        break;
      case "religious":
        returnVal = "img/kindofjourney/" + color + "-religious.png";
        break;
      case "romance":
        returnVal = "img/kindofjourney/" + color + "-romance.png";
        break;
      case "budget":
        returnVal = "img/kindofjourney/" + color + "-budget.png";
        break;
      case "luxury":
        returnVal = "img/kindofjourney/" + color + "-luxury.png";
        break;
      case "family":
        returnVal = "img/kindofjourney/" + color + "-family.png";
        break;
      case "solo":
        returnVal = "img/kindofjourney/" + color + "-solo.png";
        break;
      case "betterhalf":
        returnVal = "img/kindofjourney/" + color + "-betterhalf.png";
        break;
      case "colleague":
        returnVal = "img/kindofjourney/" + color + "-colleague.png";
        break;
      case "festival":
        returnVal = "img/kindofjourney/" + color + "-festival.png";
        break;
      case "adventure":
        returnVal = "img/kindofjourney/" + color + "-adventure.png";
        break;
    }
    return returnVal;
  };
});

firstapp.filter('kindOfCheckIn', function () {
  return function (input) {
    var returnVal = "";
    switch (input) {
      case "Cinema & Theatre":
        returnVal = "img/icons/smallcinema.png";
        break;
      case "Restaurants & Bars":
        returnVal = "img/icons/small-resto.png";
        break;
      case "Shopping":
        returnVal = "img/icons/smallshopping.png";
        break;
      case "Transportation":
        returnVal = "img/icons/smallairport.png";
        break;
      case "Nature and Parks":
        returnVal = "img/icons/smallnature.png";
        break;
      case "Sights and Landmarks":
        returnVal = "img/icons/smallsight.png";
        break;
      case "Museums and Galleries":
        returnVal = "img/icons/smallmuseums.png";
        break;
      case "Zoo and Aquariums":
        returnVal = "img/icons/smallzoos.png";
        break;
      case "Religious":
        returnVal = "img/icons/smallreligious.png";
        break;
      case "Hotels & Accomodations":
        returnVal = "img/icons/smallhotels.png";
        break;
      case "Others":
        returnVal = "img/icons/smallothers.png";
        break;
      case "Other":
        returnVal = "img/smallothers.png";
        break;
      case "City":
        returnVal = "img/icons/cityfull.png";
        break;
      default:
        returnVal = "img/icons/smallothers.png";
    }
    console.log(input, returnVal);
    return returnVal;
  };
});

firstapp.filter('typeOfPost', function () {
  return function (post, type) {
    var returnVal = "";
    var color;
    if (type == 'travel-life') {
      color = 'red_';
    } else if (type == 'local-life') {
      color = "cyan_";
    }
    if (post && post.checkIn && post.checkIn.location) {
      return "img/typeOfPost/" + color + "location.png";
    } else if (post && post.photos && post.photos.length != 0) {
      return "img/typeOfPost/" + color + "camera.png";
    } else if (post && post.videos && post.videos.length != 0) {
      return "img/typeOfPost/" + color + "video.png";
    } else if (post && post.thoughts) {
      return "img/typeOfPost/" + color + "thought.png";
    }
  }
});

firstapp.filter('truncate', function () {
  return function (value, limit) {
    if (value) {
      if (value.length < limit) {
        return value;
      } else {
        return value.slice(0, limit) + "...";
      }
    }
  }
});

firstapp.filter('itineraryType', function () {
  return function (input) {
    var returnVal = "";

    function getRandomInt(min, max) {
      return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    var itineraryBg = input.length;
    console.log(input, itineraryBg);
    var itineraryGet = getRandomInt(0, itineraryBg - 1);
    var backImg = input[itineraryGet];
    console.log(backImg);
    var random = getRandomInt(1, 2);
    switch (backImg) {
      case "adventure":
        returnVal = "img/banner-itinerary/adventure" + random + ".jpg";
        break;
      case "business":
        returnVal = "img/banner-itinerary/business" + random + ".jpg";
        break;
      case "family":
        returnVal = "img/banner-itinerary/family" + random + ".jpg";
        break;
      case "romance":
        returnVal = "img/banner-itinerary/romance" + random + ".jpg";
        break;
      case "backpacking":
        returnVal = "img/banner-itinerary/backpacking" + random + ".jpg";
        break;
      case "religious":
        returnVal = "img/banner-itinerary/religious" + random + ".jpg";
        break;
      case "budget":
        returnVal = "img/banner-itinerary/budget" + random + ".jpg";
        break;
      case "luxury":
        returnVal = "img/banner-itinerary/luxury" + random + ".jpg";
        break;
      case "solo":
        returnVal = "img/banner-itinerary/sole" + random + ".jpg";
        break;
      case "festival":
        returnVal = "img/banner-itinerary/all" + random + ".jpg";
        break;
      case "shopping":
        returnVal = "img/banner-itinerary/all" + random + ".jpg";
        break;
      case "friends":
        returnVal = "img/banner-itinerary/friends" + random + ".jpg";
        break;
    }
    console.log(returnVal, 'return wla kya hai');
    return returnVal;
  };
});

firstapp.directive('fileModel', ['$parse', function ($parse) {
  return {
    restrict: 'A',
    scope: {
      fileModel: '=fileModel',
    },
    link: function (scope, element, attrs) {
      element.bind('change', function () {
        scope.fileModel = element[0].files;
        scope.$apply();
      });
    }
  };
}]);

firstapp.directive('functionmap', ['$parse', function ($parse) {
  return {
    restrict: 'C',
    link: function (scope, element, attrs) {
      setTimeout(function () {
        var check = $(".hasLatLng").length;
        var flag;
        //perform tasks on window scroll starts
        $(window).scroll(function () {
          var currentScroll = $(window).scrollTop() + $(window).height();
          var divPositions = _.map($(".hasLatLng"), function (n) {
            return $(n).offset().top;
          });
          //getting divHeights for scrolling based on percentage of div's height displayed on screen starts
          var divHeights = _.map($(".hasLatLng"), function (n) {
            return $(n).height();
          });
          //getting divHeights for scrolling based on percentage of div displayed on screen ends

          var ith = 1;
          var percentage = 0;
          //manipulating map based on divPositions starts
          _.each(divPositions, function (n, index) {
            if (n <= currentScroll && divPositions[index + 1] > currentScroll) { //would work for  1st checkIn till second last checkin coz divPositions[index + 1] would return false
              ith = index;
              if (n > 0) {
                percentage = ((currentScroll - n) / divHeights[index]) * 100; //percentage based on size of div
                if (ith > 0) {
                  if (percentage <= 100) {
                    flag = true; //flag is only sent when percent >100
                    pointsForLine(ith, percentage, true);
                  } else {
                    //else is given coz polyline should not exceed beyond 100%
                    pointsForLine(ith, 100, true, flag);
                    flag = false;
                  }
                } else if (!_.isEmpty(line[1])) { //clearing 1st polyLine
                  line[1].setMap(null);
                  line[1] = {};
                }
              }
              return false;
            } else if ((n <= currentScroll) && (index == (divPositions.length - 1))) { //for last checkIn
              ith = index;
              percentage = ((currentScroll - n) / divHeights[index]) * 100; //percentage based on size of div
              if (percentage <= 100) {
                flag = true;
                pointsForLine(ith, percentage, true, true);
              } else {
                //else is given coz polyline should not exceed beyond 100%
                pointsForLine(ith, 100, true);
                flag = false;
              }
            } else if (n > currentScroll) { //clearing 1st polyLine if none of the checkin is diplayed on the initial window page
              if (!_.isEmpty(line[1])) {
                line[1].setMap(null);
                line[1] = {};
              }
            }
          });
          //manipulating map based on divPositions ends
        });
        //perform tasks on window scroll ends
      }, 1);
    }
  };
}]);

firstapp.filter('postString', function () {
  return function (checkIn) {
    var postString = "";
    var buddiesString = "";
    var buddiesCount = checkIn.buddies.length;
    if (buddiesCount == 1) {
      buddiesString = checkIn.buddies[0].name.bold();
    } else if (buddiesCount == 2) {
      buddiesString = checkIn.buddies[0].name.bold() + " and " + checkIn.buddies[1].name.bold();
    } else if (buddiesCount >= 2) {
      buddiesString = checkIn.buddies[0].name.bold() + " and " + (buddiesCount - 1) + " others ";
    }
    var postString = "";
    if (buddiesString != "") {
      if (checkIn.thoughts && checkIn.location) {
        postString = checkIn.thoughts + " with " + buddiesString + " at " + checkIn.location.bold();
      } else if (checkIn.thoughts) {
        postString = checkIn.thoughts + " with " + buddiesString;
      } else if (checkIn && checkIn.location) {
        postString = checkIn.postCreator.name.bold() + " with " + buddiesString + " at " + checkIn.location.bold();
      } else {
        postString = checkIn.postCreator.name.bold() + " with " + buddiesString;
      }
    } else {
      if (checkIn.thoughts && checkIn.location) {
        postString = checkIn.thoughts + " at " + checkIn.location.bold();
      } else if (checkIn.thoughts) {
        postString = checkIn.thoughts;
      } else if (checkIn && checkIn.location) {
        postString = checkIn.postCreator.name.bold() + " at " + checkIn.location.bold();
      } else {
        postString = "";
      }
    }
    return postString;
  }
});

firstapp.filter('filterDate', function () {
  return function (duration) {
    return "inside";
  };
});

firstapp.filter('fromCalculation', function () {
  return function (country, countryIndex, cityIndex) {
    var sum = 0;
    if (countryIndex == 0) { //when only 1 country is selected
      if (cityIndex == 0) {
        return 1;
      } else {
        cityIndex = cityIndex - 1;
        while (cityIndex >= 0) {
          sum = sum + country[countryIndex].cityVisited[cityIndex].duration;
          cityIndex--;
        };
        return sum;
      }
    } else { //when more than 1 countries selected
      if (cityIndex >= 0) {
        cityIndex = cityIndex - 1;
        while (countryIndex >= 0) {
          while (cityIndex >= 0) {
            sum = sum + country[countryIndex].cityVisited[cityIndex].duration;
            cityIndex--;
          };
          countryIndex--;
          if (countryIndex == -1) {
            break;
          }
          cityIndex = country[countryIndex].cityVisited.length - 1;
        }
      }
      return sum;
    }
  };
});
firstapp.filter('trusted', ['$sce', function ($sce) {
  return function (url) {
    return $sce.trustAsResourceUrl(url);
  };
}]);

firstapp.filter('toCalculation', function () {
  return function (country, countryIndex, cityIndex) {
    var sum = 0;
    if (countryIndex == 0) {
      if (cityIndex >= 0) {
        while (cityIndex >= 0) {
          sum = sum + country[countryIndex].cityVisited[cityIndex].duration;
          cityIndex--;
        };
      }
      return sum;
    } else {
      if (cityIndex >= 0) {
        while (countryIndex >= 0) {
          while (cityIndex >= 0) {
            sum = sum + country[countryIndex].cityVisited[cityIndex].duration;
            cityIndex--;
          };
          countryIndex--;
          if (countryIndex == -1) {
            break;
          }
          cityIndex = country[countryIndex].cityVisited.length - 1;
        }
      }
      return sum;
    }
  };
});

firstapp.directive('fileDropzone', function () {
  return {
    restrict: 'A',
    scope: {
      file: '=',
      fileName: '='
    },
    link: function (scope, element, attrs) {
      var checkSize,
        isTypeValid,
        processDragOverOrEnter,
        validMimeTypes;

      // processDragOverOrEnter = function (event) {
      //   if (event != null) {
      //     event.preventDefault();
      //   }
      //   event.dataTransfer.effectAllowed = 'copy';
      //   return false;
      // };

      processDragOverOrEnter = function (event) {
        if (event != null) {
          event.preventDefault();
        }
        (event.originalEvent || event).dataTransfer.effectAllowed = 'copy';
        return false;
      };


      validMimeTypes = attrs.fileDropzone;

      checkSize = function (size) {
        var _ref;
        if (((_ref = attrs.maxFileSize) === (void 0) || _ref === '') || (size / 1024) / 1024 < attrs.maxFileSize) {
          return true;
        } else {
          alert("File must be smaller than " + attrs.maxFileSize + " MB");
          return false;
        }
      };

      isTypeValid = function (type) {
        if ((validMimeTypes === (void 0) || validMimeTypes === '') || validMimeTypes.indexOf(type) > -1) {
          return true;
        } else {
          alert("Invalid file type.  File must be one of following types " + validMimeTypes);
          return false;
        }
      };

      element.bind('dragover', processDragOverOrEnter);
      element.bind('dragenter', processDragOverOrEnter);

      return element.bind('drop', function (event) {
        console.log(event);
        var file, name, reader, size, type;
        if (event != null) {
          event.preventDefault();
        }
        reader = new FileReader();
        reader.onload = function (evt) {
          if (checkSize(size) && isTypeValid(type)) {
            return scope.$apply(function () {
              scope.file = evt.target.result;
              if (angular.isString(scope.fileName)) {
                return scope.fileName = name;
              }
            });
          }
          console.log(evt.target.files);
        };
        file = event.originalEvent.dataTransfer.files[0];
        name = file.name;
        type = file.type;
        size = file.size;
        reader.readAsDataURL(file);
        return false;
      });
    }
  };
})


firstapp.directive("fileread", [function () {
  return {
    scope: {
      fileread: "="
    },
    link: function (scope, element, attributes) {
      element.bind("change", function (changeEvent) {
        var reader = new FileReader();
        reader.onload = function (loadEvent) {
          scope.$apply(function () {
            scope.fileread = loadEvent.target.result;
            console.log(scope.fileread);
          });
        }
        console.log(changeEvent.target.files);
        reader.readAsDataURL(changeEvent.target.files[0]);
      });
    }
  }
}]);
