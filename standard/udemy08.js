// 큇정렬 (n log n - 이미 배열이 정렬되어 있으면 안좋은 방식)

    // 1. 피봇 helper함수 구현
    function pivot(arr, start=0, end=arr.length+1){
        function swap(array, i, j){
            var temp = array[i];
            array[i] = array[j];
            array[j] = temp;
        }

        var pivot = arr[start];
        var swapIdx = start;

        for(var i = start +1; i < arr.length; i++){
            if(pivot > arr[i]){
                swapIdx++;
                swap(arr, swapIdx, i)
            }
        }
        swap(arr, start, swapIdx)
        // 위의 swap(array, i, j) 에 대입을 통하여 스왑
        return swapIdx
    }

    pivot([4,8,2,1,5,7,6,3])

    // 2. ES2015.ver
    function pivot(arr, start = 0, end = arr.length -1){
        const swap = (arr, idx1, idx2) => {
            [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
        };

        let pivot = arr[start];
        let swapIdx = start;

        for(let i = start +1; i <= end; i++){
            if(pivot > arr[i]){
                swapIdx++;
                swap(arr, swapIdx, i);
            }
        }

        swap(arr, start, swapIdx);
        return swapIdx;

    }

    pivot([4,8,2,1,5,7,6,3])

    // 구현
    function quickSort(arr, left=0, right = arr.length-1){
        if(left < right){
            let pivotIndex = pivot(arr, left, right) // 3
            // left
            quickSort(arr,left,pivotIndex-1);
            // right
            quickSort(arr,pivotIndex+1,right);
        }
        return arr;
    }
    quickSort([4,6,9,1,2,5,3])

    