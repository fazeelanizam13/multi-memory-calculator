'use strict';

var Calculator = angular.module('Calculator', []);

Calculator.controller('CalController', ['$scope', function ($scope) {
    $scope.inputExpression = "";
    $scope.result = "";
    $scope.memory = [];
    
    //-------------------------------------------------------------------    
    
    $scope.one = function(){
        $scope.inputExpression = $scope.inputExpression + "1";
        $scope.result = eval($scope.inputExpression);
    }
    
    $scope.two = function(){
        $scope.inputExpression = $scope.inputExpression + "2";
        $scope.result = eval($scope.inputExpression);
    }
    
    $scope.three = function(){
        $scope.inputExpression = $scope.inputExpression + "3";
        $scope.result = eval($scope.inputExpression);
    }
    
    $scope.four = function(){
        $scope.inputExpression = $scope.inputExpression + "4";
        $scope.result = eval($scope.inputExpression);
    }
    
    $scope.five = function(){
        $scope.inputExpression = $scope.inputExpression + "5";
        $scope.result = eval($scope.inputExpression);
    }
    
    $scope.six = function(){
        $scope.inputExpression = $scope.inputExpression + "6";
        $scope.result = eval($scope.inputExpression);
    }
    
    $scope.seven = function(){
        $scope.inputExpression = $scope.inputExpression + "7";
        $scope.result = eval($scope.inputExpression);
    }
    
    $scope.eight = function(){
        $scope.inputExpression = $scope.inputExpression + "8";
        $scope.result = eval($scope.inputExpression);
    }
    
    $scope.nine = function(){
        $scope.inputExpression = $scope.inputExpression + "9";
        $scope.result = eval($scope.inputExpression);
    }
    
    $scope.zero = function(){
        $scope.inputExpression = $scope.inputExpression + "0";
        $scope.result = eval($scope.inputExpression);
    }
    
    $scope.doubZero = function(){
        $scope.inputExpression = $scope.inputExpression + "00";
        $scope.result = eval($scope.inputExpression);
    }
    
    //-------------------------------------------------------------
    
    $scope.mult = function(){
        $scope.inputExpression = $scope.inputExpression + "*";
        $scope.result = eval($scope.inputExpression);
    }
    
    $scope.sub = function(){
        $scope.inputExpression = $scope.inputExpression + "-";
        $scope.result = eval($scope.inputExpression);
    }
    
    $scope.add = function(){
        $scope.inputExpression = $scope.inputExpression + "+";
        $scope.result = eval($scope.inputExpression);
    }
    
    $scope.div = function(){
        $scope.inputExpression = $scope.inputExpression + "/";
        $scope.result = eval($scope.inputExpression);
    }
    
    $scope.dec = function(){
        $scope.inputExpression = $scope.inputExpression + ".";
        $scope.result = eval($scope.inputExpression);
    }
    
    $scope.brackLeft = function(){
        $scope.inputExpression = $scope.inputExpression + "(";
        $scope.result = eval($scope.inputExpression);
    }
    
    $scope.brackRight = function(){
        $scope.inputExpression = $scope.inputExpression + ")";
        $scope.result = eval($scope.inputExpression);
    }
    
    //--------------------------------------------------------------
    
    $scope.clear = function(){
        $scope.inputExpression = "";
        $scope.result = "";
    }
    
    $scope.memAdd = function(){
        if($scope.result === "")
            $scope.memory.push($scope.inputExpression);
        else
            $scope.memory.push($scope.result);
    }
    
    $scope.memClear = function(){
        $scope.memory.pop();
    }
    
    $scope.useMem = function(mem){
        $scope.inputExpression = $scope.inputExpression + mem;
        $scope.result = eval($scope.inputExpression);
    }
    
    $scope.backspace = function(){
        $scope.inputExpression = 
        $scope.inputExpression.substr(0, $scope.inputExpression.length-1);
        $scope.result = eval($scope.inputExpression);
    }
    
    //--------------------------------------------------------------
    
    $scope.equ = function(){
        $scope.inputExpression = eval($scope.inputExpression);
        $scope.result = "";
    }
}]);

