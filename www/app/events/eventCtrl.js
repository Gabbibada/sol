angular.module('sol')

        .controller('eventCtrl', function ($scope, $http, $timeout, $ionicLoading) {

            var futureResponse = $http.get('http://www.lanreonasanyaministry.org/api/get_posts/');
            //var futureResponse = $http.get('http://localhost/solcc/api/get_recent_posts/');


            futureResponse.success(function (data) {

                var event = data['posts'];
                $scope.event = event;
            });

            futureResponse.error(function (data) {
                throw new Error('Something went wrong');
            });

            futureResponse.finally(function () {
                $ionicLoading.hide();
            });

            $scope.toggleGroup = function (event) {
                if ($scope.isGroupShown(event)) {
                    $scope.shownGroup = null;
                } else {
                    $scope.shownGroup = event;
                }
            };
            $scope.isGroupShown = function (event) {
                return $scope.shownGroup === event;
            };
        });