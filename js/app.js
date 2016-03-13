(function() {
    var app = angular.module('Vonage Challenges', []);

    app.controller('ParseController', function() {
        this.strInput = "";

        this.getParsedStr = function() {
            return myParseInt(this.strInput);
        };
    });
    
    app.controller('FindController', function() {
        this.arrayInput = "";
        this.smallest = "";
        
        this.getSmallest = function() {
            var arr = this.arrayInput.split(/\s/); // Read input into array
            for (var i = 0; i < arr.length; i++) { // Make sure they're all ints
                arr[i] = parseInt(arr[i]);
            }
            this.smallest = SmallestIntegerFinder.findSmallestInt(arr);
        };
    });
    
    app.controller('ChocolateController', function() {
        this.breaks = 0;
        this.width = 0;
        this.height = 0;
        
        this.calculate = function() {
            this.breaks = break_chocolate(this.width, this.height);
        }
    });
    
    // Adapted from angularjs.org
    app.directive('tabs', function() {
        return {
            restrict: 'E',
            templateUrl: '../html/tab.html',
            replace: 'true',
            transclude: true,
            scope: {},
            controller: function($scope, $element) {
                var panes = $scope.panes = [];
 
                $scope.select = function(pane) {
                    angular.forEach(panes, function(pane) {
                        pane.selected = false;
                    });
                    pane.selected = true;
                }
 
                this.addPane = function(pane) {
                    if (panes.length == 0) $scope.select(pane);
                    panes.push(pane);
                }
            },
            controllerAs: 'tabs'
        };
    });
    // Adapted from angularjs.org
    app.directive('pane', function() {
        return {
            require: '^tabs',
            restrict: 'E',
            transclude: true,
            scope: { title: '@' },
            link: function(scope, element, attrs, tabsController) {
                tabsController.addPane(scope);
            },
            template:
                '<div class="tab-pane" ng-class="{active: selected}" ng-transclude>' +
                '</div>',
            replace: true
        };
    });
})();