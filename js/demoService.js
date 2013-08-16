angular.module('demoService', []).factory('DemoService', function($rootScope){
    var service = {};
    service.topValue = 0;
    service.middleValue = 0;
    service.bottomValue = 0;

    service.updateTopValue = function(value){
        this.topValue = value;
        $rootScope.$broadcast("valuesUpdated");
    }

    service.updateMiddleValue = function(value){
        this.middleValue = value;
        $rootScope.$broadcast("valuesUpdated");
    }

    service.updateBottomValue = function(value){
        this.bottomValue = value;
        $rootScope.$broadcast("valuesUpdated");
    }

    return service;
});

var demo = angular.module('demo', ['demoService']);