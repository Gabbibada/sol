angular.module('sol')

        .controller('audioCtrl', function ($scope, $http, $timeout, $ionicLoading) {

            var futureResponse = $http.get('http://www.lanreonasanyaministry.org/api/get_recent_posts/');
            //var futureResponse = $http.get('http://localhost/solcc/api/get_recent_posts/');


            futureResponse.success(function (data) {

                var audio = data['posts'];
                $scope.audio = audio;
            });

            futureResponse.error(function (data) {
                throw new Error('Something went wrong');
            });

            futureResponse.finally(function () {
                $ionicLoading.hide();
            });

            $scope.toggleGroup = function (news) {
                if ($scope.isGroupShown(news)) {
                    $scope.shownGroup = null;
                } else {
                    $scope.shownGroup = news;
                }
            };
            $scope.isGroupShown = function (news) {
                return $scope.shownGroup === news;
            };
        })
        //Audio filter
        .filter('filterSrc', function () {
            return function (text) {
                var output = angular.element(angular.element('<h4>' + text + '</h4>').find('a')[0]).attr('href');
                return(output);
            };
        })

        .config(function ($sceDelegateProvider) {
            $sceDelegateProvider.resourceUrlWhitelist(['**']);
        });