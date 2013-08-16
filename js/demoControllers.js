function TopController($scope, DemoService) {
    $scope.topValue = 0;
    $scope.middleValue = 0;
    $scope.bottomValue = 0;

    $scope.$watch('topValue', function() {
        DemoService.updateTopValue($scope.topValue);
    });

    $scope.$on('valuesUpdated', function() {
        $scope.middleValue = DemoService.middleValue;
        $scope.bottomValue = DemoService.bottomValue;
    });
}

function MiddleController($scope, DemoService) {
    $scope.topValue = 0;
    $scope.middleValue = 0;
    $scope.bottomValue = 0;

    $scope.$watch('middleValue', function() {
        DemoService.updateMiddleValue($scope.middleValue);
    });

    $scope.$on('valuesUpdated', function() {
        $scope.topValue = DemoService.topValue;
        $scope.bottomValue = DemoService.bottomValue;
    });
}

function BottomController($scope, DemoService) {
    $scope.topValue = 0;
    $scope.middleValue = 0;
    $scope.bottomValue = 0;

    $scope.$watch('bottomValue', function() {
        DemoService.updateBottomValue($scope.bottomValue);
    });

    $scope.$on('valuesUpdated', function() {
        $scope.topValue = DemoService.topValue;
        $scope.middleValue = DemoService.middleValue;
    });
}