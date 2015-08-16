validNumber = Match.Where(function(num) {
  return !isNaN(parseFloat(num)) && isFinite(num);
});

isValidNumber = function(num) {
  return !isNaN(parseFloat(num)) && isFinite(num);
}
