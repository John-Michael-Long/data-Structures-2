/*
Divide & Conquer

AVERAGE COMPLEXITY: nlog(n)
WORST CASE: n^2

1. First select an element which is to be called as pivot element.
2. Next, compare all array elements with the selected pivot element and 
	 arrange them in such a way that, elements less than the pivot element are
	 to it's left and greater than pivot is to it's right.
3. Finally, perform the same operations on left and right side elements to the pivot element.
*/


/*
1. First find the "pivot" element in the array.
2. Start the left pointer at first element of the array.
3. Start the right pointer at last element of the array.
4. Compare the element pointing with left pointer and if it is less than the pivot element, 
   then move the left pointer to the right (add 1 to the left index). 
   Continue this until left side element is greater than or equal to the pivot element.
5. Compare the element pointing with right pointer and if it is greater than the pivot element, 
   then move the right pointer to the left (subtract 1 to the right index). 
   Continue this until right side element is less than or equal to the pivot element.
6. Check if left pointer is less than or equal to right pointer, 
	 then swap the elements in locations of these pointers.
7. Increment the left pointer and decrement the right pointer.
8. If index of left pointer is still less than the index of the right pointer, 
	 then repeat the process; else return the index of the left pointer.
*/


function quickSort(items, left, right) {
	console.log('\n ***************** QuickSort start ******************')
	console.log('left:', left, '| right:', right)
	if(items.length < 2) return items;

	let index = partition(items, left, right);
	
	console.log('items after partition:', items)
	console.log('index retured:', index)

	// more elements on the left side of pivot
	if(left < index - 1) {
		console.log('call quickSort on left')
		quickSort(items, left, index - 1);
	}
	// more elements on the right side of pivot
	if(right > index) {
		console.log('call quickSort on right')
		quickSort(items, index, right);
	}

	return items; 
}



function swap(items, leftIdx, rightIdx) {
	const temp = items[leftIdx];
	items[leftIdx] = items[rightIdx];
	items[rightIdx] = temp;
}


function partition(items, left, right) {
	console.log('partition function')
	let midIdx = Math.floor((right + left) / 2);
	let pivot = items[midIdx];
	console.log('midIndex:', midIdx, ' | pivot val:', pivot)

	let i = left, j = right;

	while(i <= j) {
		while(items[i] < pivot) i++;

		while(items[j] > pivot) j--;

		if(i <= j) {
			swap(items, i, j);
			i++;
			j--;
		}
	}
	return i;
}

const arr = [5,4,-3,2,1,-1,0,-5,7]
console.log('start:', arr)
quickSort(arr, 0, arr.length - 1)
console.log(arr)