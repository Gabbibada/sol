// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('sol', ['ionic', 'starter.controllers'])

        .run(function ($ionicPlatform) {
            $ionicPlatform.ready(function () {
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

        .config(function ($stateProvider, $urlRouterProvider, $ionicConfigProvider) {

            $ionicConfigProvider.tabs.position('top');

            $stateProvider
                    
                    .state('tab', {
                        url: '/tab',
                        abstract: true,
                        templateUrl: 'app/tabs.html'
                    })
                    

                    .state('tab.home', {
                        url: '/home',
                        views: {
                            'tab-home': {
                                templateUrl: 'app/home/tab-home.html',
                                controller: 'DashCtrl'
                            }
                        }
                    })

                    .state('tab.audio', {
                        url: '/audio',
                        views: {
                            'tab-audio': {
                                templateUrl: 'app/audio/tab-audio.html',
                                controller: 'audioCtrl'
                            }
                        }
                    })

                    .state('tab.video', {
                        url: '/video',
                        views: {
                            'tab-video': {
                                templateUrl: 'app/video/tab-video.html',
                                controller: 'videoCtrl'
                            }
                        }
                    })

                    .state('tab.articles', {
                        url: '/articles',
                        views: {
                            'tab-articles': {
                                templateUrl: 'app/articles/tab-articles.html'
                                //controller: 'articlesCtrl'
                            }
                        }
                    })
                    
                    .state('tab.news', {
                        url: '/news',
                        views: {
                            'tab-news': {
                                templateUrl: 'app/news/tab-news.html'
                            }
                        }
                    })
                    
                    .state('tab.events', {
                        url: '/events',
                        views: {
                            'tab-events': {
                                templateUrl: 'app/events/tab-events.html',
                                controller: 'eventCtrl'
                            }
                        }
                    });

            // if none of the above states are matched, use this as the fallback
            $urlRouterProvider.otherwise('/tab/home');

        });
