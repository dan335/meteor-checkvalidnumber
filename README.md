A pattern for Meteor's check package to catch divide by zero errors.

    check(Infinity, Number); // passes
    check(1/0, Number); // passes

    meteor add danimal:checkvalidnumber
    check(Infinity, validNumber); // errors
    check(1/0, validNumber); // errors

Also includes a function that returns true or false.

    isValidNumber(10); // true
    isValidNumber(Infinity); // false
