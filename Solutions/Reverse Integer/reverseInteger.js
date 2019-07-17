var reverse = function(x) {
  var minn = Math.pow(-2, 31);
  var maxn = Math.pow(2, 31);
  var ans;
  var arr = x.toString().split('');
  if (x < 0) 
    arr.shift();  // remove '-'
  ans = Number(arr.reverse().join(''));
  if (x < 0)
    ans *= -1;
 // console.log(minn, maxn)
  if (ans < minn || ans > maxn)
    return 0;
  else
    return ans;
};
