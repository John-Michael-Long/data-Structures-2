/*
Divide & Conquer
Space Complexity: O(n)
Time Complexity: O(n*log(n)). 
Sorting In Place: No in a typical implementation
*/

const mergeSort = (list) => {
	if(list.length <= 1) return list;

	const midIdx = Math.floor(list.length / 2);
	const left = list.slice(0, midIdx)
	const right = list.slice(midIdx, list.length);

	const leftPart = mergeSort(left)
	const rightPart = mergeSort(right)

	return merge(leftPart, rightPart)
}

// const merge = (left, right) => {
// 	const result = [];
// 	while(left.length || right.length) {
// 		if(left.length && right.length) {
// 			if(left[0] < right[0]) {
// 				result.push(left.shift())
// 			} else {
// 				result.push(right.shift())
// 			}
// 		} else if(left.length) {
// 			result.push(left.shift())
// 		} else {
// 			result.push(right.shift())
// 		}
// 	}
// 	return result;
// }

const merge = (left, right) => {
	const result = [];
	const n = left.length;
	const m = right.length;
	let i = j = 0;
	while(i < n || j < m) {
		if(i < n && j < m) {
			if(left[i] < right[j]) {
				result.push(left[i++])
			} else {
				result.push(right[j++])
			}
		} else if(i < n) {
			result.push(left[i++])
		} else {
			result.push(right[j++])
		}
	}
	return result;
}


let arr = [5,4,-3,2,1,-1,0,-5,7]
console.log('before:', arr)
arr = mergeSort(arr)
console.log('after:', arr)

