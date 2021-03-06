var adminURL = "";

if (isproduction) {
  adminURL = "http://www.wohlig.co.in/demo/index.php";
} else {
  adminURL = "http://travelibro.com/api";
}
var imgurl = adminURL + "/upload/";

var imgpath = imgurl + "readFile";
var uploadurl = imgurl;
var navigationservice = angular.module('navigationservice', [])

  .factory('NavigationService', function ($http) {
    var navigation = [{
      name: "Home",
      classis: "active",
      disabled: true,
      anchor: "home",
    }, {
      name: "Destination",
      classis: "active",
      disabled: true,
      anchor: "destination",
    }, {
      name: "Popular Journeys",
      classis: "active",
      disabled: true,
      anchor: "popularjourney",
    }, {
      name: "Popular Bloggers",
      classis: "active",
      disabled: true,
      anchor: "popularblogger",
    }, {
      name: "Popular Agents",
      classis: "active",
      disabled: true,
      anchor: "popularagent",
    }, {
      name: "Popular Itinerary",
      classis: "active",
      disabled: true,
      anchor: "popularitinerary",
    }, {
      name: "Bookings",
      classis: "active",
      disabled: false,
      anchor: "booking",
      subnav: [{
        name: "Flights",
        classis: "active",
        anchor: "home"
      }, {
        name: "Hotels",
        classis: "active",
        anchor: "home"
      }, {
        name: "Vacation Rentals",
        classis: "active",
        anchor: "home"
      }, {
        name: "Homestays",
        classis: "active",
        anchor: "home"
      }, {
        name: "Car Rentals",
        classis: "active",
        anchor: "home"
      }, {
        name: "Tours & Excursions",
        classis: "active",
        anchor: "home"
      }, {
        name: "Parking Space",
        classis: "active",
        anchor: "home"
      }, ]
    }, {
      name: "Blogs",
      classis: "active",
      disabled: true,
      anchor: "popularblogger",
    }, {
      name: "About Us",
      classis: "active",
      disabled: false,
      anchor: "about",
      subnav: [{
        name: "About TraveLibro",
        classis: "active",
        anchor: "about"
      }, {
        name: "Advertise With Us",
        classis: "active",
        anchor: "advertise"
      }, {
        name: "Contact Us",
        classis: "active",
        anchor: "contact",
      }, {
        name: "Terms & Conditions",
        classis: "active",
        anchor: "home"
      }, ]
    }];

    return {
      getnav: function () {
        return navigation;
      },
      makeactive: function (menuname) {
        for (var i = 0; i < navigation.length; i++) {
          if (navigation[i].name == menuname) {
            navigation[i].classis = "active";
          } else {
            navigation[i].classis = "";
          }
        }
        return menuname;
      },
      getProfile: function (callback, errCallback) {
        return $http({
          url: adminURL + "/user/profile",
          method: "POST"
        }).success(callback).error(errCallback);
      },

      logout: function (callback, errCallback) {
        return $http({
          url: adminURL + "/user/logout",
          method: "POST"
        }).success(callback).error(errCallback);
      },

      getAllCountries: function (callback, errCallback) {
        return $http({
          url: adminURL + "/country/getAll",
          method: "POST"
        }).success(callback).error(errCallback);
      },

      getAllCities: function (formData, callback, errCallback) {
        $http.post(adminURL + "/city/locationSearch", formData).success(callback).error(errCallback);
      },
      searchCityByCountry: function (formData, callback) {
        var arr = {};
        console.log(formData);
        var arr = _.omit(formData, ['cityVisited']);
        console.log(arr);

        $http({
          url: adminURL + "/city/searchCity",
          data: formData,
          method: "POST"
        }).success(callback);
      },
      saveUserData: function (formData, callback, errorCallback) {
        $http.post(adminURL + "/user/editUserWeb", formData).success(callback).error(errorCallback);
      },

      travelCount: function (callback, errorCallback) {
        $http.post(adminURL + "/user/getOneDataWeb").success(callback).error(errorCallback);
      },

      getBucketListWeb: function (callback, errorCallback) {
        $http.post(adminURL + "/user/getBucketListWeb").success(callback).error(errorCallback);
      },

      updateCountriesVisitedWeb: function (formData, callback, errCallback) {
        $http.post(adminURL + "/user/updateCountriesVisitedWeb", formData).success(callback).error(errCallback);
      },
      checkToken: function (formData, callback) {
        $http.post(adminURL + "/user/checkToken", formData).success(callback);
      },
      changePasswordEmail: function (formData, callback) {
        $http.post(adminURL + "/user/changePasswordEmail", formData).success(callback);
      },
      getDestination: function (formData, callback) {
        $http.post(adminURL + "/country/getDestination", formData).success(function (data) {
          data.count = formData.count;
          callback(data);
        });
      },
      getCountryDestination: function (formData, callback) {
        $http.post(adminURL + "/country/getOneCountry", formData).success(function (data) {
          callback(data);
        });
      },
      getCityDestination: function (formData, callback) {
        $http.post(adminURL + "/city/getOneCity", formData).success(function (data) {
          callback(data);
        });
      },
      getDestinationBooking: function (formData, callback) {
        $http.get("http://192.168.0.119:3000/migrations/city_bookings.json?city_name=" + formData.cityName + "&country_name=" + formData.countryName + "&withCredentials=true", formData).success(function (data) {
          callback(data);
        });
      },
      uploadFile: function (formData, callback) {
        console.log(formData);
        $http.post(uploadurl, formData, {
          headers: {
            'Content-Type': undefined
          },
          transformRequest: angular.identity
        }).success(callback);
      },
      editUserData: function (userData, callback) {
        var formData = _.clone(userData);
        var temp = "";
        if (userData.homeCity && userData.homeCity.description) {
          console.log("changing homecity");
          temp = userData.homeCity.description;
          formData.homeCity = "";
          formData.homeCity = temp;
        }
        if (userData.homeCountry && userData.homeCountry.name) {
          console.log("changing homecountry");
          temp = userData.homeCountry._id;
          formData.homeCountry = "";
          formData.homeCountry = temp;
        }
        if (userData.newProfilePicture) {
          formData.profilePicture = userData.newProfilePicture;
        }
        console.log(formData, "after formating");
      }
    };
  });
