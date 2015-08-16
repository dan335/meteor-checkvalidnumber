validNumber = Match.Where(function(num) {
  return !isNaN(parseFloat(num)) && isFinite(num);
});
