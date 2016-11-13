var app = angular.module("shoppingList", []);

app.controller("myCtrl", function($scope) {
    $scope.products = ["Milk", "Bread", "Cheese"];
    $scope.addItem = function() {
        // $scope.errortext = "";
        $scope.errorText = false;
        $scope.removeText = false;
        if (!$scope.addMe) {
            return;
        }
        if ($scope.products.indexOf($scope.addMe) == -1) {
            $scope.products.push($scope.addMe);
            $scope.addMe = "";
        } else {
            // $scope.errortext = "The item is already in your shopping list.";
            $scope.errorText = true;
            $scope.addMe = "";
        }
    };
    $scope.removeItem = function(x) {
        // $scope.errortext = "";
        $scope.products.splice(x, 1);
        $scope.removeText = true;
    };
});
