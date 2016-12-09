angular.module('starter.controllers', [])

.controller('HomeCtrl', function($scope) {})
.controller('AboutCtrl', function($scope) {})


.controller('RegCtrl', function($scope) {
  $scope.options = {
  loop: true,
  effect: 'fade',
  speed: 500,
}

// $scope.$on("$ionicSlides.sliderInitialized", function(event, data){
//   // data.slider is the instance of Swiper
//   $scope.slider = data.slider;
// });

// $scope.$on("$ionicSlides.slideChangeStart", function(event, data){
//   console.log('Slide change is beginning');
// });

// $scope.$on("$ionicSlides.slideChangeEnd", function(event, data){
//   // note: the indexes are 0-based
//   $scope.activeIndex = data.slider.activeIndex;
//   $scope.previousIndex = data.slider.previousIndex;
// });
})
.controller('LogCtrl', function($rootScope) {
  $rootScope.submit = function(name){
    //$scope.name=name;
    console.log(name);
  $rootScope.$broadcast('userevent', name );
//   $scope.data = { "name" : $scope.name,
// "pass" : $scope.password
// };

// console.log($scope.data);
};
})
.controller('UserCtrl', function($rootScope,$scope) {
  $scope.submit1 = function($scope){
    console.log("lusu");
    $scope.$on('userevent', function (event, data) {
    console.log(data);
    console.log(sucess);

});
};
})

.controller('AppCtrl', function($scope) {
})

.controller('PlaylistsCtrl', function($scope) {
  $scope.playlists = [
    { title: 'Reggae', id: 1 },
    { title: 'Chill', id: 2 },
    { title: 'Dubstep', id: 3 },
    { title: 'Indie', id: 4 },
    { title: 'Rap', id: 5 },
    { title: 'Cowbell', id: 6 }
  ];
})

.controller('PlaylistCtrl', function($scope, $stateParams) {
})

.controller('IntroCtrl', ['$scope', '$state', '$ionicPopup', function($scope, $state, $ionicPopup) {
    $scope.step2 = {};
    $scope.step3 = {};

    $scope.start = function() {
        $state.go('app.playlists');
    };

    $scope.startCondition = function() {
        return angular.isDefined($scope.step3.something);
    };
}])

.controller('ChatsCtrl', function($scope, Chats) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  $scope.chats = Chats.all();
  $scope.remove = function(chat) {
    Chats.remove(chat);
  };
})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});
