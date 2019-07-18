var romanToInt = function(s) {
var hash = {};
  hash["I"] = 1;
  hash["X"] = 10;
  hash["C"] = 100;
  hash["M"] = 1000;
  hash["V"] = 5;
  hash["L"] = 50;
  hash["D"] = 500;
  
for(var i in s){
var item = hash[s[i]];
var nextItem = i + 1 === s.length ? 0 : hash[s[i + 1]];

  if(nextItem > item){
  sum += nextItem - item;
  i++;
  }
  else {
  sum += item;
  }
}
return sum;
};
