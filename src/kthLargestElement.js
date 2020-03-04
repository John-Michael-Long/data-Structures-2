

// like quick sort
const randomizedSelect = function() {
	const a = []

	function randomPivot(lo, hi) {
		let pivotIdx =  Math.floor((lo + hi) / 2) // random(lo, hi)

		// a.swap(pivotIdx, hi)
		return a[hi]
	}

	function randomizePartition
}