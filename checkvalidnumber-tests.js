Tinytest.add('checkValidNumber', function (test) {
  // passes
  var tests = [
    1,
    0,
    -1.243e12,
    '0x89f',
    8e5
  ]

  for (i=0; i<tests.length; i++) {
    var error = null;

    try {
      check(tests[i], validNumber);
    } catch(e) {
      error = e;
    }

    test.isNull(error, tests[i]);
  }


  // fails
  var error = null;
  var tests = [
    'asdf',
    3/0,
    '1.2.3',
    '',
    '99,999',
    Infinity,
    NaN,
    -Infinity
  ];

  for (i=0; i<tests.length; i++) {
    var error = null;
    try {
      check(tests[i], validNumber);
    } catch (e) {
      error = e;
    }
    test.isNotNull(error, tests[i]);
  }
});
