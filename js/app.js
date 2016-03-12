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
})();