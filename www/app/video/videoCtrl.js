angular.module('sol')

        .controller('videoCtrl', function ($scope, $http, $timeout, $ionicLoading) {

            var futureResponse = $http.get('http://www.lanreonasanyaministry.org/api/get_posts/?post_id=73');
            //var futureResponse = $http.get('http://localhost/lanreonasanya/api/get_category_posts/?category_id=13');


            futureResponse.success(function (data) {
                var video = data['posts'];
                $scope.video = video;
            });

            futureResponse.error(function (data) {
                throw new Error('Something went wrong');
            });

            futureResponse.finally(function () {
                $ionicLoading.hide();
            });
        })

        //Video filter
        .filter('filterSrc', function () {
            return function (text) {
                var output = angular.element(angular.element('<p>' + text + '</p>').find('iframe')[0]).attr('src');
                return(output);
            };
        })

        .config(function ($sceDelegateProvider) {
            $sceDelegateProvider.resourceUrlWhitelist(['**']);
        });