/*
Space complexity: O(1)
Best case performance: O(n)
Average case performance: O(n*n)
Worst case performance: O(n*n)

*/



function bubleSort(arr) {
	const n = arr.length;
	let sorted = false;

	while(!sorted) {
		sorted = true
		for(let i = 1; i < n; i++) {
			if(arr[i - 1] > arr[i]) {
				let temp = arr[i];
				arr[i] = arr[i - 1];
				arr[i - 1] = temp;
				sorted = false;
			}
		}
	}
	return arr
}

const arr = [5,4,-3,2,1,-1,0,-5,7];

console.log('arr before:', arr)
bubleSort(arr)
console.log('arr after :', arr)



/*
SELECTION SORT

TIME COMPLEXITY
BEST: n
AVG: n^2
*/

function selectionSort(arr){
  var minIdx, temp, 
      len = arr.length;
  for(var i = 0; i < len; i++){
    minIdx = i;
    for(var  j = i+1; j<len; j++){
       if(arr[j]<arr[minIdx]){
          minIdx = j;
       }
    }
    temp = arr[i];
    arr[i] = arr[minIdx];
    arr[minIdx] = temp;
  }
  return arr;
}
