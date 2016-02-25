/*
 * Author: Roland Fong
 * Description: Challenge project for Vonage.
 */

/* Challenge 1:
 * Returns integer representation of string only if
 * the string is a single integer value, allowing
 * whitespace at either end.
 */
var myParseInt = function(str) {
    if (/\d\s\d/.test(str)) return NaN;  // Check digit-space-digit case.
    str = str.replace(/\s/g, "");        // Remove whitespace.
    if (/\D/.test(str)) return NaN;      // Check non-digit chars (/\D/).
    
    // Invariant: At this point str must be only digits.
    return parseInt(str);                // Return integer.
}

/* Challenge 2:
 * Finds the smallest integer in a given array.
 * Runs in linear time.
 */
class SmallestIntegerFinder { findSmallestInt(args) {
    var min = args[0];
    for (var i = 1; i < args.length; i++)
        if (args[i] < min) min = args[i];
    return min;
} }
    
/* Challenge 3:
 * Finds how many breaks it takes to split an nxm chocolate bar.
 * Recursively breaks the bar and adds the number of breaks for
 * each smaller piece.
 */
var break_chocolate = function(n, m) {
    if (n <= 1 && m <= 1) return 0;
    if (n >= m)
        return break_chocolate(Math.floor(n / 2), m) + break_chocolate(Math.ceil(n / 2), m) + 1;
    return break_chocolate(n, Math.floor(m / 2)) + break_chocolate(n, Math.ceil(m / 2)) + 1;
}