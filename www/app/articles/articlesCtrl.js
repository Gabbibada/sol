angular.module('sol')

        .controller('articlesCtrl', function ($scope) {
            var cardTypes = [{
                    title: 'Faith',
                    image: 'img/article/pic.png'
                }, {
                    title: 'Holy Spirit',
                    image: 'img/article/pic5.png'
                }, {
                    title: 'Joy',
                    image: 'img/article/pic2.png'
                }, {
                    title: 'Hope',
                    image: 'img/article/pic3.png'
                }, {
                    title: 'Happiness',
                    image: 'img/article/pic4.png'
                }, {
                    title: 'Hope',
                    image: 'img/article/pic6.png'
                }, {
                    title: 'Joy',
                    image: 'img/article/pic8.png'
                },
                {
                    title: 'Happiness',
                    image: 'img/article/pic7.png'
                }];

            $scope.cards = Array.prototype.slice.call(cardTypes, 0, 0);

            $scope.cardSwiped = function (index) {
                $scope.addCard();
            };

            $scope.cardDestroyed = function (index) {
                $scope.cards.splice(index, 1);
            };

            $scope.addCard = function () {
                var newCard = cardTypes[Math.floor(Math.random() * cardTypes.length)];
                newCard.id = Math.random();
                $scope.cards.push(angular.extend({}, newCard));
            }
        })

        .controller('articlesCtrl', function ($scope, $ionicSwipeCardDelegate) {
            $scope.goAway = function () {
                var card = $ionicSwipeCardDelegate.getSwipeableCard($scope);
                card.swipe();
            };
        });
