// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers', 'starter.services'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($ionicConfigProvider){
  $ionicConfigProvider.platform.android.tabs.position("bottom");
})

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider

  // setup an abstract state for the tabs directive
    .state('tab', {
    url: '/tab',
    abstract: true,
    templateUrl: 'templates/tabs.html'
  })

  // Each tab has its own nav history stack:

  .state('tab.home', {
    url: '/home',
    views: {
      'tab-home': {
        templateUrl: 'templates/homepage.html',
        controller: 'HomeCtrl'
      }
    }
  })

  .state('tab.about', {
    url: '/home/about',
    views: {
      'tab-home': {
        templateUrl: 'templates/about.html',
        controller: 'AboutCtrl'
      }
    }
  })

  

  .state('tab.register', {
      url: '/register',
      views: {
        'tab-register': {
          templateUrl: 'templates/register.html',
          controller: 'RegCtrl'
        }
      }
    })
  .state('tab.form_orphans', {
    url: '/register/form_orphans',
    views: {
      'tab-register': {
        templateUrl: 'templates/form_orphans.html',
        controller: 'RegCtrl'
      }
    }
  })
  .state('tab.form_oldage', {
    url: '/register/form_oldage',
    views: {
      'tab-register': {
        templateUrl: 'templates/form_oldage.html',
        controller: 'RegCtrl'
      }
    }
  })
  .state('tab.form_volunteers', {
    url: '/register/form_volunteers',
    views: {
      'tab-register': {
        templateUrl: 'templates/form_volunteers.html',
        controller: 'RegCtrl'
      }
    }
  })
  .state('tab.form_donators', {
    url: '/register/form_donators',
    views: {
      'tab-register': {
        templateUrl: 'templates/form_donators.html',
        controller: 'RegCtrl'
      }
    }
  })
    .state('tab.chat-detail', {
      url: '/chats/:chatId',
      views: {
        'tab-chats': {
          templateUrl: 'templates/chat-detail.html',
          controller: 'ChatDetailCtrl'
        }
      }
    })

  .state('tab.login', {
    url: '/login',
    views: {
      'tab-login': {
        templateUrl: 'templates/login.html',
        controller: 'LogCtrl'
      }
    }
  })
  .state('tab.user', {
    url: '/login/user',
    views: {
      'tab-login': {
        templateUrl: 'templates/user.html',
        controller: 'UserCtrl'
      }
    }
  })

  .state('tab.intro', {
          url: '/register/form_orphans/intro',
          views: {
            'tab-register': {
          templateUrl: 'templates/intro.html',
          controller: 'IntroCtrl'
        }
      }
      })

    .state('tab.app', {
      url: "/app",
      abstract: true,
      templateUrl: "menu.html",
      controller: 'AppCtrl'
    });

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/tab/home');

});
