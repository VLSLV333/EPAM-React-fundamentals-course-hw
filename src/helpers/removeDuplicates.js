export default function removeDuplicates(arr1, arr2) {
	let uniqueValues = new Set(arr2.map((obj) => obj.id));

	let filteredArr = arr1.filter((obj) => !uniqueValues.has(obj.id));
	return filteredArr;
}
