function quicksort(arr, t)
{

console.log("t = ", t, "arr = ", arr);
//if array is empty
if (arr.length === 0) {
return [];
}
  var left = [];
  var right = [];
  var pivot = arr[0];
  //go through each element in array
  for (var i = 1; i < arr.length; i++) {
      if (arr[i] < pivot) {
         left.push(arr[i]);
      } else {
         right.push(arr[i]);
      }
  }
  var t = quicksort(left, "L").concat(pivot, quicksort(right, "R"));
  return t;
}