// write a function quicksort that takes an array of numbers and sorts it using the quicksort algorithm.
//  The quicksort algorithm uses the "divide and conquer" strategy, selecting a pivot element,
//   partitioning the array around the pivot, and recursively sorting the partitions.



// Hint

// Quicksort works by choosing a pivot element, then partitioning the array such that elements smaller than the pivot are on the left and those larger are on the right.
// Recursively sort the left and right partitions.
// The choice of pivot can vary (e.g., first element, last element, middle element). Experiment with different pivot selections to see how it affects performance.

// Additional Information
// Quicksort has a worst-case time complexity of 
// 𝑂(𝑛2)
// O(n2), but its average case is 𝑂(𝑛log𝑛)
// O(nlogn), making it efficient for most scenarios.
// Ensure the recursion has a base case to avoid infinite loops. 
// A common base case is when the array has zero or one element.

const unsortedArray = [5, 3, 8, 6, 2, 7, 4, 1];

const quicksort=(arr)=>{
    if(arr?.length<=1) return arr;
    let pivot =arr[0];
    let left=[];
    let right=[];

    for(let i=1;i<arr?.length;i++){
        if(arr[i]<pivot){
            left.push(arr[i]);
        }else{
            right.push(arr[i]);
        }
    }

    return[...quicksort(left),pivot,...quicksort(right)]

}

console.log(quicksort(unsortedArray)); 
// Expected output: [1, 2, 3, 4, 5, 6, 7, 8]
