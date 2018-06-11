app.controller('eventCtrl', ['$scope', '$http', function ($scope, $http) {

    $http.get("https://api.helsingborg.se/event/json/wp/v2/event/").then(function (events) {
        $scope.events = events.data;

        console.log(events);

    });
}]);