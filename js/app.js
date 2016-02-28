(function() {
    var app = angular.module('Vonage Challenges', []);

    app.controller('ParseController', function() {
        this.strInput = "";

        this.getParsedStr = function() {
//            var str = this.strInput
//            if (/\d\s\d/.test(str)) return NaN;  // Check digit-space-digit case.
//            str = str.replace(/\s/g, "");        // Remove whitespace.
//            if (/\D/.test(str)) return NaN;      // Check non-digit chars (/\D/).
//
//            // Invariant: At this point str must be only digits.
//            return str;
            return myParseInt(this.strInput);
        };
    });
    
})();